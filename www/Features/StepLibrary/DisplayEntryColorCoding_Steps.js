/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />
/// <reference path="DisplayPassage_Steps.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                //declare interface IDisplayPassageStepsContext {
                //    shouldCompareEntries: (entryA: Data.IEntry, entryB: Data.IEntry) => boolean;
                //}
                Told.GreekBible.Tests.Steps.stepLibrary.given("a passage is loaded", function (args) {
                    Told.GreekBible.Tests.Steps.stepLibrary.callStep("a sample", args);
                    Told.GreekBible.Tests.Steps.stepLibrary.callStep("the app is loaded", args);
                }).when("two entries have the same Morph code", function (args) {
                    var c = args.context;

                    c.shouldCompareEntries = function (entryA, entryB) {
                        return entryA.morph.morphCode == entryB.morph.morphCode;
                    };
                }).then("the color for the Morph should be the same", function (args) {
                    var c = args.context;
                    var entries = c.viewModel.displayPassage.passage().entries;

                    for (var i = 0; i < entries.length; i++) {
                        for (var j = 0; j < entries.length; j++) {
                            if (c.shouldCompareEntries(entries[i], entries[j])) {
                                equal(entries[i].morph.color, entries[j].morph.color, "The morph colors match");
                                return;
                            }
                        }
                    }
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
