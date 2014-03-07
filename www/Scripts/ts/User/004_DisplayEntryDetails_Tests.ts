/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="../System/FeatureTests.ts" />
/// <reference path="004_DisplayEntryDetails.ts" />
/// <reference path="001_DisplayPassage_Tests.ts" />

module Told.GreekBible.UI.Tests {

    var f = new FeatureTests.Feature("004 - View Entry Details", [
        "As a user,",
        "I can view the details for an entry",
        "So that I can understand the meaning of the greek word",
    ]);

    f.scenario("Should display the definition of an entry", [
        "Given a passage is displayed",
        "When the user selects an entry",
        "Then the definition is loaded",
        "And the definition should be displayed",
    ], function (step, done) {
            step_GivenAPassageIsDisplayed(step, function (viewModel) {
                step("When the user selects an entry");

                var entries = viewModel.displayPassage.passageVisible().verses[0].entries;

                viewModel.displayEntryDetails.showDetails(entries[0]);

                //step("Then the definition should be loaded");
                //equal(entries[0].details.isLoading || entries[0].details.isLoaded, true, "Details are loading");

                var thenTheDefinitionIsLoaded_AndTheDefinitionShouldBeDisplayed = function () {
                    step("Then the definition is loaded");

                    var checkAndCall = function () {

                        if (entries[0].details.isLoaded) {

                            step("And the definition should be displayed");

                            equal(entries[0].details.isVisible, true, "Details are displayed");
                            ok(entries[0].details.definition != "", "Definition is displayed");
                            done();

                        } else {
                            setTimeout(checkAndCall, 100);
                        }
                    };

                    setTimeout(checkAndCall, 100);
                }

                thenTheDefinitionIsLoaded_AndTheDefinitionShouldBeDisplayed();

            }, done);
        });

}