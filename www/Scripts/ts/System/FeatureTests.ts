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

        public scenario(title: string, expectedSteps: string[], execute: (step: (title: string) => void, done: () => void) => void) {

            var steps: string[] = [];
            var stepSummary = "Scenario: " + title + "\r\n";

            for (var i = 0; i < expectedSteps.length; i++) {
                stepSummary += "\t" + expectedSteps[i] + "\r\n";
            }


            var step = function (title: string) {
                testLog("\tSTEP: " + title);
                steps.push(title);
            }

            var done = function () {
                deepEqual(steps, expectedSteps, "Actual steps match the expected steps");
                start();
            };

            asyncTest(title, () => {
                testLog(stepSummary);
                execute(step, done);
            });
        }
    }
}