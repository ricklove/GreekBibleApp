/// <reference path="../../Scripts/typings/qunit/qunit.d.ts" />
/// <reference path="../../Scripts/typings/yadda/yadda.d.ts" />
/// <reference path="MainLibrary.ts" />
/// <reference path="../../Scripts/ts/User/MainViewModel.ts" />

module Told.GreekBible.Tests.Steps {

    var isFirstRun: boolean = true;
    var viewModel: UI.MainViewModel;

    mainLibrary
    // This would require manually setting the UI value
        .given("this is not the first run", function () {
            isFirstRun = false;
        })
        .given("this is the first run", function () {
            isFirstRun = true;
        })
        .when("the app is loaded", function (next) {
            viewModel = new UI.MainViewModel();

            var onLoad = function () {
                next();
            }

            var onError = function (message: string) {
                ok(false, "ERROR:" + message);
                next();
            }

            if (isFirstRun) {
                viewModel.loadDefault(onLoad, onError);
            } else {
                throw "Not Implemented: The viewModel cannot load last";
                //viewModel.loadLast();
            }

            return true;
        })
        .then("a (?:default )?passage should be displayed", function () {
            ok(viewModel.passage(), "The passage is displayed");
            ok(viewModel.passage().entries, "The entries are displayed");
            ok(viewModel.passage().entries[0].rawText, "The first entry is displayed");
        })
        //.then("the last passage should be displayed", function () {
        //     throw "Pending";
        //})
    ;

    //var wall;

    //library
    //.given("$NUM green bottles are standing on the wall", function(number_of_bottles) {
    //    wall = new Wall(number_of_bottles);
    //})
    //.when("$NUM green bottle accidentally falls", function(number_of_falling_bottles) {
    //    wall.fall(number_of_falling_bottles);
    //})
    //.then("there (?:are|are still) $NUM green bottles standing on the wall", function(number_of_bottles) {
    //    equal(number_of_bottles, wall.bottles);
    //})
    //;

    //var Wall = function(bottles) {
    //    this.bottles = bottles;
    //    this.fall = function(n) {
    //        this.bottles -= n;
    //    }
    //    this.returned = function() {
    //        this.bottles++;
    //    }
    //}
}
