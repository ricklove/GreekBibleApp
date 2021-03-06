﻿/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="000_MainViewModel.ts" />
/// <reference path="001_DisplayPassage.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_ChangePassage = (function () {
                function MainViewModel_ChangePassage(owner) {
                    this.bookNumber = ko.observable(1);
                    this.book = ko.computed({
                        read: function () {
                            return Told.GreekBible.Data.BookInfo.getBookName(this.bookNumber());
                        },
                        write: function (value) {
                            this.bookNumber(Told.GreekBible.Data.BookInfo.getBookNumber(value));

                            this.chapter(1);
                            this.isChapterFocused(true);
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.chapterNumber = ko.observable(1);
                    this.chapter = ko.computed({
                        read: function () {
                            return this.chapterNumber();
                        },
                        write: function (value) {
                            this.chapterNumber(value);

                            this.verse(1);
                            this.isVerseFocused(true);
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.verseNumber = ko.observable(1);
                    this.verse = ko.computed({
                        read: function () {
                            return this.verseNumber();
                        },
                        write: function (value) {
                            this.verseNumber(value);

                            console.log("Verse=" + value);
                            if (value === 1) {
                                var breakdance = true;
                            }

                            // Change Passage
                            this.owner.displayPassage.showPassage(this.bookNumber(), this.chapterNumber(), this.verseNumber());
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.bookChoices = ko.computed({
                        read: function () {
                            return Told.GreekBible.Data.BookInfo.getBookNames();
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.chapterChoices = ko.computed({
                        read: function () {
                            var chapterCount = Told.GreekBible.Data.BookInfo.getChapterCount(this.bookNumber());

                            var nums = [];

                            for (var i = 0; i < chapterCount; i++) {
                                nums.push(i + 1);
                            }

                            return nums;
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.verseChoices = ko.computed({
                        read: function () {
                            // Make sure verse number is included in choices
                            // (so verse does not get limited back to 1 by the UI in case it was just chosen)
                            var verseCount = this.verseNumber();

                            var vm = this.owner;
                            var passage = vm.displayPassage.passageRaw();
                            if (passage != null && passage.entries != null && passage.entries.length > 0) {
                                var entries = vm.displayPassage.passageRaw().entries;
                                verseCount = entries[entries.length - 1].passageRef.verse;
                            }

                            var nums = [];

                            for (var i = 0; i < verseCount; i++) {
                                nums.push(i + 1);
                            }

                            return nums;
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.isChapterFocused = ko.observable(false);
                    this.isVerseFocused = ko.observable(false);
                    this.owner = owner;
                    this.bookNumber(Told.GreekBible.Data.BookInfo.getBookNumber(this.owner.displayPassage.book()));
                    this.chapterNumber(this.owner.displayPassage.chapter());
                    this.verseNumber(this.owner.displayPassage.verse());
                }
                MainViewModel_ChangePassage.prototype.nextVerse = function () {
                    console.log("nextVerse");

                    var self = this;

                    var vNext = self.verseNumber() + 1;
                    var cNext = self.chapterNumber() + 1;
                    var bNext = self.bookNumber() + 1;

                    if (self.verseChoices().some(function (v) {
                        return v === vNext;
                    })) {
                        self.verse(vNext);
                    } else if (self.chapterChoices().some(function (c) {
                        return c === cNext;
                    })) {
                        self.chapter(cNext);
                    } else if (Told.GreekBible.Data.BookInfo.isValidBookNumber(bNext)) {
                        self.book(Told.GreekBible.Data.BookInfo.getBookName(bNext));
                    } else {
                        self.book(self.bookChoices()[0]);
                    }
                };

                MainViewModel_ChangePassage.prototype.previousVerse = function () {
                    console.log("previousVerse");

                    var self = this;

                    var vNext = self.verseNumber() - 1;
                    var cNext = self.chapterNumber() - 1;
                    var bNext = self.bookNumber() - 1;

                    if (self.verseChoices().some(function (v) {
                        return v === vNext;
                    })) {
                        self.verse(vNext);
                        return;
                    } else if (self.chapterChoices().some(function (c) {
                        return c === cNext;
                    })) {
                        self.chapter(cNext);
                    } else if (Told.GreekBible.Data.BookInfo.isValidBookNumber(bNext)) {
                        self.book(Told.GreekBible.Data.BookInfo.getBookName(bNext));
                        self.chapter(Told.GreekBible.Data.BookInfo.getChapterCount(bNext));
                    } else {
                        self.book(self.bookChoices()[self.bookChoices().length - 1]);
                        self.chapter(Told.GreekBible.Data.BookInfo.getChapterCount(bNext));
                    }

                    // Goto last verse on load
                    var vm = this.owner;
                    vm.displayPassage.showPassage(self.bookNumber(), self.chapterNumber(), 1, function () {
                        var chapterEntries = vm.displayPassage.passageRaw().entries;
                        var verseCount = chapterEntries[chapterEntries.length - 1].passageRef.verse;

                        self.verse(verseCount);
                    });
                };
                return MainViewModel_ChangePassage;
            })();
            UI.MainViewModel_ChangePassage = MainViewModel_ChangePassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
