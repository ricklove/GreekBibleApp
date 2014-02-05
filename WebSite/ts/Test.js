var Told;
(function (Told) {
    (function (Test) {
        var TestC = (function () {
            function TestC() {
            }
            TestC.prototype.testF = function (i) {
                return i + 1;
            };
            return TestC;
        })();
    })(Told.Test || (Told.Test = {}));
    var Test = Told.Test;
})(Told || (Told = {}));
