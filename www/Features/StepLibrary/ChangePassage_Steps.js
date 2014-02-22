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

                Told.GreekBible.Tests.Steps.stepLibrary.given("user chooses a passage", function () {
                    // Acts 10
                    // First entry:
                    // 051001 N- ----NSM- Ἀνὴρ Ἀνὴρ ἀνήρ ἀνήρ
                    // Last entry:
                    // 051048 RI ----APF- τινάς. τινάς τινάς τις
                    viewModel = new Told.GreekBible.UI.MainViewModel(providers);

                    viewModel.changePassage.book("Acts");
                    viewModel.changePassage.chapter(10);
                }).when("the passage is loaded", function (args) {
                    var attempt = 0;

                    var checkIsReady = function () {
                        if (viewModel.displayPassage.isPassageLoaded) {
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
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
