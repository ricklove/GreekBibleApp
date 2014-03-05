/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="003_DisplayEntryColorCoding.ts" />
/// <reference path="001_DisplayPassage_Tests.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            (function (Tests) {
                //Feature: 004 - View Entry Definition
                //As a user,
                //I can view the definition for an entry
                //So that I can understand the meaning of the greek word
                //Scenario: should display the definition of an entry
                //	Given a passage is loaded
                //	When the user selects an entry
                //	Then the definition should be displayed
                var f = new Told.FeatureTests.Feature("004 - View Entry Definition", [
                    "As a user,",
                    "I can view the definition for an entry",
                    "So that I can understand the meaning of the greek word"
                ]);

                f.scenario("Should display the definition of an entry", [
                    "Given a passage is displayed",
                    "When the user selects an entry",
                    "Then the definition should be displayed"
                ], function (step, done) {
                    done();
                });
            })(UI.Tests || (UI.Tests = {}));
            var Tests = UI.Tests;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
