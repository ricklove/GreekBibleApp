<%@  WebHandler Language="C#" Class="CommonAppHandler" %>

using System;
using System.Web;
using System.Collections.Generic;
using System.Text;
using System.IO;
using System.Linq;

public class CommonAppHandler : IHttpHandler
{
    public bool IsReusable
    {
        get { return true; }
    }

    public void ProcessRequest(HttpContext context)
    {
        HttpRequest request = context.Request;

        Action<string> doRespondError = delegate(string message)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write("Error: " + message);
            context.Response.End();
        };

        if (!string.IsNullOrEmpty(request.Params["appCache"]))
        {
            ProcessRequestForAppCache();
        }
        else
        {
            doRespondError("Unknown Request");
        }

    }

    public void ProcessRequestForAppCache()
    {
        var context = HttpContext.Current;

        var currentFile = context.Request.PhysicalPath;
        var appRoot = Directory.GetParent(currentFile).FullName;

        var exts = "js,css,gif,jpg,png,html,txt".Split(',');
        var files = exts.SelectMany(ext => Directory.GetFiles(appRoot, "*." + ext, SearchOption.AllDirectories));

        var extsToMonitor = "cshtml".Split(',');
        var filesToMonitor = extsToMonitor.SelectMany(ext => Directory.GetFiles(appRoot, "*." + ext, SearchOption.AllDirectories));

        var output = CreateAppCache(context, files, filesToMonitor, false);

        context.Response.ContentType = "text/cache-manifest";
        context.Response.Write(output);
        context.Response.End();
    }


    private static string CreateAppCache(HttpContext context, IEnumerable<string> filesToInclude, IEnumerable<string> fileChangesToMonitor, bool isDebug)
    {
        var template =
    @"CACHE MANIFEST

# Version: N/A
# Total Size: {TOTALSIZE}


CACHE:
{CACHEFILES}

NETWORK:
*
http://*
https://*

# File Dependencies:
{FILECHANGES}

#ENDFILE";

        var fileTemplate = @"
{0} #        {1}          {2:f0}kb";

        var fileChangeTemplate = @"
#{2} {0} #{1}";

        var filesText = new StringBuilder();

        var currentFile = context.Request.PhysicalPath;
        var appRoot = Directory.GetParent(currentFile).FullName;

        var clientAppRoot = new System.Uri(context.Request.Url, "../");


        //var currentDir = Directory.GetParent(currentFile).FullName;

        var totalSize = 0L;

        foreach (var file in filesToInclude)
        {
            var fileDate = File.GetLastWriteTime(file);
            var fileSize = new FileInfo(file).Length;
            totalSize += fileSize;
            var relativeFile = file.StartsWith(appRoot) ? file.Substring(appRoot.Length) : file;
            relativeFile = relativeFile.Replace("\\", "/");
            relativeFile = relativeFile.TrimStart('/');
            var clientFilePath = new Uri(clientAppRoot, relativeFile).AbsoluteUri;
            filesText.AppendFormat(fileTemplate, clientFilePath, fileDate.ToShortDateString() + " - " + fileDate.ToShortTimeString(), fileSize / 1000.0);
        }

        var fileChangesText = new StringBuilder();

        var fileChangesHash = 7L;
        int i = 0;
        foreach (var file in fileChangesToMonitor)
        {
            var fileDate = File.GetLastWriteTime(file);
            var relativeFile = file.StartsWith(appRoot) ? file.Substring(appRoot.Length) : file;
            relativeFile = relativeFile.Replace("\\", "/");
            relativeFile = relativeFile.TrimStart('/');
            var clientFilePath = new Uri(clientAppRoot, relativeFile).AbsoluteUri;
            fileChangesText.AppendFormat(fileChangeTemplate, clientFilePath, fileDate.ToShortDateString() + " - " + fileDate.ToShortTimeString(), "F" + i.ToString());

            fileChangesHash += (int)fileDate.Ticks * 23 * i;
            i++;
        }

        var fcText = "# Hash: " + ((int)fileChangesHash).ToString();

        if (isDebug)
        {
            fcText = fileChangesText.ToString();
        }

        return template
            .Replace("{TOTALSIZE}", (totalSize / 1000.0).ToString("f0") + "kb")
            .Replace("{CACHEFILES}", filesText.ToString())
            .Replace("{FILECHANGES}", fcText);
    }
}