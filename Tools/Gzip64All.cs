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

    Console.WriteLine("Preparing to Gzip and base64 encode ...");

    Console.WriteLine("Source directory is: " + currentDir);
    Console.WriteLine("Ready to Proceed? (y,n)");
    var key = Console.ReadKey();

    if (key.Key != ConsoleKey.Y)
    {
      Console.WriteLine("ABORTED!");
      return;
    }

    Console.WriteLine("Process all *.txt and *.xml files");

    var filesToProcess = new List<string>();
    filesToProcess.AddRange(Directory.GetFiles(currentDir, "*.txt", SearchOption.TopDirectoryOnly));
    filesToProcess.AddRange(Directory.GetFiles(currentDir, "*.xml", SearchOption.TopDirectoryOnly));

    foreach (var file in filesToProcess)
    {
      string sourceName = file;
      string gzipName = file.Replace(".txt", ".gz.txt").Replace(".xml", ".gz.xml");
      string gzip64Name = gzipName.Replace(".gz.", ".gz64.");

      // First gzip
      var exe7za = @"C:\Program Files\7-Zip\7z.exe";

      // 1
      // Initialize process information.
      //
      ProcessStartInfo p = new ProcessStartInfo();
      p.FileName = exe7za;

      // 2
      // Use 7-zip
      // specify a=archive and -tgzip=gzip
      // and then target file in quotes followed by source file in quotes
      //
      p.Arguments = "a -tgzip \"" + gzipName + "\" \"" + sourceName + "\" -mx=9";
      p.WindowStyle = ProcessWindowStyle.Hidden;

      // 3.
      // Start process and wait for it to exit
      //
      Process x = Process.Start(p);
      x.WaitForExit();

      // Second base64 encode
      var bytes = File.ReadAllBytes(gzipName);
      var base64 = Convert.ToBase64String(bytes);
      File.WriteAllText(gzip64Name, base64);

      File.Delete(gzipName);

      Console.WriteLine("Gzipped and Base64 Encoded: " + file);
    }


    Console.WriteLine("Finished");
  }

}