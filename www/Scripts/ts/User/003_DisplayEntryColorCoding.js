/// <reference path="../Support/Colors.ts" />
/// <reference path="000_MainViewModel.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_DisplayEntryColorCoding = (function () {
                function MainViewModel_DisplayEntryColorCoding(viewModel) {
                    this.viewModel = viewModel;
                }
                Object.defineProperty(MainViewModel_DisplayEntryColorCoding.prototype, "userSettings", {
                    get: function () {
                        return this.viewModel.providers.userSettings;
                    },
                    enumerable: true,
                    configurable: true
                });

                MainViewModel_DisplayEntryColorCoding.prototype.formatPassage = function (passage) {
                    var p = passage;

                    for (var i = 0; i < p.entries.length; i++) {
                        var e = p.entries[i];
                        e.partOfSpeech.color = this.getColorA(e.partOfSpeech.partOfSpeechCode);
                        e.morph.color = this.getColorB(e.morph.morphCode);
                    }

                    return p;
                };

                MainViewModel_DisplayEntryColorCoding.prototype.getColorA = function (text) {
                    return MainViewModel_DisplayEntryColorCoding.getUniqueColorA(text);
                };

                MainViewModel_DisplayEntryColorCoding.prototype.getColorB = function (text) {
                    return MainViewModel_DisplayEntryColorCoding.getUniqueColorB(text);
                };
                MainViewModel_DisplayEntryColorCoding.getUniqueColorA = Told.GreekBible.Colors.createGetUniqueColor(150, 150);
                MainViewModel_DisplayEntryColorCoding.getUniqueColorB = Told.GreekBible.Colors.createGetUniqueColor(175, 175);
                return MainViewModel_DisplayEntryColorCoding;
            })();
            UI.MainViewModel_DisplayEntryColorCoding = MainViewModel_DisplayEntryColorCoding;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
