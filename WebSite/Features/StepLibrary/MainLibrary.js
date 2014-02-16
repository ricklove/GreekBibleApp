/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/typings/yadda/yadda.d.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Tests) {
            (function (Steps) {
                var Dictionary = require('yadda').Dictionary;
                var English = require('yadda').localisation.English;

                var dictionary = new Dictionary().define('NUM', /(\d+)/);

                var yaddaLibrary = English.library(dictionary);

                // TODO: Move this to a QUnit Library file
                var stepWrapper = function (stepType) {
                    var _stepType = stepType;

                    return function (title, doStep) {
                        var thisQUnitLibrary = this;

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
                            var nextWrapper = function () {
                                clearTimeout(timeoutID);
                                start();

                                doReport();
                                next.apply(this, arguments);
                            };

                            arguments[arguments.length - 1] = nextWrapper;

                            try  {
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

                        thisQUnitLibrary.library = thisQUnitLibrary.library[_stepType](title, doStepWrapper);

                        return thisQUnitLibrary;
                    };
                };

                var qunitLibrary = {
                    library: yaddaLibrary,
                    given: stepWrapper("given"),
                    when: stepWrapper("when"),
                    then: stepWrapper("then")
                };

                Steps.mainLibrary = qunitLibrary;
                Steps.mainYaddaLibrary = qunitLibrary.library;
            })(Tests.Steps || (Tests.Steps = {}));
            var Steps = Tests.Steps;
        })(GreekBible.Tests || (GreekBible.Tests = {}));
        var Tests = GreekBible.Tests;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
