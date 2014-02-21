/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/AccessProviders.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel = (function () {
                function MainViewModel(providers) {
                    if (providers == null) {
                        providers = Told.GreekBible.Data.createDefaultProviders();
                    }

                    this.providers = providers;
                    this.displayPassage = new Told.GreekBible.UI.MainViewModel_DisplayPassage(this);
                    this.choosePassage = new Told.GreekBible.UI.MainViewModel_ChoosePassage(this);
                }
                return MainViewModel;
            })();
            UI.MainViewModel = MainViewModel;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
