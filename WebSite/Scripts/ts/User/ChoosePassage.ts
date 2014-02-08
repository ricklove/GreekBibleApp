/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="MainViewModel.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_ChoosePassage {

        private owner: MainViewModel;

        constructor(owner: MainViewModel) {
            this.owner = owner;
        }

        bookNumber = ko.observable<number>(1);

        book = ko.computed<string>({
            read: function () {
                return Data.BookInfo.getBookName(this.bookNumber());
            },
            write: function (value) {
                this.bookNumber(Data.BookInfo.getBookNumber(value));

                // Reset Chapter (Async - this seems to help the UI refresh)
                var c = this.chapter;
                setTimeout(function () { c(1); }, 0);
            },
            owner: this
        });

        chapterNumber = ko.observable<number>(5);

        chapter = ko.computed<number>({
            read: function () {
                return this.chapterNumber();
            },
            write: function (value) {
                // Reset Chapter
                this.chapterNumber(value);

                // Change Passage
                this.owner.loadPassage(this.bookNumber(), this.chapter());
            },
            owner: this
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
    }

}