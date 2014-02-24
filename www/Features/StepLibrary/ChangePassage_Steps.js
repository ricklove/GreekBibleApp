/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />
/// <reference path="DisplayPassage_Steps.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                Told.GreekBible.Tests.Steps.stepLibrary.given("user chooses a passage", function (args) {
                    Told.GreekBible.Tests.Steps.stepLibrary.callStep("a passage is displayed", args, function () {
                        var c = args.context;

                        c.sample = Told.GreekBible.Tests.Steps.samples[1];
                        c.viewModel.changePassage.book(c.sample.bookName);
                        c.viewModel.changePassage.chapter(c.sample.chapter);
                    });
                }).given("user chooses two passages quickly", function (args) {
                    Told.GreekBible.Tests.Steps.stepLibrary.callStep("a passage is displayed", args, function () {
                        var c = args.context;

                        // Many other passages to try to cause a race condition
                        c.viewModel.changePassage.book("Mark");
                        c.viewModel.changePassage.chapter(2);
                        c.viewModel.changePassage.book("Luke");
                        c.viewModel.changePassage.chapter(3);
                        c.viewModel.changePassage.book("John");
                        c.viewModel.changePassage.chapter(4);
                        c.viewModel.changePassage.book("Acts");
                        c.viewModel.changePassage.chapter(5);

                        setTimeout(function () {
                            c.sample = Told.GreekBible.Tests.Steps.samples[1];

                            c.viewModel.changePassage.book(c.sample.bookName);
                            c.viewModel.changePassage.chapter(c.sample.chapter);

                            args.nextStep();
                        }, 100);

                        args.shouldWaitForNextStepCall();
                    });
                }).then("the last chosen passage should be displayed", function (args) {
                    Told.GreekBible.Tests.Steps.stepLibrary.callStep("the first entry should be displayed", args, null);
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
