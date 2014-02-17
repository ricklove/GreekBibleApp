/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel = (function () {
                function MainViewModel() {
                    this.displayPassage = new Told.GreekBible.UI.MainViewModel_DisplayPassage(this);
                    this.choosePassage = new Told.GreekBible.UI.MainViewModel_ChoosePassage(this);
                }
                return MainViewModel;
            })();
            UI.MainViewModel = MainViewModel;

            ko.bindingHandlers["refreshJQM"] = {
                update: function (element, valueAccessor) {
                    console.log("refreshJQM Update:" + element.id);

                    ko.utils.unwrapObservable(valueAccessor()); // to subscribe

                    setTimeout(function () {
                        console.log("Before:Trigger Create");
                        $(element).trigger('create');
                        console.log("After:Trigger Create");

                        if ($(element).selectmenu) {
                            console.log("Before:SelectMenu Refresh");
                            $(element).selectmenu('refresh');
                            console.log("After:SelectMenu Refresh");
                        }
                    }, 0);
                }
            };
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
