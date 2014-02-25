/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/yadda/yadda.d.ts" />

module Told.GreekBible.Tests.Steps {

    export var DEBUG_QUNIT_RUNNER = true;

    export var stepLibrary: IQUnitStepLibrary;

    export interface IQUnitStepArgs {
        captures: string[];
        context: {};
        shouldWaitForNextStepCall: () => void;
        nextStep: () => void;
        _indent: number;
    }

    export interface IQUnitStepLibrary {
        yaddaLibrary: IYaddaLibrary;
        given: (title: string, doStep: (args: IQUnitStepArgs) => void) => IQUnitStepLibrary;
        when: (title: string, doStep: (args: IQUnitStepArgs) => void) => IQUnitStepLibrary;
        then: (title: string, doStep: (args: IQUnitStepArgs) => void) => IQUnitStepLibrary;
        callStep: (title: string, args: IQUnitStepArgs, onDone: () => void) => void;
    }

    export var initStepLibrary = function () {

        var Dictionary = require('yadda').Dictionary;
        var English = require('yadda').localisation.English;

        var dictionary = new Dictionary()
            .define('NUM', /(\d+)/);

        var yaddaLibrary: IYaddaLibrary = <any> English.library(dictionary);
        var _rawSteps = [];

        var indent = function (level: number) {
            var text = "";

            for (var i = 0; i < level; i++) {
                text += "\t";
            }

            return text;
        }

        var _callStep = function (title: string, args: IQUnitStepArgs, onDone: () => void) {

            if (onDone == null) { onDone = () => { }; }

            var shouldWaitCount = 0;
            var hasWaitedCount = 0;

            var onWaitForNextStep = () => {

                if (shouldWaitCount == 0) {
                    if (DEBUG_QUNIT_RUNNER) { ok(true, "QUNIT-CALLING-STOP"); }
                    stop();
                }

                args.shouldWaitForNextStepCall();
                shouldWaitCount++;
            };

            var onNextStep = () => {
                if (hasWaitedCount >= shouldWaitCount) {
                    if (shouldWaitCount != 0) {
                        if (DEBUG_QUNIT_RUNNER) { ok(true, "QUNIT-CALLING-START"); }
                        start();
                    }

                    ok(true, indent(args._indent + 1) + "END: " + title);
                    onDone();
                }

                args.nextStep();
            };

            var argsInner: IQUnitStepArgs = {
                captures: args.captures,
                context: args.context,
                shouldWaitForNextStepCall: onWaitForNextStep,
                nextStep: onNextStep,
                _indent: args._indent + 1,
            };

            ok(true, indent(args._indent + 1) + "START: " + title);

            _rawSteps[title](argsInner);

            if (shouldWaitCount == 0) {
                onNextStep();
            }
        };

        var stepWrapper = function (stepType: string): (title: string, doStep: (args: IQUnitStepArgs) => void) => IQUnitStepLibrary {

            var _stepType = stepType;

            return function (title: string, doStep: (args: IQUnitStepArgs) => void): IQUnitStepLibrary {

                _rawSteps[title] = doStep;

                var scenarioContext = this;

                var doStepWrapper = function () {

                    var stepTitle = _stepType + " '" + title + "'";
                    var hasFailed = false;
                    var failMessage = "";
                    var shouldWaitCount = 0;
                    var hasWaitedCount = 0;

                    var doReport = function () {
                        var message: string;

                        if (hasFailed) {
                            message = indent(args._indent) + "FAILED: " + stepTitle + "\r\n" + failMessage;
                        } else {
                            message = indent(args._indent) + "END: " + stepTitle;
                        }

                        ok(!hasFailed, message);
                    };

                    var nextTimeLimit = 5000;
                    var timeoutID;
                    var next = arguments[arguments.length - 1];
                    //var nextThis = this;

                    var nextWrapper = function () {

                        if (hasWaitedCount >= shouldWaitCount) {
                            clearTimeout(timeoutID);

                            if (DEBUG_QUNIT_RUNNER) { ok(true, "QUNIT-CALLING-START"); }
                            start();

                            doReport();
                            next();
                        }

                        hasWaitedCount++;
                    };

                    arguments[arguments.length - 1] = nextWrapper;

                    var captures: string[] = [];

                    for (var i = 0; i < arguments.length - 1; i++) {
                        captures[i] = arguments[i];
                    }

                    var shouldWaitCallback = () => { shouldWaitCount++; }

                    var args: IQUnitStepArgs = {
                        captures: captures,
                        context: scenarioContext,
                        shouldWaitForNextStepCall: shouldWaitCallback,
                        nextStep: nextWrapper,
                        _indent: 2,
                    };

                    try {
                        ok(true, indent(args._indent) + "START: " + stepTitle);
                        doStep(args);
                    } catch (ex) {
                        hasFailed = true;
                        failMessage = ex;
                    }

                    if (shouldWaitCount == 0) {
                        doReport();

                        var nextToCall = next;
                        nextToCall();
                    } else {

                        if (DEBUG_QUNIT_RUNNER) { ok(true, "QUNIT-CALLING-STOP"); }
                        stop();

                        // SetTimeout for test fail
                        timeoutID = setTimeout(function () {

                            if (DEBUG_QUNIT_RUNNER) { ok(true, "QUNIT-CALLING-START"); }
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
            callStep: _callStep,
        };
    };
}
