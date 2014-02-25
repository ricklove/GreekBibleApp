/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="002_ChangePassage.ts" />
/// <reference path="001_DisplayPassage_Tests.ts" />

module Told.GreekBible.UI.Tests {

    var f = new FeatureTests.Feature("003 - View the Color Coding for an Entry", [
        "As a user,",
        "I can view the color coding for each entry of a passage",
        "So that I can see the entries which have a commonality",
    ]);

    f.scenario("Should display the same color coding for the same PartOfSpeech code", [
        "Given a passage is displayed",
        "Then entries with the same PartOfSpeech code should have the same color",
    ], function (step, done) {

        });

    f.scenario("Should display the same color coding for the same Morph code", [
        "Given a passage is displayed",
        "Then entries with the same Morph code should have the same color",
    ], function (step, done) {

    });

    f.scenario("Should display a different color coding for a different PartOfSpeech code", [
        "Given a passage is displayed",
        "Then entries with a different PartOfSpeech code should have the same color",
    ], function (step, done) {

        });

    f.scenario("Should display a different color coding for a different Morph code", [
        "Given a passage is displayed",
        "Then entries with a different Morph code should have the same color",
    ], function (step, done) {

        });

}