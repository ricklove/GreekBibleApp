/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/yadda/yadda.d.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                Steps.stepLibrary;

                Steps.initStepLibrary = function () {
                    var Dictionary = require('yadda').Dictionary;
                    var English = require('yadda').localisation.English;

                    var dictionary = new Dictionary().define('NUM', /(\d+)/);

                    var yaddaLibrary = English.library(dictionary);
                    var _rawSteps = [];

                    var _callStep = function (title, args) {
                        _rawSteps[title](args);
                    };

                    var stepWrapper = function (stepType) {
                        var _stepType = stepType;

                        return function (title, doStep) {
                            _rawSteps[title] = doStep;

                            var scenarioContext = this;

                            var doStepWrapper = function () {
                                var stepTitle = _stepType + " '" + title + "'";
                                var hasFailed = false;
                                var failMessage = "";
                                var shouldWait = false;

                                var doReport = function () {
                                    var message;

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

                                //var nextThis = this;
                                var nextWrapper = function () {
                                    clearTimeout(timeoutID);
                                    start();

                                    doReport();
                                    next();
                                };

                                arguments[arguments.length - 1] = nextWrapper;

                                var captures = [];

                                for (var i = 0; i < arguments.length - 1; i++) {
                                    captures[i] = arguments[i];
                                }

                                var shouldWaitCallback = function () {
                                    shouldWait = true;
                                };

                                var args = {
                                    captures: captures,
                                    context: scenarioContext,
                                    shouldWaitForNextStepCall: shouldWaitCallback,
                                    nextStep: nextWrapper
                                };

                                try  {
                                    ok(true, "START: " + stepTitle);
                                    doStep(args);
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

                    Steps.stepLibrary = {
                        yaddaLibrary: yaddaLibrary,
                        given: stepWrapper("given"),
                        when: stepWrapper("when"),
                        then: stepWrapper("then"),
                        callStep: _callStep
                    };
                };
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
