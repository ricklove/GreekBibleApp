﻿/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="001_DisplayPassage.ts" />

module Told.GreekBible.UI.Tests {

    export interface ISample {
        bookName: string;
        bookNumber: number;
        chapter: number;
        firstEntryText: string;
        lastEntryText: string;
    }

    export var samples: ISample[] = [
        {
            // Acts 10
            // First entry: 
            // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
            // Last entry: 
            // 051048 RI ----APF- τινάς. τινάς τινάς τις
            bookName: "Acts",
            bookNumber: 5,
            chapter: 10,
            firstEntryText: "Ἀνὴρ",
            lastEntryText: "τινάς."
        },
        {
            // John 3
            // First entry: 
            // 040301 V- 3IAI-S-- Ἦν Ἦν ἦν εἰμί
            // Last entry: 
            // 040336 RP ----ASM- αὐτόν. αὐτόν αὐτόν αὐτός
            bookName: "John",
            bookNumber: 4,
            chapter: 3,
            firstEntryText: "Ἦν",
            lastEntryText: "αὐτόν."
        }
    ];

    export var step_WhenTheAppIsLoaded = function (viewModel: UI.MainViewModel, step: (title: string) => void, onLoaded: () => void, onFail: () => void) {
        step("When the app is loaded");

        var onReady = function () {
            onLoaded();
        };

        var onError = function (message: string) {
            ok(false, "ERROR:" + message);
            onFail();
        };

        viewModel.displayPassage.showDefault(onReady, onError);
    };

    export var step_ThenTheFirstEntryShouldBeDisplayed = function (viewModel: UI.MainViewModel, sample: ISample, step: (title: string) => void) {
        step("Then the first entry should be displayed");

        equal(viewModel.displayPassage.passage().entries[0].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
        equal(viewModel.displayPassage.passage().entries[0].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
        equal(viewModel.displayPassage.passage().entries[0].rawText, sample.firstEntryText, "The first entry text is displayed");
    };

    export var step_AndTheLastEntryShouldBeDisplayed = function (viewModel: UI.MainViewModel, sample: ISample, step: (title: string) => void) {
        step("And the last entry should be displayed");

        var iLast = viewModel.displayPassage.passage().entries.length - 1;
        equal(viewModel.displayPassage.passage().entries[iLast].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
        equal(viewModel.displayPassage.passage().entries[iLast].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
        equal(viewModel.displayPassage.passage().entries[iLast].rawText, sample.lastEntryText, "The last entry text is displayed");
    };

    var f = new FeatureTests.Feature("001 - View a Greek Passage", [
        "As a user,",
        "I can view a passage of greek",
        "So that I can examine the greek words and their details",
    ]);

    f.scenario("Should display a passage", [
        "When the app is loaded",
        "Then a passage should be displayed"
    ], function (step, done) {

            var providers: Data.IProviders = {
                userSettings: { bookChoice: "", chapterChoice: "" },
            };

            var viewModel = new UI.MainViewModel(providers);

            step_WhenTheAppIsLoaded(viewModel, step, function () {
                step("Then a passage should be displayed");

                ok(viewModel.displayPassage.passage(), "The passage is displayed");
                ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
                ok(viewModel.displayPassage.passage().entries[0].rawText, "An entry is displayed");

                done();
            }, done);

        });

    f.scenario("Should display a default passage", [
        "Given this is the first run",
        "When the app is loaded",
        "Then a default passage should be displayed",
    ], function (step, done) {

            step("Given this is the first run");

            var providers: Data.IProviders = {
                userSettings: { bookChoice: "", chapterChoice: "" },
            };

            var viewModel = new UI.MainViewModel(providers);

            step_WhenTheAppIsLoaded(viewModel, step, function () {
                step("Then a default passage should be displayed");

                ok(viewModel.displayPassage.passage(), "The passage is displayed");
                ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
                ok(viewModel.displayPassage.passage().entries[0].rawText, "An entry is displayed");

                done();
            }, done);

        });



    f.scenario("Should display the passage entries", [
        "Given this is not the first run",
        "When the app is loaded",
        "Then the first entry should be displayed",
        "And the last entry should be displayed",

    ], function (step, done) {

            step("Given this is not the first run");

            var sample = samples[0];

            var providers = {
                userSettings: {
                    bookChoice: sample.bookNumber.toString(),
                    chapterChoice: sample.chapter.toString(),
                },
            };

            var viewModel = new UI.MainViewModel(providers);

            step_WhenTheAppIsLoaded(viewModel, step, function () {
                step_ThenTheFirstEntryShouldBeDisplayed(viewModel, sample, step);
                step_AndTheLastEntryShouldBeDisplayed(viewModel, sample, step);
                done();
            }, done);

        });

}