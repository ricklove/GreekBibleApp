/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="MainViewModel.ts" />

module Told.GreekBible.UI {

    export interface IBookChoice {
        bookName: string;
    }

    export interface IChapterChoice {
        chapter: number;
    }

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

                // Reset Chapter
                this.chapter(1);

                // Change Passage done by Chapter
                //this.owner.loadPassage(this.bookNumber(), this.chapter());
            },
            owner: this
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
                this.owner.loadPassage(this.bookNumber(), this.chapter());
            },
            owner: this
        });

        //bookChoices = ko.computed(function () {
        //    return Data.BookInfo.getBookNames().map(n=> <IBookChoice>{ bookName: n });
        //}, this);

        bookChoices = ko.computed(function () {
            return Data.BookInfo.getBookNames();
        }, this);

        //chapterChoices = ko.computed(function () {
        //    var chapterCount = Data.BookInfo.getChapterCount(this.bookNumber());

        //    var nums : number[] = [];

        //    for (var i = 0; i < chapterCount; i++) {
        //        nums.push(i + 1);
        //    }

        //    return nums.map(n=> <IChapterChoice>{ chapter: n });
        //}, this);

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