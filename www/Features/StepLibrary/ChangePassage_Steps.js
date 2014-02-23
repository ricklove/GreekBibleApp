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
                    // Acts 10
                    // First entry:
                    // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
                    // Last entry:
                    // 051048 RI ----APF- τινάς. τινάς τινάς τις
                    var c = args.context;

                    c.providers = { userSettings: { bookChoice: "", chapterChoice: "" } };
                    c.viewModel = new Told.GreekBible.UI.MainViewModel(c.providers);

                    c.sample = Told.GreekBible.Tests.Steps.samples[0];
                    c.viewModel.changePassage.book(c.sample.bookName);
                    c.viewModel.changePassage.chapter(c.sample.chapter);
                }).given("user chooses two passages quickly", function (args) {
                    // Acts 10
                    // First entry:
                    // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
                    // Last entry:
                    // 051048 RI ----APF- τινάς. τινάς τινάς τις
                    var c = args.context;

                    c.providers = { userSettings: { bookChoice: "", chapterChoice: "" } };
                    c.viewModel = new Told.GreekBible.UI.MainViewModel(c.providers);
                    c.sample = Told.GreekBible.Tests.Steps.samples[0];

                    // Any other passage
                    c.viewModel.changePassage.book("Romans");
                    c.viewModel.changePassage.chapter(5);

                    setTimeout(function () {
                        c.viewModel.changePassage.book(c.sample.bookName);
                        c.viewModel.changePassage.chapter(c.sample.chapter);

                        args.nextStep();
                    }, 100);

                    args.shouldWaitForNextStepCall();
                }).when("the passage is loaded", function (args) {
                    var c = args.context;

                    var attempt = 0;

                    var checkIsReady = function () {
                        if (c.viewModel.displayPassage.isPassageLoaded()) {
                            args.nextStep();
                        } else if (attempt < 10) {
                            setTimeout(checkIsReady, 500);
                        } else {
                            ok(false, "ERROR: Passage did not load");
                            args.nextStep();
                        }

                        attempt++;
                    };

                    setTimeout(checkIsReady, 500);

                    args.shouldWaitForNextStepCall();
                }).then("the last chosen passage should be displayed", function (args) {
                    Told.GreekBible.Tests.Steps.stepLibrary.callStep("the first entry should be displayed", args);
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
