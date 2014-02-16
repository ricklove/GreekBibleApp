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
                MainViewModel.prototype.loadDefault = function (onLoad, onError) {
                    // TODO: Load Last Passage (local Storage)
                    this.loadPassage(1, 1, onLoad, onError);
                };

                MainViewModel.prototype.loadPassage = function (bookNumber, chapter, onLoad, onError) {
                    var p = this.passage;

                    // Make Blank while waiting
                    p([]);
                    this.hasPassageLoadingFailed(false);

                    // Load Async
                    Told.GreekBible.Data.Loader.loadPassage(bookNumber, chapter, function (passageText) {
                        p(Told.GreekBible.Data.Parser.parsePassage(passageText));
                        if (onLoad) {
                            onLoad();
                        }
                    }, function (errorMessage) {
                        this.hasPassageLoadingFailed(true);
                        if (onError) {
                            onError(errorMessage);
                        }
                    });
                };
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
