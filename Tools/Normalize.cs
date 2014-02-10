//css_reference PresentationCore.dll;
using System;
using System.IO;
using System.Collections.Generic;
using System.Text;
using System.Diagnostics;
using System.Linq;

using System.Windows.Markup;
using System.Windows.Media;

class Script
{
    static public void Main(string[] args)
    {
        var currentDir = Directory.GetCurrentDirectory();
        //currentDir = @"D:\UserData\Projects\5HourApps\GreekBible\Data\sblgnt-master\Chapters";

        Console.WriteLine("Preparing to Normalize ...");

        Console.WriteLine("Source directory is: " + currentDir);
        Console.WriteLine("Ready to Proceed? (y,n)");
        var key = Console.ReadKey();

        if (key.Key != ConsoleKey.Y)
        {
            Console.WriteLine("ABORTED!");
            return;
        }

        Console.WriteLine("Normalize all *.txt and *.xml files");

        var filesToProcess = new List<string>();
        filesToProcess.AddRange(Directory.GetFiles(currentDir, "*.txt", SearchOption.TopDirectoryOnly));
        filesToProcess.AddRange(Directory.GetFiles(currentDir, "*.xml", SearchOption.TopDirectoryOnly));

        foreach (var file in filesToProcess)
        {
            var fileContents = File.ReadAllText(file);
            var normalized = fileContents.Normalize();

            var allChars = normalized.ToCharArray().Distinct().ToList();
            var unprintableChars = allChars.Where(c => !IsPrintable(c)).ToList();
            var unsupportedChars = unprintableChars.Where(c => ((int)c) > 128).ToList();

            var cleaned = normalized;

            foreach (var c in unsupportedChars)
            {
                cleaned = cleaned.Replace("" + c, "");
            }

            //var cleaned = normalized
            //    .Replace((char)11778, (char)706)
            //    .Replace((char)11779, (char)707);

            File.WriteAllText(file, cleaned);
            Console.WriteLine("Normalized " + file);
        }

        Console.WriteLine("Finished");
    }

    private static GlyphTypeface _glyphTypeface;

    public static GlyphTypeface GlyphTypeface
    {
        get
        {
            if (_glyphTypeface == null)
            {
                ICollection<FontFamily> fontFamilies = Fonts.GetFontFamilies(@"C:\Windows\Fonts\");
                var key = XmlLanguage.GetLanguage("en-us");
                var simpleFont = fontFamilies.First(f => f.FamilyNames.ContainsKey(key) && f.FamilyNames[key] == "Arial");
                var typeface = simpleFont.GetTypefaces().First(t => t.FaceNames.ContainsKey(key) && t.FaceNames[key] == "Regular");
                typeface.TryGetGlyphTypeface(out _glyphTypeface);
            }

            return _glyphTypeface;
        }
    }


    private static bool IsPrintable(char characterToCheck)
    {
        int unicodeValue = Convert.ToUInt16(characterToCheck);

        ushort glyphIndex;
        var isSupported = GlyphTypeface.CharacterToGlyphMap.TryGetValue(unicodeValue, out glyphIndex);

        return isSupported;
    }
}