/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Core/Passage.ts" />
/// <reference path="DisplayPassage.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_ChoosePassage = (function () {
                function MainViewModel_ChoosePassage(owner) {
                    this.bookNumber = ko.observable(1);
                    this.book = ko.computed({
                        read: function () {
                            return Told.GreekBible.Data.BookInfo.getBookName(this.bookNumber());
                        },
                        write: function (value) {
                            this.bookNumber(Told.GreekBible.Data.BookInfo.getBookNumber(value));
                        },
                        owner: this
                    });
                    this.chapter = ko.observable(1);
                    this.bookChoices = ko.computed(function () {
                        return Told.GreekBible.Data.BookInfo.getBookNames().map(function (n) {
                            return { bookName: n };
                        });
                    }, this);
                    this.chapterChoices = ko.computed(function () {
                        var chapterCount = Told.GreekBible.Data.BookInfo.getChapterCount(this.bookNumber());

                        // TODO: Finish this
                        return [1, 2, 3].map(function (n) {
                            return { chapter: n };
                        });
                    }, this);
                    this.owner = owner;
                }
                return MainViewModel_ChoosePassage;
            })();
            UI.MainViewModel_ChoosePassage = MainViewModel_ChoosePassage;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
