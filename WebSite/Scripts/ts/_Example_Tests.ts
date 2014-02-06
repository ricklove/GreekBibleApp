/// <reference path="../typings/qunit/qunit.d.ts" />
/// <reference path="_Example.ts" />


module Told.Example2.Tests {

    test("will add 1 to number", function () {
        var ex = new Told.Example.ExampleClass();
        var res: number = ex.exampleFunction(10);

        equal(res, 11, "should add 1");
    });

    // Fail Test
    test("Should Fail: will add 1 to number", function () {
        var ex = new Told.Example.ExampleClass();
        var res: number = ex.exampleFunction(10);

        equal(res, Math.random(), "should add 1");
    });
}