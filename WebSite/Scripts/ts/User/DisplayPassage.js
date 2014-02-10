/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/Colors.ts" />
/// <reference path="MainViewModel.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_DisplayPassage = (function () {
                function MainViewModel_DisplayPassage(owner) {
                    this.owner = owner;
                }
                MainViewModel_DisplayPassage.prototype.getColorA = function (text) {
                    return MainViewModel_DisplayPassage.getUniqueColorA(text);
                };

                MainViewModel_DisplayPassage.prototype.getColorB = function (text) {
                    return MainViewModel_DisplayPassage.getUniqueColorB(text);
                };
                MainViewModel_DisplayPassage.getUniqueColorA = Told.GreekBible.Colors.createGetUniqueColor(150, 150);
                MainViewModel_DisplayPassage.getUniqueColorB = Told.GreekBible.Colors.createGetUniqueColor(175, 175);
                return MainViewModel_DisplayPassage;
            })();
            UI.MainViewModel_DisplayPassage = MainViewModel_DisplayPassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
