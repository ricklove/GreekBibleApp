/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />
/// <reference path="DisplayPassage_Steps.ts" />

module Told.GreekBible.Tests.Steps {

    //declare interface IDisplayPassageStepsContext {
    //    shouldCompareEntries: (entryA: Data.IEntry, entryB: Data.IEntry) => boolean;
    //}

    stepLibrary
        .given("a passage is loaded", function (args) {

            stepLibrary.callStep("a sample", args, () => {
                stepLibrary.callStep("the app is loaded", args, null);
            });

        })
        .when("two entries have the same Morph code", function (args) {
            var c = <IDisplayPassageStepsContext> args.context;

            c.shouldCompareEntries = function (entryA: Data.IEntry, entryB: Data.IEntry): boolean {
                return entryA.morph.morphCode == entryB.morph.morphCode;
            };
        })
        .then("the color for the Morph should be the same", function (args) {
            var c = <IDisplayPassageStepsContext> args.context;
            var entries = c.viewModel.displayPassage.passage().entries;

            for (var i = 0; i < entries.length; i++) {
                for (var j = i + 1; j < entries.length; j++) {
                    if (c.shouldCompareEntries(entries[i], entries[j])) {
                        equal(entries[i].morph.color, entries[j].morph.color, "The morph colors match for " + entries[i].morph.morphCode);

                        // Continue
                        j = 1000 * 1000;
                    }
                }
            }
        })
    ;
}
