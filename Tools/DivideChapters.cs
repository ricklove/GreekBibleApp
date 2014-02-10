using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;

using System.Linq;

class Script
{
    static public void Main(string[] args)
    {
        var currentDir = Directory.GetCurrentDirectory();
        currentDir = Path.Combine(currentDir, args.FirstOrDefault());
        currentDir = Path.GetFullPath(currentDir);

        Console.WriteLine(args.FirstOrDefault());

        var targetDir = currentDir + @"\Chapters";

        Console.WriteLine("Preparing to DivideChapters ...");

        Console.WriteLine("Source directory is: " + currentDir);
        Console.WriteLine("Target directory is: " + targetDir);
        Console.WriteLine("Ready to Proceed? (y,n)");
        var key = Console.ReadKey();

        if (key.Key != ConsoleKey.Y)
        {
            Console.WriteLine("ABORTED!");
            return;
        }

        Console.WriteLine("DividingChapters in all *.txt files");

        if (!Directory.Exists(targetDir))
        {
            Directory.CreateDirectory(targetDir);
        }

        var filesToProcess = new List<string>();
        filesToProcess.AddRange(Directory.GetFiles(currentDir, "*.txt", SearchOption.TopDirectoryOnly));

        foreach (var file in filesToProcess)
        {
            var fileContents = File.ReadAllText(file);

            var lines = fileContents.Split(new char[] { '\r', '\n' }, StringSplitOptions.RemoveEmptyEntries).Select(l => l.Trim()).ToList

();
            var chapters = lines.GroupBy(l => l.Substring(0, 4)).Select(g => new
            {
                BookChapterCode = g.Key,
                Entries = g.ToList(),
                TargetFile = targetDir + @"\" + g.Key + ".txt",
                EntriesText = g.ToList().Aggregate(new StringBuilder(), (b, e) => b.AppendLine(e)).ToString()
            }).ToList();

            chapters.ForEach(c => File.WriteAllText(c.TargetFile, c.EntriesText));
            Console.WriteLine("DividedChapters " + file);
        }


        Console.WriteLine("Finished");
    }
}