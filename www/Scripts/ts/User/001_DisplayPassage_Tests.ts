/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="001_DisplayPassage.ts" />

module Told.GreekBible.UI.Tests {

    export interface ISample {
        bookName: string;
        bookNumber: number;
        chapter: number;
        verse: number;
        firstEntryText: string;
        lastEntryText: string;
    }

    export var samples: ISample[] = [
        {
            //// Acts 10
            //// First entry: 
            //// 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
            //// Last entry: 
            //// 051048 RI ----APF- τινάς. τινάς τινάς τις
            // One Verse: Acts 10:15
            // 051015 C- -------- καὶ καὶ καί καί
            // 051015 V- 2PAD-S-- κοίνου. κοίνου κοίνου κοινόω
            bookName: "Acts",
            bookNumber: 5,
            chapter: 10,
            verse: 15,
            firstEntryText: "καὶ",
            lastEntryText: "κοίνου."
        },
        {
            //// John 3
            //// First entry: 
            //// 040301 V- 3IAI-S-- Ἦν Ἦν ἦν εἰμί
            //// Last entry: 
            //// 040336 RP ----ASM- αὐτόν. αὐτόν αὐτόν αὐτός
            // One Verse: John 3:7
            //040307 D- -------- μὴ μὴ μή μή
            //040307 D- -------- ἄνωθεν. ἄνωθεν ἄνωθεν ἄνωθεν
            bookName: "John",
            bookNumber: 4,
            chapter: 3,
            verse: 7,
            firstEntryText: "μὴ",
            lastEntryText: "ἄνωθεν."
        }
    ];

    export var providers_Empty: Data.IProviders = {
        userSettings: { bookChoice: "", chapterChoice: "", verseChoice: "" },
        config: { minTimeForLoadingMessage: 10 },
    };

    export var getProvidersWithSample = function (sample: ISample) {
        return {
            userSettings: {
                bookChoice: sample.bookNumber.toString(),
                chapterChoice: sample.chapter.toString(),
                verseChoice: sample.verse.toString(),
            },
            config: { minTimeForLoadingMessage: 10 },
        };
    }

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

        equal(viewModel.displayPassage.passageVisible().entries[0].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
        equal(viewModel.displayPassage.passageVisible().entries[0].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
        equal(viewModel.displayPassage.passageVisible().entries[0].passageRef.verse, sample.verse, "The correct Verse is displayed");
        equal(viewModel.displayPassage.passageVisible().entries[0].rawText, sample.firstEntryText, "The first entry text is displayed");
    };

    export var step_AndTheLastEntryShouldBeDisplayed = function (viewModel: UI.MainViewModel, sample: ISample, step: (title: string) => void) {
        step("And the last entry should be displayed");

        var iLast = viewModel.displayPassage.passageVisible().entries.length - 1;
        equal(viewModel.displayPassage.passageVisible().entries[iLast].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
        equal(viewModel.displayPassage.passageVisible().entries[iLast].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
        equal(viewModel.displayPassage.passageVisible().entries[iLast].passageRef.verse, sample.verse, "The correct Verse is displayed");
        equal(viewModel.displayPassage.passageVisible().entries[iLast].rawText, sample.lastEntryText, "The last entry text is displayed");
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

            var viewModel = new UI.MainViewModel(this.providers_Empty);

            step_WhenTheAppIsLoaded(viewModel, step, function () {
                step("Then a passage should be displayed");

                ok(viewModel.displayPassage.passageVisible(), "The passage is displayed");
                ok(viewModel.displayPassage.passageVisible().entries, "The entries are displayed");
                ok(viewModel.displayPassage.passageVisible().entries[0].rawText, "An entry is displayed");

                done();
            }, done);

        });

    f.scenario("Should display a default passage", [
        "Given this is the first run",
        "When the app is loaded",
        "Then a default passage should be displayed",
    ], function (step, done) {

            step("Given this is the first run");

            var viewModel = new UI.MainViewModel(this.providers_Empty);

            step_WhenTheAppIsLoaded(viewModel, step, function () {
                step("Then a default passage should be displayed");

                ok(viewModel.displayPassage.passageVisible(), "The passage is displayed");
                ok(viewModel.displayPassage.passageVisible().entries, "The entries are displayed");
                ok(viewModel.displayPassage.passageVisible().entries[0].rawText, "An entry is displayed");

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
            var providers = getProvidersWithSample(sample);
            var viewModel = new UI.MainViewModel(providers);

            step_WhenTheAppIsLoaded(viewModel, step, function () {
                step_ThenTheFirstEntryShouldBeDisplayed(viewModel, sample, step);
                step_AndTheLastEntryShouldBeDisplayed(viewModel, sample, step);
                done();
            }, done);

        });

}