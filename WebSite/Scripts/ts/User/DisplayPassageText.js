/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/ParsePassageText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var WordModel = (function () {
                function WordModel() {
                }
                return WordModel;
            })();
            UI.WordModel = WordModel;

            var PassageModel = (function () {
                function PassageModel() {
                }
                return PassageModel;
            })();
            UI.PassageModel = PassageModel;

            var PassageViewModel = (function () {
                function PassageViewModel() {
                }
                return PassageViewModel;
            })();
            UI.PassageViewModel = PassageViewModel;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
