/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="DisplayGreekText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            (function (Tests) {
                test("will load first word from Sample - James 1", function () {
                    var obj = new Told.GreekBible.UI.PassageViewModel();

                    obj.loadSample();

                    var result = obj.passage.words[0].text;

                    equal(result, "Ἰάκωβος", "The first word should be Ἰάκωβος");
                });
            })(UI.Tests || (UI.Tests = {}));
            var Tests = UI.Tests;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
