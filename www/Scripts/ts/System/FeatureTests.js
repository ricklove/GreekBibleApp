﻿/// <reference path="../../typings/qunit/qunit.d.ts" />
var Told;
(function (Told) {
    (function (FeatureTests) {
        function testLog(message) {
            ok(true, message);
        }

        var Feature = (function () {
            function Feature(title, summaryStatements) {
                QUnit.module(title);
                test("Summary", function () {
                    for (var i = 0; i < summaryStatements.length; i++) {
                        testLog(summaryStatements[i]);
                    }
                });
            }
            Feature.prototype.scenario = function (title, expectedSteps, execute) {
                var stepCount = 0;
                var stepSummary = "Scenario: " + title + "\r\n";

                var step = function (title) {
                    testLog("\tSTEP: " + title);
                    stepSummary += "\t" + title + "\r\n";

                    stepCount++;
                };

                var done = function () {
                    if (stepCount != expectedSteps) {
                        equal(expectedSteps, stepCount, "Step Count should be correct");
                    }

                    testLog(stepSummary);

                    start();
                };

                asyncTest(title, function () {
                    return execute(step, done);
                });
            };
            return Feature;
        })();
        FeatureTests.Feature = Feature;
    })(Told.FeatureTests || (Told.FeatureTests = {}));
    var FeatureTests = Told.FeatureTests;
})(Told || (Told = {}));