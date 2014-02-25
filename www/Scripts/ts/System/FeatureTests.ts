/// <reference path="../../typings/qunit/qunit.d.ts" />

module Told.FeatureTests {

    function testLog(message: string) {
        ok(true, message);
    }

    export class Feature {
        constructor(title: string, summaryStatements: string[]) {
            QUnit.module(title);
            test("Summary", () => {

                for (var i = 0; i < summaryStatements.length; i++) {
                    testLog(summaryStatements[i]);
                }
            });
        }

        public scenario(title: string, expectedSteps: number, execute: (step: (title: string) => void, done: () => void) => void) {

            var stepCount = 0;
            var stepSummary = "Scenario: " + title + "\r\n";

            var step = function (title: string) {
                testLog("\tSTEP: " + title);
                stepSummary += "\t" + title + "\r\n";

                stepCount++;
            }

            var done = function () {

                if (stepCount != expectedSteps) {
                    equal(expectedSteps, stepCount, "Step Count should be correct");
                }

                testLog(stepSummary);

                start();
            };

            asyncTest(title, () => execute(step, done));
        }
    }
}