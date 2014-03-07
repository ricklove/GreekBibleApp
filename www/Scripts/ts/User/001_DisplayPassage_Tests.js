/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="001_DisplayPassage.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            (function (Tests) {
                Tests.samples = [
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

                Tests.providers_Empty = {
                    userSettings: { bookChoice: "", chapterChoice: "", verseChoice: "" },
                    config: { minTimeForLoadingMessage: 10 }
                };

                Tests.getProvidersWithSample = function (sample) {
                    return {
                        userSettings: {
                            bookChoice: sample.bookNumber.toString(),
                            chapterChoice: sample.chapter.toString(),
                            verseChoice: sample.verse.toString()
                        },
                        config: { minTimeForLoadingMessage: 10 }
                    };
                };

                Tests.step_WhenTheAppIsLoaded = function (viewModel, step, onLoaded, onFail) {
                    step("When the app is loaded");

                    var onReady = function () {
                        onLoaded();
                    };

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        onFail();
                    };

                    viewModel.displayPassage.showDefault(onReady, onError);
                };

                Tests.step_GivenAPassageIsDisplayed = function (step, onReady, onFail) {
                    step("Given a passage is displayed");

                    var sample = Tests.samples[0];
                    var providers = Tests.getProvidersWithSample(sample);
                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    Tests.step_WhenTheAppIsLoaded(viewModel, function () {
                    }, function () {
                        onReady(viewModel);
                    }, onFail);
                };

                Tests.step_ThenTheFirstEntryShouldBeDisplayed = function (viewModel, sample, step) {
                    step("Then the first entry should be displayed");

                    var verses = viewModel.displayPassage.passageVisible().verses;
                    var versesFiltered = verses.filter(function (v) {
                        return v.passageRef.verse === sample.verse;
                    });

                    ok(versesFiltered.length === 1, "The correct verse is visible");

                    var entries = versesFiltered[0].entries;

                    equal(entries[0].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
                    equal(entries[0].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
                    equal(entries[0].passageRef.verse, sample.verse, "The correct Verse is displayed");
                    equal(entries[0].rawText, sample.firstEntryText, "The first entry text is displayed");
                };

                Tests.step_AndTheLastEntryShouldBeDisplayed = function (viewModel, sample, step) {
                    step("And the last entry should be displayed");

                    var verses = viewModel.displayPassage.passageVisible().verses;
                    var versesFiltered = verses.filter(function (v) {
                        return v.passageRef.verse === sample.verse;
                    });

                    ok(versesFiltered.length === 1, "The correct verse is visible");

                    var entries = versesFiltered[0].entries;

                    var iLast = entries.length - 1;
                    equal(entries[iLast].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
                    equal(entries[iLast].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
                    equal(entries[iLast].passageRef.verse, sample.verse, "The correct Verse is displayed");
                    equal(entries[iLast].rawText, sample.lastEntryText, "The last entry text is displayed");
                };

                var f = new Told.FeatureTests.Feature("001 - View a Greek Passage", [
                    "As a user,",
                    "I can view a passage of greek",
                    "So that I can examine the greek words and their details"
                ]);

                f.scenario("Should display a passage", [
                    "When the app is loaded",
                    "Then a passage should be displayed"
                ], function (step, done) {
                    var viewModel = new Told.GreekBible.UI.MainViewModel(this.providers_Empty);

                    Tests.step_WhenTheAppIsLoaded(viewModel, step, function () {
                        step("Then a passage should be displayed");

                        ok(viewModel.displayPassage.passageVisible(), "The passage is displayed");
                        ok(viewModel.displayPassage.passageVisible().verses, "The verses are displayed");
                        ok(viewModel.displayPassage.passageVisible().verses[0].entries, "The entries are displayed");
                        ok(viewModel.displayPassage.passageVisible().verses[0].entries[0].rawText, "An entry is displayed");

                        done();
                    }, done);
                });

                f.scenario("Should display a default passage", [
                    "Given this is the first run",
                    "When the app is loaded",
                    "Then a default passage should be displayed"
                ], function (step, done) {
                    step("Given this is the first run");

                    var viewModel = new Told.GreekBible.UI.MainViewModel(this.providers_Empty);

                    Tests.step_WhenTheAppIsLoaded(viewModel, step, function () {
                        step("Then a default passage should be displayed");

                        ok(viewModel.displayPassage.passageVisible(), "The passage is displayed");
                        ok(viewModel.displayPassage.passageVisible().verses, "The verses are displayed");
                        ok(viewModel.displayPassage.passageVisible().verses[0].entries, "The entries are displayed");
                        ok(viewModel.displayPassage.passageVisible().verses[0].entries[0].rawText, "An entry is displayed");

                        done();
                    }, done);
                });

                f.scenario("Should display the passage entries", [
                    "Given this is not the first run",
                    "When the app is loaded",
                    "Then the first entry should be displayed",
                    "And the last entry should be displayed"
                ], function (step, done) {
                    step("Given this is not the first run");

                    var sample = Tests.samples[0];
                    var providers = Tests.getProvidersWithSample(sample);
                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    Tests.step_WhenTheAppIsLoaded(viewModel, step, function () {
                        Tests.step_ThenTheFirstEntryShouldBeDisplayed(viewModel, sample, step);
                        Tests.step_AndTheLastEntryShouldBeDisplayed(viewModel, sample, step);
                        done();
                    }, done);
                });
            })(UI.Tests || (UI.Tests = {}));
            var Tests = UI.Tests;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
