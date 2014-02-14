/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
/// <reference path="../System/LoadPassageText.ts" />
/// <reference path="../System/ParsePassageText.ts" />
/// <reference path="../System/ParsePassageText_TestData.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel = (function () {
                function MainViewModel() {
                    this.passage = ko.observable(null);
                    this.hasPassageLoadingFailed = ko.observable(false);
                    this.isPassageLoaded = ko.computed({
                        read: function () {
                            var passage = this.passage();
                            return passage != null && passage.entries != null && passage.entries.length > 0;
                        },
                        owner: this
                    });
                    this.isPassageLoading = ko.computed({
                        read: function () {
                            return !this.isPassageLoaded() && !this.hasPassageLoadingFailed();
                        },
                        owner: this
                    });
                    this.displayPassage = new Told.GreekBible.UI.MainViewModel_DisplayPassage(this);
                    this.choosePassage = new Told.GreekBible.UI.MainViewModel_ChoosePassage(this);
                    this.loadDefault();
                }
                MainViewModel.prototype.loadDefault = function () {
                    var sampleText = Told.GreekBible.Data.Tests.Sample.sampleText;
                    this.passage(Told.GreekBible.Data.Parser.parsePassage(sampleText));

                    // TODO: Load Last Passage (local Storage)
                    this.loadPassage(1, 1);
                };

                MainViewModel.prototype.loadPassage = function (bookNumber, chapter) {
                    var p = this.passage;

                    // Make Blank while waiting
                    p([]);
                    this.hasPassageLoadingFailed(false);

                    // Load Async
                    Told.GreekBible.Data.Loader.loadPassage(bookNumber, chapter, function (passageText) {
                        p(Told.GreekBible.Data.Parser.parsePassage(passageText));
                    }, function (errorMessage) {
                        this.hasPassageLoadingFailed(true);
                    });
                };
                return MainViewModel;
            })();
            UI.MainViewModel = MainViewModel;

            ko.bindingHandlers["refreshJQM"] = {
                update: function (element, valueAccessor) {
                    ko.utils.unwrapObservable(valueAccessor()); // to subscribe

                    setTimeout(function () {
                        $(element).trigger('create');
                        if ($(element).selectmenu) {
                            $(element).selectmenu('refresh');
                        }
                    }, 0);
                }
            };
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
