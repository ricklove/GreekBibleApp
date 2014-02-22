﻿/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />

module Told.GreekBible.Tests.Steps {

    var viewModel: UI.MainViewModel;

    var providers: Data.IProviders = {
        userSettings: { bookChoice: "", chapterChoice: "" },
    };

    stepLibrary
    // This would require manually setting the UI value
        .given("user chooses a passage", function () {
            // Acts 10
            // First entry: 
            // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
            // Last entry: 
            // 051048 RI ----APF- τινάς. τινάς τινάς τις
            viewModel = new UI.MainViewModel(providers);

            viewModel.changePassage.book("Acts");
            viewModel.changePassage.chapter(10);
        })
        .when("the passage is loaded", function (args) {

            var attempt = 0;


            var checkIsReady = function () {
                if (viewModel.displayPassage.isPassageLoaded) {
                    args.nextStep();
                } else if (attempt < 10) {
                    setTimeout(checkIsReady, 500);
                }
                else {
                    ok(false, "ERROR: Passage did not load");
                    args.nextStep();
                }

                attempt++;
            };

            setTimeout(checkIsReady, 500);

            args.shouldWaitForNextStepCall();
        })
        //.then("a (?:default )?passage should be displayed", function () {
        //    ok(viewModel.displayPassage.passage(), "The passage is displayed");
        //    ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
        //    ok(viewModel.displayPassage.passage().entries[0].rawText, "A first entry is displayed");
        //})
        //.then("the first passage should be displayed", function () {
        //    ok(viewModel.displayPassage.passage(), "The passage is displayed");
        //    ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
        //    equal(viewModel.displayPassage.passage().entries[0].rawText, "Ἀνὴρ", "The first entry is displayed");
        //})
        //.then("the last passage should be displayed", function () {
        //    ok(viewModel.displayPassage.passage(), "The passage is displayed");
        //    ok(viewModel.displayPassage.passage().entries, "The entries are displayed");

        //    var iLast = viewModel.displayPassage.passage().entries.length - 1;
        //    equal(viewModel.displayPassage.passage().entries[iLast].rawText, "τινάς.", "The last entry is displayed");
        //})

    ;

}
