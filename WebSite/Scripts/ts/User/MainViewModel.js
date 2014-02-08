/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel = (function () {
                function MainViewModel() {
                    this.displayPassage = new Told.GreekBible.UI.MainViewModel_DisplayPassage(this);
                    this.choosePassage = new Told.GreekBible.UI.MainViewModel_ChoosePassage(this);
                    this.passage = ko.observable(null);
                }
                MainViewModel.prototype.loadSample = function () {
                    var sampleText = Told.GreekBible.Data.Tests.Sample.sampleText;
                    this.passage(Told.GreekBible.Data.Parser.parsePassage(sampleText));
                };

                MainViewModel.prototype.loadPassage = function (bookNumber, chapter) {
                    // TODO: Load this correctly
                    var passageText = Told.GreekBible.Data.Tests.Sample.sampleText2;

                    this.passage(Told.GreekBible.Data.Parser.parsePassage(passageText));
                };
                return MainViewModel;
            })();
            UI.MainViewModel = MainViewModel;

            ko.bindingHandlers["refreshJQM"] = {
                update: function (element, valueAccessor) {
                    ko.utils.unwrapObservable(valueAccessor()); // to subscribe

                    setTimeout(function () {
                        //$(element).trigger('create');
                        //$(element).parent().trigger('create');
                        $('#home').trigger('create');
                    }, 0);
                }
            };
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
