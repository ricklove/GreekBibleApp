/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="ParsePassageText.ts" />
/// <reference path="ParsePassageText_TestData.ts" />

module Told.GreekBible.Data.Tests {

    var sampleText = Sample.sampleText;

    test("Will parse first word from Sample - James 1", function () {

        var passage = Parser.parsePassage(sampleText);
        var result = passage.entries[0].rawText;

        equal(result, "Ἰάκωβος", "The first word is right");
    });

    test("Will parse last word from Sample - James 1", function () {

        var passage = Parser.parsePassage(sampleText);
        var result = passage.entries[passage.entries.length - 1].rawText;

        equal(result, "κόσμου.", "The last word is right");
    });


}