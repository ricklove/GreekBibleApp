/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="000_MainViewModel.ts" />
/// <reference path="001_DisplayPassage.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_ChangePassage {

        private owner: MainViewModel;

        constructor(owner: MainViewModel) {
            this.owner = owner;
            this.bookNumber(Data.BookInfo.getBookNumber(this.owner.displayPassage.book()));
            this.chapterNumber(this.owner.displayPassage.chapter());
            this.verseNumber(this.owner.displayPassage.verse());
        }

        bookNumber = ko.observable<number>(1);

        book = ko.computed<string>({
            read: function () {
                return Data.BookInfo.getBookName(this.bookNumber());
            },
            write: function (value) {
                this.bookNumber(Data.BookInfo.getBookNumber(value));

                this.chapter(1);
                this.isChapterFocused(true);
            },
            owner: this,
            deferEvaluation: true
        });

        chapterNumber = ko.observable<number>(1);

        chapter = ko.computed<number>({
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

        verseNumber = ko.observable<number>(1);

        verse = ko.computed<number>({
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


        bookChoices = ko.computed({
            read: function () {
                return Data.BookInfo.getBookNames();
            },
            owner: this,
            deferEvaluation: true
        });

        chapterChoices = ko.computed({
            read: function () {
                var chapterCount = Data.BookInfo.getChapterCount(this.bookNumber());

                var nums: number[] = [];

                for (var i = 0; i < chapterCount; i++) {
                    nums.push(i + 1);
                }

                return nums;
            },
            owner: this,
            deferEvaluation: true
        });


        verseChoices = ko.computed({
            read: function () {
                // Make sure verse number is included in choices 
                // (so verse does not get limited back to 1 by the UI in case it was just chosen)
                var verseCount = this.verseNumber();

                var vm = <MainViewModel>this.owner;
                var passage = vm.displayPassage.passageRaw();
                if (passage != null && passage.entries != null && passage.entries.length > 0) {
                    var entries = vm.displayPassage.passageRaw().entries;
                    verseCount = entries[entries.length - 1].passageRef.verse;
                }

                var nums: number[] = [];

                for (var i = 0; i < verseCount; i++) {
                    nums.push(i + 1);
                }

                return nums;
            },
            owner: this,
            deferEvaluation: true
        });

        isChapterFocused = ko.observable<boolean>(false);
        isVerseFocused = ko.observable<boolean>(false);

        public nextVerse() {
            console.log("nextVerse");

            var self = this;

            var vNext = self.verseNumber() + 1;
            var cNext = self.chapterNumber() + 1;
            var bNext = self.bookNumber() + 1;

            if (self.verseChoices().some((v) => v === vNext)) {
                self.verse(vNext);
            } else if (self.chapterChoices().some((c) => c === cNext)) {
                self.chapter(cNext);
            } else if (Data.BookInfo.isValidBookNumber(bNext)) {
                self.book(Data.BookInfo.getBookName(bNext));
            } else {
                self.book(self.bookChoices()[0]);
            }
        }

        public previousVerse() {
            console.log("previousVerse");

            var self = this;

            var vNext = self.verseNumber() - 1;
            var cNext = self.chapterNumber() - 1;
            var bNext = self.bookNumber() - 1;

            if (self.verseChoices().some((v) => v === vNext)) {
                self.verse(vNext);
                return;
            } else if (self.chapterChoices().some((c) => c === cNext)) {
                self.chapter(cNext);
            } else if (Data.BookInfo.isValidBookNumber(bNext)) {
                self.book(Data.BookInfo.getBookName(bNext));
                self.chapter(Data.BookInfo.getChapterCount(bNext));
            } else {
                self.book(self.bookChoices()[self.bookChoices().length - 1]);
                self.chapter(Data.BookInfo.getChapterCount(bNext));
            }

            // Goto last verse on load
            var vm = <MainViewModel>this.owner;
            vm.displayPassage.showPassage(self.bookNumber(), self.chapterNumber(), 1, () => {
                var chapterEntries = vm.displayPassage.passageRaw().entries;
                var verseCount = chapterEntries[chapterEntries.length - 1].passageRef.verse;

                self.verse(verseCount);
            });

        }
    }

}