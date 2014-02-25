/// <reference path="../../typings/qunit/qunit.d.ts" />
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
                var steps = [];
                var stepSummary = "Scenario: " + title + "\r\n";

                var step = function (title) {
                    testLog("\tSTEP: " + title);
                    stepSummary += "\t" + title + "\r\n";
                    steps.push(title);
                };

                var done = function () {
                    deepEqual(expectedSteps, steps, "Actual steps match the expected steps");

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
