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
                    this.passageRaw = ko.observable(null);
                    this.book = ko.observable(null);
                    this.chapter = ko.observable(null);
                    this.verse = ko.observable(null);
                    this.passageVisible = ko.computed({
                        read: function () {
                            var self = this;

                            var passageChapter = self.passageRaw();
                            var entriesVerse = passageChapter.entries.filter(function (e) {
                                return e.passageRef.verse === self.verse();
                            });
                            var passageVerse = { entries: entriesVerse };

                            var passageFormatted = self.viewModel.displayEntryColorCoding.formatPassage(passageVerse);

                            return passageFormatted;
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.hasPassageLoadingFailed = ko.observable(false);
                    this.isPassageLoaded = ko.computed({
                        read: function () {
                            var passage = this.passageVisible();
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
                Object.defineProperty(MainViewModel_DisplayPassage.prototype, "minTimeForLoadingMessage", {
                    get: function () {
                        return this.viewModel.providers.config.minTimeForLoadingMessage;
                    },
                    enumerable: true,
                    configurable: true
                });

                MainViewModel_DisplayPassage.prototype.showDefault = function (onLoad, onError) {
                    // TODO: Load Last Passage (local Storage)
                    var lastBook = parseInt(this.userSettings.bookChoice);
                    var lastChapter = parseInt(this.userSettings.chapterChoice);
                    var lastVerse = parseInt(this.userSettings.verseChoice);

                    if (isNaN(lastBook) || isNaN(lastChapter) || isNaN(lastVerse)) {
                        lastBook = 1;
                        lastChapter = 1;
                        lastVerse = 1;
                    }

                    this.showPassage(lastBook, lastChapter, lastVerse, onLoad, onError);
                };

                MainViewModel_DisplayPassage.prototype.showPassage = function (bookNumber, chapter, verse, onLoad, onError) {
                    var self = this;

                    // Make Blank while waiting
                    self.passageRaw({ entries: [] });
                    self.hasPassageLoadingFailed(false);

                    // Set choice
                    this.userSettings.bookChoice = bookNumber.toString();
                    this.userSettings.chapterChoice = chapter.toString();
                    this.userSettings.verseChoice = verse.toString();

                    self.book(Told.GreekBible.Data.BookInfo.getBookName(bookNumber));
                    self.chapter(chapter);
                    self.verse(verse);

                    // Ensure this call is made async to give a change for UI to update
                    setTimeout(function () {
                        Told.GreekBible.Data.Loader.loadPassage(bookNumber, chapter, function (passageText) {
                            // Ensure loading message can display to prevent flicker
                            setTimeout(function () {
                                // Ensure that this was the last chosen passage
                                if (bookNumber === Told.GreekBible.Data.BookInfo.getBookNumber(self.book()) && chapter === self.chapter() && verse === self.verse()) {
                                    self.passageRaw(Told.GreekBible.Data.Parser.parsePassage(passageText));

                                    if (onLoad) {
                                        onLoad();
                                    }
                                }
                            }, self.minTimeForLoadingMessage);
                        }, function (errorMessage) {
                            self.hasPassageLoadingFailed(true);
                            if (onError) {
                                onError(errorMessage);
                            }
                        });
                    }, 0);
                };
                return MainViewModel_DisplayPassage;
            })();
            UI.MainViewModel_DisplayPassage = MainViewModel_DisplayPassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
