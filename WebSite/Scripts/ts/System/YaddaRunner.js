/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/yadda/yadda.d.ts" />
/// <reference path="AppLoader.ts" />
/// <reference path="YaddaQUnitLibrary.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            var Yadda = require('yadda');
            var FeatureParser = Yadda.parsers.FeatureParser;

            function runTests(onFinished) {
                var processFeatureText = function (text) {
                    var yadda = new Yadda.Yadda(Told.GreekBible.Tests.Steps.stepLibrary.yaddaLibrary);
                    var feature = new FeatureParser().parse(text);
                    var fScenarios = feature.scenarios;

                    QUnit.module(feature.title);

                    for (var i = 0; i < fScenarios.length; i++) {
                        var scenario = fScenarios[i];

                        var done = function () {
                            //console.log("I'm done!");
                            start();
                        };

                        (function () {
                            var _scenario = scenario;

                            asyncTest(_scenario.title, function () {
                                var text = "STEPS:\r\n";

                                for (var j = 0; j < _scenario.steps.length; j++) {
                                    text += _scenario.steps[j] + "\r\n";
                                }

                                ok(true, text);

                                return yadda.yadda(_scenario.steps, done);
                            });
                        }());
                    }
                    //for (var i = 0; i < fScenarios.length; i++) {
                    //    var scenario = fScenarios[i];
                    //    test(scenario.title, buildTest(scenario));
                    //    function buildTest(scenario) {
                    //        return function () {
                    //            var ranSteps = yadda.yadda(scenario.steps);
                    //            return ranSteps;
                    //        }
                    //    }
                    //}
                };

                Told.GreekBible.Tests.Steps.initStepLibrary();

                Told.AppLoader.loadScripts(stepsList().map(function (s) {
                    return "Features/StepLibrary/" + s + ".js";
                }), function () {
                    featureList().map(function (f) {
                        return loadText("Features/" + f + ".feature", processFeatureText);
                    });
                    onFinished();
                });
            }
            Tests.runTests = runTests;

            function loadText(url, onLoaded, onError) {
                $.ajax(url, {
                    dataType: "text",
                    cache: true,
                    success: function (data) {
                        onLoaded(data);
                    },
                    error: function (data) {
                        if (onError) {
                            onError(data);
                        }
                    }
                });
            }

            function featureList() {
                return [
                    "ViewPassage"
                ];
            }

            function stepsList() {
                return [
                    "App_Steps"
                ];
            }
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
