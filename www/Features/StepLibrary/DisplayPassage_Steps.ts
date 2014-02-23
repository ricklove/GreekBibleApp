/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />

module Told.GreekBible.Tests.Steps {

    export interface IDisplayPassageStepsContext {
        sample: ISample;
        providers: Data.IProviders;
        viewModel: UI.MainViewModel;
    }

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
        }
    ];

    stepLibrary
        .given("this is the first run", function (args) {

            var c = <IDisplayPassageStepsContext> args.context;

            c.providers = {
                userSettings: { bookChoice: "", chapterChoice: "" },
            };
        })
        .given("this is not the first run", function (args) {


            var c = <IDisplayPassageStepsContext> args.context;

            c.sample = samples[0];

            c.providers = {
                userSettings: {
                    bookChoice: c.sample.bookNumber.toString(),
                    chapterChoice: c.sample.chapter.toString(),
                },
            };
        })
        .when("the app is loaded", function (args) {

            var c = <IDisplayPassageStepsContext> args.context;

            c.viewModel = new UI.MainViewModel(c.providers);

            var onReady = function () {
                args.nextStep();
            }

            var onError = function (message: string) {
                ok(false, "ERROR:" + message);
                args.nextStep();
            }

            c.viewModel.displayPassage.showDefault(onReady, onError);

            args.shouldWaitForNextStepCall();
        })
        .then("a (?:default )?passage should be displayed", function (args) {
            var c = <IDisplayPassageStepsContext> args.context;
            var viewModel = c.viewModel;

            ok(viewModel.displayPassage.passage(), "The passage is displayed");
            ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
            ok(viewModel.displayPassage.passage().entries[0].rawText, "An entry is displayed");
        })
        .then("the first entry should be displayed", function (args) {
            var c = <IDisplayPassageStepsContext> args.context;
            var viewModel = c.viewModel;

            ok(viewModel.displayPassage.passage(), "The passage is displayed");
            ok(viewModel.displayPassage.passage().entries, "The entries are displayed");
            equal(viewModel.displayPassage.passage().entries[0].passageRef.bookNumber, c.sample.bookNumber, "The correct Book is displayed");
            equal(viewModel.displayPassage.passage().entries[0].passageRef.chapter, c.sample.chapter, "The correct Chapter is displayed");
            equal(viewModel.displayPassage.passage().entries[0].rawText, c.sample.firstEntryText, "The first entry is displayed");
        })
        .then("the last entry should be displayed", function (args) {
            var c = <IDisplayPassageStepsContext> args.context;
            var viewModel = c.viewModel;

            ok(viewModel.displayPassage.passage(), "The passage is displayed");
            ok(viewModel.displayPassage.passage().entries, "The entries are displayed");

            var iLast = viewModel.displayPassage.passage().entries.length - 1;

            equal(viewModel.displayPassage.passage().entries[iLast].passageRef.bookNumber, c.sample.bookNumber, "The correct Book is displayed");
            equal(viewModel.displayPassage.passage().entries[iLast].passageRef.chapter, c.sample.chapter, "The correct Chapter is displayed");
            equal(viewModel.displayPassage.passage().entries[iLast].rawText, c.sample.lastEntryText, "The last entry is displayed");
        })

    ;

}
