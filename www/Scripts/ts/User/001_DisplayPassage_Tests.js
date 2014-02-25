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

                var f = new Told.FeatureTests.Feature("001 - View a Greek Passage", [
                    "As a user,",
                    "I can view a passage of greek",
                    "So that I can examine the greek words and their details"
                ]);

                f.scenario("Should display a passage", [
                    "When the app is loaded",
                    "Then a passage should be displayed"
                ], function (step, done) {
                    step("When the app is loaded");

                    var providers = {
                        userSettings: { bookChoice: "", chapterChoice: "" }
                    };

                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    var onReady = function () {
                        step("Then a passage should be displayed");

                        ok(viewModel.displayPassage.passage(), "The passage is displayed");
                        ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
                        ok(viewModel.displayPassage.passage().entries[0].rawText, "An entry is displayed");

                        done();
                    };

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        done();
                    };

                    viewModel.displayPassage.showDefault(onReady, onError);
                });

                f.scenario("Should display a default passage", [
                    "Given this is the first run",
                    "When the app is loaded",
                    "Then a default passage should be displayed"
                ], function (step, done) {
                    step("Given this is the first run");

                    var providers = {
                        userSettings: { bookChoice: "", chapterChoice: "" }
                    };

                    step("When the app is loaded");

                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    var onReady = function () {
                        step("Then a default passage should be displayed");

                        ok(viewModel.displayPassage.passage(), "The passage is displayed");
                        ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
                        ok(viewModel.displayPassage.passage().entries[0].rawText, "An entry is displayed");

                        done();
                    };

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        done();
                    };

                    viewModel.displayPassage.showDefault(onReady, onError);
                });

                Tests.thenCheckEntries = function (viewModel, sample, step) {
                    step("Then the first entry should be displayed");

                    equal(viewModel.displayPassage.passage().entries[0].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
                    equal(viewModel.displayPassage.passage().entries[0].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
                    equal(viewModel.displayPassage.passage().entries[0].rawText, sample.firstEntryText, "The first entry text is displayed");

                    step("And the last entry should be displayed");

                    var iLast = viewModel.displayPassage.passage().entries.length - 1;
                    equal(viewModel.displayPassage.passage().entries[iLast].passageRef.bookNumber, sample.bookNumber, "The correct Book is displayed");
                    equal(viewModel.displayPassage.passage().entries[iLast].passageRef.chapter, sample.chapter, "The correct Chapter is displayed");
                    equal(viewModel.displayPassage.passage().entries[iLast].rawText, sample.lastEntryText, "The last entry text is displayed");
                };

                f.scenario("Should display the passage entries", [
                    "Given this is not the first run",
                    "When the app is loaded",
                    "Then the first entry should be displayed",
                    "And the last entry should be displayed"
                ], function (step, done) {
                    step("Given this is not the first run");

                    var sample = Tests.samples[0];

                    var providers = {
                        userSettings: {
                            bookChoice: sample.bookNumber.toString(),
                            chapterChoice: sample.chapter.toString()
                        }
                    };

                    step("When the app is loaded");

                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    var onReady = function () {
                        Tests.thenCheckEntries(viewModel, sample, step);

                        done();
                    };

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        done();
                    };

                    viewModel.displayPassage.showDefault(onReady, onError);
                });
            })(UI.Tests || (UI.Tests = {}));
            var Tests = UI.Tests;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
