/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="002_ChangePassage.ts" />
/// <reference path="001_DisplayPassage_Tests.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            (function (Tests) {
                var f = new Told.FeatureTests.Feature("002 - Choose a Greek Passage", [
                    "As a user,",
                    "I can choose which passage to display",
                    "So that I can read a certain greek passage"
                ]);

                var whenPassageIsLoaded_ThenCheckEntries = function (viewModel, sample, step, done) {
                    step("When the passage is loaded");

                    var attempt = 0;

                    var checkIsReady = function () {
                        if (viewModel.displayPassage.isPassageLoaded()) {
                            Told.GreekBible.UI.Tests.thenCheckEntries(viewModel, sample, step);

                            done();
                        } else if (attempt < 10) {
                            setTimeout(checkIsReady, 500);
                        } else {
                            ok(false, "ERROR: Passage did not load");
                            done();
                        }

                        attempt++;
                    };

                    setTimeout(checkIsReady, 500);
                };

                f.scenario("Should display a chosen passage", [
                    "Given a user chooses a passage",
                    "When the passage is loaded",
                    "Then the first entry should be displayed",
                    "And the last entry should be displayed"
                ], function (step, done) {
                    var providers = {
                        userSettings: { bookChoice: "", chapterChoice: "" }
                    };

                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        done();
                    };

                    viewModel.displayPassage.showDefault(function () {
                        step("Given a user chooses a passage");

                        var sample = Told.GreekBible.UI.Tests.samples[1];
                        viewModel.changePassage.book(sample.bookName);
                        viewModel.changePassage.chapter(sample.chapter);

                        whenPassageIsLoaded_ThenCheckEntries(viewModel, sample, step, done);
                    }, onError);
                });

                f.scenario("Should display last chosen passage", [
                    "Given a user chooses two passages quickly",
                    "When the passage is loaded",
                    "Then the first entry should be displayed",
                    "And the last entry should be displayed"
                ], function (step, done) {
                    var providers = {
                        userSettings: { bookChoice: "", chapterChoice: "" }
                    };

                    var viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        done();
                    };

                    viewModel.displayPassage.showDefault(function () {
                        step("Given a user chooses two passages quickly");

                        // Choose many passages to try to trigger a race condition
                        viewModel.changePassage.book("Mark");
                        viewModel.changePassage.chapter(2);
                        viewModel.changePassage.book("Luke");
                        viewModel.changePassage.chapter(3);
                        viewModel.changePassage.book("John");
                        viewModel.changePassage.chapter(4);
                        viewModel.changePassage.book("Acts");
                        viewModel.changePassage.chapter(5);

                        var sample = Told.GreekBible.UI.Tests.samples[1];
                        viewModel.changePassage.book(sample.bookName);
                        viewModel.changePassage.chapter(sample.chapter);

                        whenPassageIsLoaded_ThenCheckEntries(viewModel, sample, step, done);
                    }, onError);
                });
            })(UI.Tests || (UI.Tests = {}));
            var Tests = UI.Tests;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
