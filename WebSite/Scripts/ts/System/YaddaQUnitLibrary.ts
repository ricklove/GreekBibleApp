/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/yadda/yadda.d.ts" />

module Told.GreekBible.Tests.Steps {

    export var stepLibrary: IQUnitStepLibrary;

    export interface IQUnitStepLibrary {
        yaddaLibrary: IYaddaLibrary;
        given: (title: string, doStep: (args: any) => void) => IQUnitStepLibrary;
        when: (title: string, doStep: (args: any) => void) => IQUnitStepLibrary;
        then: (title: string, doStep: (args: any) => void) => IQUnitStepLibrary;
    }

    export var initStepLibrary = function () {

        var Dictionary = require('yadda').Dictionary;
        var English = require('yadda').localisation.English;

        var dictionary = new Dictionary()
            .define('NUM', /(\d+)/);

        var yaddaLibrary: IYaddaLibrary = <any> English.library(dictionary);


        var stepWrapper = function (stepType: string): (title: string, doStep: (args: any) => void) => IQUnitStepLibrary {

            var _stepType = stepType;

            return function (title: string, doStep: (args: any) => void): IQUnitStepLibrary {

                var doStepWrapper = function () {

                    var stepTitle = _stepType + " '" + title + "'";
                    var hasFailed = false;
                    var failMessage = "";
                    var shouldWait = false;

                    var doReport = function () {
                        var message: string;

                        if (hasFailed) {
                            message = "FAILED: " + stepTitle + "\r\n" + failMessage;
                        } else {
                            message = "END: " + stepTitle;
                        }

                        ok(!hasFailed, message);
                    };

                    var nextTimeLimit = 5000;
                    var timeoutID;
                    var next = arguments[arguments.length - 1];
                    var nextWrapper = function () {
                        clearTimeout(timeoutID);
                        start();

                        doReport();
                        next.apply(this, arguments);
                    };

                    arguments[arguments.length - 1] = nextWrapper;

                    try {
                        ok(true, "START: " + stepTitle);
                        shouldWait = doStep.apply(this, arguments);
                    } catch (ex) {
                        hasFailed = true;
                        failMessage = ex;
                    }

                    if (!shouldWait) {
                        doReport();

                        var nextToCall = next;
                        nextToCall();
                    } else {
                        stop();

                        // SetTimeout for test fail
                        timeoutID = setTimeout(function () {
                            start();
                            hasFailed = true;
                            failMessage = "TIMEOUT: The test timed out!";
                            doReport();

                        }, nextTimeLimit);
                    }

                };

                yaddaLibrary = yaddaLibrary[_stepType](title, doStepWrapper);

                return this;
            };
        };

        stepLibrary = {
            yaddaLibrary: yaddaLibrary,
            given: stepWrapper("given"),
            when: stepWrapper("when"),
            then: stepWrapper("then"),
        };
    };
}
