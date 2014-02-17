/// <reference path="../typings/qunit/qunit.d.ts" />
/// <reference path="_Example.ts" />
var Told;
(function (Told) {
    (function (Example2) {
        (function (Tests) {
            test("will add 1 to number", function () {
                var ex = new Told.Example.ExampleClass();
                var res = ex.exampleFunction(10);

                equal(res, 11, "should add 1");
            });

            // Fail Test
            test("Should Fail: will add 1 to number", function () {
                var ex = new Told.Example.ExampleClass();
                var res = ex.exampleFunction(10);

                equal(res, Math.random(), "should add 1");
            });
        })(Example2.Tests || (Example2.Tests = {}));
        var Tests = Example2.Tests;
    })(Told.Example2 || (Told.Example2 = {}));
    var Example2 = Told.Example2;
})(Told || (Told = {}));
