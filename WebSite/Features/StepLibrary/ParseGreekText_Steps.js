/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/Support/ParsePassageText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                var sample = "" + "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n" + "200101 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n" + "200101 C- -------- καὶ καὶ καί καί \r\n" + "200101 N- ----GSM- κυρίου κυρίου κυρίου κύριος \r\n" + "200101 N- ----GSM- Ἰησοῦ Ἰησοῦ Ἰησοῦ Ἰησοῦς \r\n";

                var text;
                var passage;
                var entry;
                var entryExpected;

                Told.GreekBible.Tests.Steps.stepLibrary.given("a sample text", function () {
                    text = sample;
                }).when("the text is parsed", function () {
                    passage = Told.GreekBible.Data.Parser.parsePassage(text);
                }).when("the first entry is accessed", function () {
                    // "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"
                    entry = passage.entries[0];

                    entryExpected = {};
                    entryExpected.rawText = "Ἰάκωβος";
                    entryExpected.morph = { morphCode: "----NSM-" };
                    entryExpected.partOfSpeech = { partOfSpeechCode: "N-" };
                    entryExpected.passageRef = { bookNumber: "20", chapter: "1", verse: "1" };
                    entryExpected.lemma = "Ἰάκωβος";
                }).when("the last entry is accessed", function () {
                    // "200101 N- ----GSM- Ἰησοῦ Ἰησοῦ Ἰησοῦ Ἰησοῦς \r\n"
                    entry = passage.entries[passage.entries.length - 1];

                    entryExpected = {};
                    entryExpected.rawText = "Ἰησοῦ";
                    entryExpected.morph = { morphCode: "----GSM-" };
                    entryExpected.partOfSpeech = { partOfSpeechCode: "N-" };
                    entryExpected.passageRef = { bookNumber: "20", chapter: "1", verse: "1" };
                    entryExpected.lemma = "Ἰησοῦς";
                }).then("the greek word should be correct", function () {
                    ok(entry != null, "The first entry is available");
                    equal(entry.rawText, entryExpected.rawText, "The first greek word is correct");
                }).then("the entry details should be correct", function () {
                    equal(entry.rawText, entryExpected.rawText, "The rawText is right");
                    equal(entry.morph.morphCode, entryExpected.morph.morphCode, "The morphCode is right");
                    equal(entry.partOfSpeech.partOfSpeechCode, entryExpected.partOfSpeech.partOfSpeechCode, "The partOfSpeechCode is right");
                    equal(entry.passageRef.bookNumber, entryExpected.passageRef.bookNumber, "The bookIndex is right");
                    equal(entry.passageRef.chapter, entryExpected.passageRef.chapter, "The chapter is right");
                    equal(entry.passageRef.verse, entryExpected.passageRef.verse, "The verse is right");
                    equal(entry.lemma, entryExpected.lemma, "The lemma is right");
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
