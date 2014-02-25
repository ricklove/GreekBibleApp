/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../../typings/yadda/yadda.d.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                Steps.DEBUG_QUNIT_RUNNER = true;

                Steps.stepLibrary;

                Steps.initStepLibrary = function () {
                    var Dictionary = require('yadda').Dictionary;
                    var English = require('yadda').localisation.English;

                    var dictionary = new Dictionary().define('NUM', /(\d+)/);

                    var yaddaLibrary = English.library(dictionary);
                    var _rawSteps = [];

                    var indent = function (level) {
                        var text = "";

                        for (var i = 0; i < level; i++) {
                            text += "\t";
                        }

                        return text;
                    };

                    var _callStep = function (title, args, onDone) {
                        if (onDone == null) {
                            onDone = function () {
                            };
                        }

                        var shouldWaitCount = 0;
                        var hasWaitedCount = 0;

                        var onWaitForNextStep = function () {
                            if (shouldWaitCount == 0) {
                                if (Steps.DEBUG_QUNIT_RUNNER) {
                                    ok(true, "QUNIT-CALLING-STOP");
                                }
                                stop();
                            }

                            args.shouldWaitForNextStepCall();
                            shouldWaitCount++;
                        };

                        var onNextStep = function () {
                            if (hasWaitedCount >= shouldWaitCount) {
                                if (shouldWaitCount != 0) {
                                    if (Steps.DEBUG_QUNIT_RUNNER) {
                                        ok(true, "QUNIT-CALLING-START");
                                    }
                                    start();
                                }

                                ok(true, indent(args._indent + 1) + "END: " + title);
                                onDone();
                            }

                            args.nextStep();
                        };

                        var argsInner = {
                            captures: args.captures,
                            context: args.context,
                            shouldWaitForNextStepCall: onWaitForNextStep,
                            nextStep: onNextStep,
                            _indent: args._indent + 1
                        };

                        ok(true, indent(args._indent + 1) + "START: " + title);

                        _rawSteps[title](argsInner);

                        if (shouldWaitCount == 0) {
                            onNextStep();
                        }
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
                                var shouldWaitCount = 0;
                                var hasWaitedCount = 0;

                                var doReport = function () {
                                    var message;

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

                                        if (Steps.DEBUG_QUNIT_RUNNER) {
                                            ok(true, "QUNIT-CALLING-START");
                                        }
                                        start();

                                        doReport();
                                        next();
                                    }

                                    hasWaitedCount++;
                                };

                                arguments[arguments.length - 1] = nextWrapper;

                                var captures = [];

                                for (var i = 0; i < arguments.length - 1; i++) {
                                    captures[i] = arguments[i];
                                }

                                var shouldWaitCallback = function () {
                                    shouldWaitCount++;
                                };

                                var args = {
                                    captures: captures,
                                    context: scenarioContext,
                                    shouldWaitForNextStepCall: shouldWaitCallback,
                                    nextStep: nextWrapper,
                                    _indent: 2
                                };

                                try  {
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
                                    if (Steps.DEBUG_QUNIT_RUNNER) {
                                        ok(true, "QUNIT-CALLING-STOP");
                                    }
                                    stop();

                                    // SetTimeout for test fail
                                    timeoutID = setTimeout(function () {
                                        if (Steps.DEBUG_QUNIT_RUNNER) {
                                            ok(true, "QUNIT-CALLING-START");
                                        }
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
