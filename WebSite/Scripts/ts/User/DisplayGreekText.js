/// <reference path="SampleData.ts" />
/// <reference path="ParsePassageText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        // <reference path="../../typings/knockout/knockout.d.ts" />
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
                PassageViewModel.prototype.loadSample = function () {
                    var sampleText = Told.GreekBible.Data.Sample.sampleText;
                    this.passage = Loader.loadPassage(sampleText);
                };
                return PassageViewModel;
            })();
            UI.PassageViewModel = PassageViewModel;

            var Loader = (function () {
                function Loader() {
                }
                Loader.loadPassage = function (text) {
                    var passage = Told.GreekBible.Data.Parser.parsePassage(text);
                    return passage;
                };
                return Loader;
            })();
            UI.Loader = Loader;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
