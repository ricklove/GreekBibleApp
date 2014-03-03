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

                // Change Passage
                this.owner.displayPassage.showPassage(this.bookNumber(), this.chapterNumber(), this.verseNumber());
            },
            owner: this,
            deferEvaluation: true
        });


        bookChoices = ko.computed(function () {
            return Data.BookInfo.getBookNames();
        }, this);

        chapterChoices = ko.computed(function () {
            var chapterCount = Data.BookInfo.getChapterCount(this.bookNumber());

            var nums: number[] = [];

            for (var i = 0; i < chapterCount; i++) {
                nums.push(i + 1);
            }

            return nums;
        }, this);

        isChapterFocused = ko.observable<boolean>(false);
        isVerseFocused = ko.observable<boolean>(false);
    }

}