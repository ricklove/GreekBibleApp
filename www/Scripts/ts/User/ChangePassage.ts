/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="MainViewModel.ts" />
/// <reference path="DisplayPassage.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_ChangePassage {

        private owner: MainViewModel;

        constructor(owner: MainViewModel) {
            this.owner = owner;
            this.bookNumber(Data.BookInfo.getBookNumber(this.owner.displayPassage.book()));
            this.chapterNumber(this.owner.displayPassage.chapter());
        }

        bookNumber = ko.observable<number>(1);

        book = ko.computed<string>({
            read: function () {
                return Data.BookInfo.getBookName(this.bookNumber());
            },
            write: function (value) {
                this.bookNumber(Data.BookInfo.getBookNumber(value));

                this.chapter(1);
                console.log("Before:Focus on Chapter");
                this.isChapterFocused(true);
                console.log("After:Focus on Chapter");
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
                // Reset Chapter
                this.chapterNumber(value);

                // Change Passage
                this.owner.displayPassage.showPassage(this.bookNumber(), this.chapterNumber());
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
    }

}