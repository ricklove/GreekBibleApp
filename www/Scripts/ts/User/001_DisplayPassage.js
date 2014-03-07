﻿/// <reference path="../../typings/knockout/knockout.d.ts" />
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
                    this.passageVisible = ko.observable(null);
                    this.book = ko.observable(null);
                    this.chapter = ko.observable(null);
                    this.verse = ko.observable(null);
                    this.hasPassageLoadingFailed = ko.observable(false);
                    this.isPassageLoaded = ko.computed({
                        read: function () {
                            var passage = this.passageVisible();
                            return passage != null && passage.verses != null && passage.verses.length > 0;
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
                    self.passageVisible({ verses: [], allEntries: [] });
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
                                    self.passageVisible(self.getPassageVisible());

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

                MainViewModel_DisplayPassage.prototype.getPassageVisible = function () {
                    var self = this;

                    var passageChapter = self.passageRaw();

                    var verseNum = self.verse();
                    var entriesVerse = passageChapter.entries.filter(function (e) {
                        return e.passageRef.verse >= verseNum - 2 && e.passageRef.verse <= verseNum + 2;
                    });
                    var passageVerse = { entries: entriesVerse };

                    var passageFormatted = self.viewModel.displayEntryColorCoding.formatPassage(passageVerse);

                    // Group in verses
                    var verses = [];

                    for (var i = 0; i < entriesVerse.length; i++) {
                        var entry = entriesVerse[i];

                        var versesMatch = verses.filter(function (v) {
                            return v.passageRef.bookNumber === entry.passageRef.bookNumber && v.passageRef.chapter === entry.passageRef.chapter && v.passageRef.verse === entry.passageRef.verse;
                        });
                        var verse = versesMatch.length > 0 ? versesMatch[0] : null;

                        if (verse === null) {
                            verses.push({
                                passageRef: entry.passageRef,
                                verseWrapperClassName: entry.passageRef.verse === verseNum ? "verseWrapperMain" : "verseWrapperContext",
                                entries: []
                            });

                            verse = verses[verses.length - 1];
                        }

                        verse.entries.push(entry);
                    }

                    return { verses: verses, allEntries: entriesVerse };
                };
                return MainViewModel_DisplayPassage;
            })();
            UI.MainViewModel_DisplayPassage = MainViewModel_DisplayPassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
