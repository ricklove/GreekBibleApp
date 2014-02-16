/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/yadda/yadda.d.ts" />
/// <reference path="AppLoader.ts" />
/// <reference path="YaddaQUnitLibrary.ts" />

module Told.GreekBible.Tests {

    var Yadda = require('yadda');
    var FeatureParser = Yadda.parsers.FeatureParser;

    export function runTests(onFinished: () => void) {

        var processFeatureText = function (text: string) {

            var yadda = new Yadda.Yadda(Steps.stepLibrary.yaddaLibrary);
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
                } ());
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
        }

        Steps.initStepLibrary();

        Told.AppLoader.loadScripts(stepsList().map(s=> "Features/StepLibrary/" + s + ".js"), function () {
            featureList().map(f=> loadText("Features/" + f + ".feature", processFeatureText));
            onFinished();
        });
    }

    function loadText(url: string, onLoaded: (string) => void, onError?: (string) => void) {
        $.ajax(url,
            {
                dataType: "text",
                cache: true,
                success: function (data: any) { onLoaded(data); },
                error: function (data: any) { if (onError) { onError(data); } }
            });
    }

    function featureList(): string[] {
        return [
            "ViewPassage",
        ];
    }

    function stepsList(): string[] {
        return [
            "App_Steps",
        ];
    }
}