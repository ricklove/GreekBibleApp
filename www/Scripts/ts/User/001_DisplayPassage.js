/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/AccessUserSettings.ts" />
/// <reference path="000_MainViewModel.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />
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
                Object.defineProperty(MainViewModel_DisplayPassage.prototype, "userSettings", {
                    get: function () {
                        return this.viewModel.providers.userSettings;
                    },
                    enumerable: true,
                    configurable: true
                });

                MainViewModel_DisplayPassage.prototype.showDefault = function (onLoad, onError) {
                    // TODO: Load Last Passage (local Storage)
                    var lastBook = parseInt(this.userSettings.bookChoice);
                    var lastChapter = parseInt(this.userSettings.chapterChoice);

                    if (isNaN(lastBook) || isNaN(lastChapter)) {
                        lastBook = 1;
                        lastChapter = 1;
                    }

                    this.showPassage(lastBook, lastChapter, onLoad, onError);
                };

                MainViewModel_DisplayPassage.prototype.showPassage = function (bookNumber, chapter, onLoad, onError) {
                    var self = this;

                    // Make Blank while waiting
                    self.passage([]);
                    self.hasPassageLoadingFailed(false);

                    // Set choice
                    this.userSettings.bookChoice = bookNumber.toString();
                    this.userSettings.chapterChoice = chapter.toString();
                    self.book(Told.GreekBible.Data.BookInfo.getBookName(bookNumber));
                    self.chapter(chapter);

                    // Load Async
                    Told.GreekBible.Data.Loader.loadPassage(bookNumber, chapter, function (passageText) {
                        // Ensure that this was the last chosen passage
                        if (bookNumber === Told.GreekBible.Data.BookInfo.getBookNumber(self.book()) && chapter === self.chapter()) {
                            self.passage(self.viewModel.displayEntryColorCoding.formatPassage(Told.GreekBible.Data.Parser.parsePassage(passageText)));
                            if (onLoad) {
                                onLoad();
                            }
                        }
                    }, function (errorMessage) {
                        self.hasPassageLoadingFailed(true);
                        if (onError) {
                            onError(errorMessage);
                        }
                    });
                };
                return MainViewModel_DisplayPassage;
            })();
            UI.MainViewModel_DisplayPassage = MainViewModel_DisplayPassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
