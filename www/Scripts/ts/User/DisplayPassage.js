/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/Colors.ts" />
/// <reference path="../Support/AccessUserSettings.ts" />
/// <reference path="MainViewModel.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_DisplayPassage = (function () {
                function MainViewModel_DisplayPassage(viewModel) {
                    this.passage = ko.observable(null);
                    this.book = ko.observable(null);
                    this.chapter = ko.observable(null);
                    this.hasPassageLoadingFailed = ko.observable(false);
                    this.isPassageLoaded = ko.computed({
                        read: function () {
                            var passage = this.passage();
                            return passage != null && passage.entries != null && passage.entries.length > 0;
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.isPassageLoading = ko.computed({
                        read: function () {
                            return !this.isPassageLoaded() && !this.hasPassageLoadingFailed();
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.viewModel = viewModel;
                    this.showDefault();
                }
                MainViewModel_DisplayPassage.prototype.showDefault = function (onLoad, onError) {
                    // TODO: Load Last Passage (local Storage)
                    var lastBook = parseInt(Told.GreekBible.Data.AccessUserSettings.getUserSetting("bookChoice"));
                    var lastChapter = parseInt(Told.GreekBible.Data.AccessUserSettings.getUserSetting("chapterChoice"));

                    if (isNaN(lastBook) || isNaN(lastChapter)) {
                        lastBook = 1;
                        lastChapter = 1;
                    }

                    this.showPassage(lastBook, lastChapter, onLoad, onError);
                };

                MainViewModel_DisplayPassage.prototype.showPassage = function (bookNumber, chapter, onLoad, onError) {
                    var p = this.passage;
                    var b = this.book;
                    var c = this.chapter;

                    // Make Blank while waiting
                    p([]);
                    this.hasPassageLoadingFailed(false);

                    // Set choice
                    Told.GreekBible.Data.AccessUserSettings.setUserSetting("bookChoice", bookNumber.toString());
                    Told.GreekBible.Data.AccessUserSettings.setUserSetting("chapterChoice", chapter.toString());
                    b(Told.GreekBible.Data.BookInfo.getBookName(bookNumber));
                    c(chapter);

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
