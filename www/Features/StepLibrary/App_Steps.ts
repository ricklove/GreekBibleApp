/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />

module Told.GreekBible.Tests.Steps {

    var isFirstRun: boolean = true;
    var viewModel: UI.MainViewModel;

    var providers: Data.IProviders = {
        userSettings: { bookChoice: "", chapterChoice: "" },
    };

    stepLibrary
    // This would require manually setting the UI value
        .given("this is the first run", function () {
            //Do nothing
        })
        .given("this is not the first run", function () {
            // Acts 10
            // First entry: 
            // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
            // Last entry: 
            // 051048 RI ----APF- τινάς. τινάς τινάς τις

            providers.userSettings.bookChoice = "5";
            providers.userSettings.chapterChoice = "10";
        })
        .when("the app is loaded", function (next) {

            viewModel = new UI.MainViewModel(providers);

            var onReady = function () {
                next();
            }

            var onError = function (message: string) {
                ok(false, "ERROR:" + message);
                next();
            }

            viewModel.displayPassage.showDefault(onReady, onError);

            return true;
        })
        .then("a (?:default )?passage should be displayed", function () {
            ok(viewModel.displayPassage.passage(), "The passage is displayed");
            ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
            ok(viewModel.displayPassage.passage().entries[0].rawText, "A first entry is displayed");
        })
        .then("the first passage should be displayed", function () {
            ok(viewModel.displayPassage.passage(), "The passage is displayed");
            ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
            equal(viewModel.displayPassage.passage().entries[0].rawText, "Ἀνὴρ", "The first entry is displayed");
        })
        .then("the last passage should be displayed", function () {
            ok(viewModel.displayPassage.passage(), "The passage is displayed");
            ok(viewModel.displayPassage.passage().entries, "The entries are displayed");

            var iLast = viewModel.displayPassage.passage().entries.length - 1;
            equal(viewModel.displayPassage.passage().entries[iLast].rawText, "τινάς.", "The last entry is displayed");
        })

    ;

}
