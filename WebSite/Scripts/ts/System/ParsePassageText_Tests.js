/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="ParsePassageText.ts" />
/// <reference path="ParsePassageText_TestData.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            (function (Tests) {
                var sampleText = Told.GreekBible.Data.Tests.Sample.sampleText;

                test("Will parse first word from Sample - James 1", function () {
                    var passage = Told.GreekBible.Data.Parser.parsePassage(sampleText);
                    var result = passage.entries[0].rawText;

                    equal(result, "Ἰάκωβος", "The first word is right");
                });

                test("Will parse last word from Sample - James 1", function () {
                    var passage = Told.GreekBible.Data.Parser.parsePassage(sampleText);
                    var result = passage.entries[passage.entries.length - 1].rawText;

                    equal(result, "κόσμου.", "The last word is right");
                });
            })(Data.Tests || (Data.Tests = {}));
            var Tests = Data.Tests;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
