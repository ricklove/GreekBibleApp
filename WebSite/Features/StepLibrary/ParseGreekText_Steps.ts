/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/Support/ParsePassageText.ts" />

module Told.GreekBible.Tests.Steps {

    var sample = ""
        + "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"
        + "200101 N- ----GSM- θεοῦ θεοῦ θεοῦ θεός \r\n"
        + "200101 C- -------- καὶ καὶ καί καί \r\n"
        + "200101 N- ----GSM- κυρίου κυρίου κυρίου κύριος \r\n"
        + "200101 N- ----GSM- Ἰησοῦ Ἰησοῦ Ἰησοῦ Ἰησοῦς \r\n";

    var text: string;
    var passage: Told.GreekBible.Data.IPassage;
    var entry: Told.GreekBible.Data.IEntry;
    var entryExpected: Told.GreekBible.Data.IEntry;

    stepLibrary
        .given("a sample text", function () {
            text = sample;
        })
        .when("the text is parsed", function () {
            passage = Told.GreekBible.Data.Parser.parsePassage(text);
        })
        .when("the first entry is accessed", function () {
            // "200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος \r\n"
            entry = passage.entries[0];

            entryExpected = <any>{};
            entryExpected.rawText = "Ἰάκωβος";
            entryExpected.morph = <any>{ morphCode: "----NSM-" };
            entryExpected.partOfSpeech = <any>{ partOfSpeechCode: "N-" };
            entryExpected.passageRef = <any>{ bookNumber: "20", chapter: "1", verse: "1" };
            entryExpected.lemma = "Ἰάκωβος";
        })
        .when("the last entry is accessed", function () {
            // "200101 N- ----GSM- Ἰησοῦ Ἰησοῦ Ἰησοῦ Ἰησοῦς \r\n"
            entry = passage.entries[passage.entries.length - 1];

            entryExpected = <any>{};
            entryExpected.rawText = "Ἰησοῦ";
            entryExpected.morph = <any>{ morphCode: "----GSM-" };
            entryExpected.partOfSpeech = <any>{ partOfSpeechCode: "N-" };
            entryExpected.passageRef = <any>{ bookNumber: "20", chapter: "1", verse: "1" };
            entryExpected.lemma = "Ἰησοῦς";
        })
        .then("the greek word should be correct", function () {
            ok(entry != null, "The first entry is available");
            equal(entry.rawText, entryExpected.rawText, "The first greek word is correct");
        })
        .then("the entry details should be correct", function () {
            equal(entry.rawText, entryExpected.rawText, "The rawText is right");
            equal(entry.morph.morphCode, entryExpected.morph.morphCode, "The morphCode is right");
            equal(entry.partOfSpeech.partOfSpeechCode, entryExpected.partOfSpeech.partOfSpeechCode, "The partOfSpeechCode is right");
            equal(entry.passageRef.bookNumber, entryExpected.passageRef.bookNumber, "The bookIndex is right");
            equal(entry.passageRef.chapter, entryExpected.passageRef.chapter, "The chapter is right");
            equal(entry.passageRef.verse, entryExpected.passageRef.verse, "The verse is right");
            equal(entry.lemma, entryExpected.lemma, "The lemma is right");
        })

    // This would require manually setting the UI value
    //.given("this is not the first run", function () {
    //    throw "pending";
    //    isFirstRun = false;
    //})
    //.given("this is the first run", function () {
    //    throw "pending";
    //    isFirstRun = true;
    //})
    //.when("the app is loaded", function (next) {
    //    viewModel = new UI.MainViewModel();

    //    var onLoad = function () {
    //        next();
    //    }

    //    var onError = function (message: string) {
    //        ok(false, "ERROR:" + message);
    //        next();
    //    }

    //    if (isFirstRun) {
    //        viewModel.loadDefault(onLoad, onError);
    //    } else {
    //        throw "Not Implemented: The viewModel cannot load last";
    //        //viewModel.loadLast();
    //    }

    //    return true;
    //})
    //.then("a (?:default )?passage should be displayed", function () {
    //    ok(viewModel.passage(), "The passage is displayed");
    //    ok(viewModel.passage().entries, "The entries are displayed");
    //    ok(viewModel.passage().entries[0].rawText, "The first entry is displayed");
    //})
    //.then("the last passage should be displayed", function () {
    //     throw "Pending";
    //})
    ;

}
