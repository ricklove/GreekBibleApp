/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="ParsePassageText.ts" />
/// <reference path="ParsePassageText_TestData.ts" />

module Told.GreekBible.Data.Tests {

    var sampleText = Sample.sampleText;
    // First:   "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"
    // Last:    "200127 N- ----GSM- κόσμου. κόσμου κόσμου κόσμος \r\n"

    test("Will parse first word text from Sample - James 1", function () {

        var passage = Parser.parsePassage(sampleText);
        var result = passage.entries[0].rawText;

        equal(result, "Ἰάκωβος", "The word text is right");
    });

    test("Will parse last word text from Sample - James 1", function () {

        var passage = Parser.parsePassage(sampleText);
        var result = passage.entries[passage.entries.length - 1].rawText;

        equal(result, "κόσμου.", "The word text is right");
    });

    test("Will parse first word details from Sample - James 1", function () {
        // First:   "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"

        var passage = Parser.parsePassage(sampleText);
        var entry = passage.entries[0];

        equal(entry.rawText, "Ἰάκωβος", "The rawText is right");
        equal(entry.morph.morphCode, "----NSM-", "The morphCode is right");
        equal(entry.partOfSpeech.partOfSpeechCode, "N-", "The partOfSpeechCode is right");
        equal(entry.passageRef.bookNumber, "20", "The bookIndex is right");
        equal(entry.passageRef.chapter, "1", "The chapter is right");
        equal(entry.passageRef.verse, "1", "The verse is right");
        equal(entry.lemma, "Ἰάκωβος", "The lemma is right");
    });

    test("Will parse last word details from Sample - James 1", function () {
        // Last:    "200127 N- ----GSM- κόσμου. κόσμου κόσμου κόσμος \r\n"

        var passage = Parser.parsePassage(sampleText);
        var entry = passage.entries[passage.entries.length - 1];

        equal(entry.rawText, "κόσμου.", "The rawText is right");
        equal(entry.morph.morphCode, "----GSM-", "The morphCode is right");
        equal(entry.partOfSpeech.partOfSpeechCode, "N-", "The partOfSpeechCode is right");
        equal(entry.passageRef.bookNumber, "20", "The bookIndex is right");
        equal(entry.passageRef.chapter, "1", "The chapter is right");
        equal(entry.passageRef.verse, "27", "The verse is right");
        equal(entry.lemma, "κόσμος", "The lemma is right");
    });
}