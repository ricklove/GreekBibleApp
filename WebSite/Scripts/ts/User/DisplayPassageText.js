/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/ParsePassageText.ts" />
/// <reference path="../System/ParsePassageText_TestData.ts" />
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
                    this.passage = ko.observable(null);
                }
                PassageViewModel.prototype.loadSample = function () {
                    var sampleText = Told.GreekBible.Data.Tests.Sample.sampleText;
                    this.passage(Told.GreekBible.Data.Parser.parsePassage(sampleText));
                };
                return PassageViewModel;
            })();
            UI.PassageViewModel = PassageViewModel;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
