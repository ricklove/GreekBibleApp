/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/typings/yadda/yadda.d.ts" />
/// <reference path="../../Scripts/ts/System/YaddaQUnitLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                var isFirstRun = true;
                var viewModel;

                Told.GreekBible.Tests.Steps.stepLibrary.given("this is not the first run", function () {
                    throw "pending";
                    isFirstRun = false;
                }).given("this is the first run", function () {
                    throw "pending";
                    isFirstRun = true;
                }).when("the app is loaded", function (next) {
                    viewModel = new Told.GreekBible.UI.MainViewModel();

                    var onLoad = function () {
                        next();
                    };

                    var onError = function (message) {
                        ok(false, "ERROR:" + message);
                        next();
                    };

                    if (isFirstRun) {
                        viewModel.loadDefault(onLoad, onError);
                    } else {
                        throw "Not Implemented: The viewModel cannot load last";
                        //viewModel.loadLast();
                    }

                    return true;
                }).then("a (?:default )?passage should be displayed", function () {
                    ok(viewModel.passage(), "The passage is displayed");
                    ok(viewModel.passage().entries, "The entries are displayed");
                    ok(viewModel.passage().entries[0].rawText, "The first entry is displayed");
                });
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
