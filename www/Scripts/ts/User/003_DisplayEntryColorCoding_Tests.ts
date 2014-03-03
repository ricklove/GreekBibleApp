/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="003_DisplayEntryColorCoding.ts" />
/// <reference path="001_DisplayPassage_Tests.ts" />

module Told.GreekBible.UI.Tests {

    var f = new FeatureTests.Feature("003 - View the Color Coding for an Entry", [
        "As a user,",
        "I can view the color coding for each entry of a passage",
        "So that I can see the entries which have a commonality",
    ]);

    export var step_GivenAPassageIsDisplayed = function (step: (title: string) => void, onReady: (viewModel: MainViewModel) => void, onFail: () => void) {
        step("Given a passage is displayed");

        var sample = samples[0];
        var providers = getProvidersWithSample(sample);
        var viewModel = new UI.MainViewModel(providers);

        step_WhenTheAppIsLoaded(viewModel, () => { }, function () {
            onReady(viewModel);

        }, onFail);
    };


    f.scenario("Should display the same color coding for the same PartOfSpeech code", [
        "Given a passage is displayed",
        "Then entries with the same PartOfSpeech code should have the same color",
    ], function (step, done) {

            step_GivenAPassageIsDisplayed(step, function (viewModel) {
                step("Then entries with the same PartOfSpeech code should have the same color");
                var entries = viewModel.displayPassage.passage().entries;

                var firstColors: { [key: string]: string } = {};

                for (var i = 0; i < entries.length; i++) {
                    if (firstColors[entries[i].partOfSpeech.partOfSpeechCode] == null) {
                        firstColors[entries[i].partOfSpeech.partOfSpeechCode] = entries[i].partOfSpeech["color"];
                    }
                }

                var actual: string[] = [];
                var expected: string[] = [];

                for (var i = 0; i < entries.length; i++) {
                    actual[i] = entries[i].partOfSpeech["color"];
                    expected[i] = firstColors[entries[i].partOfSpeech.partOfSpeechCode];
                }

                deepEqual(actual, expected, "The parts of speech have the same colors for each entry");

                done();
            }, done);

        });

    f.scenario("Should display the same color coding for the same Morph code", [
        "Given a passage is displayed",
        "Then entries with the same Morph code should have the same color",
    ], function (step, done) {

            step_GivenAPassageIsDisplayed(step, function (viewModel) {
                step("Then entries with the same Morph code should have the same color");
                var entries = viewModel.displayPassage.passage().entries;

                var firstColors: { [key: string]: string } = {};

                for (var i = 0; i < entries.length; i++) {
                    if (firstColors[entries[i].morph.morphCode] == null) {
                        firstColors[entries[i].morph.morphCode] = entries[i].morph["color"];
                    }
                }

                var actual: string[] = [];
                var expected: string[] = [];

                for (var i = 0; i < entries.length; i++) {
                    actual[i] = entries[i].morph["color"];
                    expected[i] = firstColors[entries[i].morph.morphCode];
                }

                deepEqual(actual, expected, "The morphs have the same colors for each entry");

                done();
            }, done);

        });

    f.scenario("Should display a different color coding for a different PartOfSpeech code", [
        "Given a passage is displayed",
        "Then entries with a different PartOfSpeech code should have a different color",
    ], function (step, done) {

            step_GivenAPassageIsDisplayed(step, function (viewModel) {
                step("Then entries with a different PartOfSpeech code should have a different color");
                var entries = viewModel.displayPassage.passage().entries;

                var firstColors: { [key: string]: string } = {};
                var keys: string[] = [];

                for (var i = 0; i < entries.length; i++) {
                    if (firstColors[entries[i].partOfSpeech.partOfSpeechCode] == null) {
                        firstColors[entries[i].partOfSpeech.partOfSpeechCode] = entries[i].partOfSpeech["color"];
                    }
                }


                for (var i = 0; i < entries.length; i++) {
                    var entryColor = entries[i].partOfSpeech["color"];

                    var otherColors = "";

                    for (var iKey = 0; iKey < keys.length; iKey++) {
                        if (keys[iKey] != entries[i].partOfSpeech.partOfSpeechCode) {
                            otherColors += firstColors[keys[iKey]] + " ";
                        }
                    }

                    // FAIL
                    if (otherColors.indexOf(entryColor) >= 0) {
                        ok(false, "The unique parts of speech have different colors");
                        done();
                    }
                }

                ok(true, "The unique parts of speech have different colors");

                done();
            }, done);

        });

    f.scenario("Should display a different color coding for a different Morph code", [
        "Given a passage is displayed",
        "Then entries with a different Morph code should have a different color",
    ], function (step, done) {

            step_GivenAPassageIsDisplayed(step, function (viewModel) {
                step("Then entries with a different Morph code should have a different color");
                var entries = viewModel.displayPassage.passage().entries;

                var firstColors: { [key: string]: string } = {};
                var keys: string[] = [];

                for (var i = 0; i < entries.length; i++) {
                    if (firstColors[entries[i].morph.morphCode] == null) {
                        firstColors[entries[i].morph.morphCode] = entries[i].morph["color"];
                    }
                }


                for (var i = 0; i < entries.length; i++) {
                    var entryColor = entries[i].morph["color"];

                    var otherColors = "";

                    for (var iKey = 0; iKey < keys.length; iKey++) {
                        if (keys[iKey] != entries[i].morph.morphCode) {
                            otherColors += firstColors[keys[iKey]] + " ";
                        }
                    }

                    // FAIL
                    if (otherColors.indexOf(entryColor) >= 0) {
                        ok(false, "The unique morphs have different colors");
                        done();
                    }
                }

                ok(true, "The unique morphs have different colors");

                done();
            }, done);

        });

}