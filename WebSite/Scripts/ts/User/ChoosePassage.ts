/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="DisplayPassage.ts" />

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
            },
            owner: this
        });

        chapter = ko.observable<number>(1);


        bookChoices = ko.computed(function () {
            return Data.BookInfo.getBookNames().map(n=> <IBookChoice>{ bookName: n });
        }, this);

        chapterChoices = ko.computed(function () {
            var chapterCount = Data.BookInfo.getChapterCount(this.bookNumber());

            // TODO: Finish this
            return [1, 2, 3].map(n=> <IChapterChoice>{ chapter: n });
        }, this);
    }

}