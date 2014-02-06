var Told;
(function (Told) {
    (function (Example) {
        var ExampleClass = (function () {
            function ExampleClass() {
            }
            ExampleClass.prototype.exampleFunction = function (i) {
                return i + 1;
            };
            return ExampleClass;
        })();
        Example.ExampleClass = ExampleClass;
    })(Told.Example || (Told.Example = {}));
    var Example = Told.Example;
})(Told || (Told = {}));
