/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                var viewModel;

                var providers = {
                    userSettings: { bookChoice: "", chapterChoice: "" }
                };

                Told.GreekBible.Tests.Steps.stepLibrary.given("this is the first run", function () {
                    //Do nothing
                }).given("this is not the first run", function () {
                    // Acts 10
                    // First entry:
                    // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
                    // Last entry:
                    // 051048 RI ----APF- τινάς. τινάς τινάς τις
                    providers.userSettings.bookChoice = "5";
                    providers.userSettings.chapterChoice = "10";
                }).when("the app is loaded", function (args) {
                    viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    var onReady = function () {
                        args.nextStep();
                    };

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        args.nextStep();
                    };

                    viewModel.displayPassage.showDefault(onReady, onError);

                    args.shouldWaitForNextStepCall();
                }).then("a (?:default )?passage should be displayed", function () {
                    ok(viewModel.displayPassage.passage(), "The passage is displayed");
                    ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
                    ok(viewModel.displayPassage.passage().entries[0].rawText, "An entry is displayed");
                }).then("the first entry should be displayed", function () {
                    ok(viewModel.displayPassage.passage(), "The passage is displayed");
                    ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
                    equal(viewModel.displayPassage.passage().entries[0].rawText, "Ἀνὴρ", "The first entry is displayed");
                }).then("the last entry should be displayed", function () {
                    ok(viewModel.displayPassage.passage(), "The passage is displayed");
                    ok(viewModel.displayPassage.passage().entries, "The entries are displayed");

                    var iLast = viewModel.displayPassage.passage().entries.length - 1;
                    equal(viewModel.displayPassage.passage().entries[iLast].rawText, "τινάς.", "The last entry is displayed");
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
