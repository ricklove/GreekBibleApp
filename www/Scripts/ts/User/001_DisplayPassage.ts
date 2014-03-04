/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/AccessUserSettings.ts" />
/// <reference path="000_MainViewModel.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayPassage {

        private viewModel: MainViewModel;

        private get userSettings() { return this.viewModel.providers.userSettings; }
        private get minTimeForLoadingMessage() { return this.viewModel.providers.config.minTimeForLoadingMessage; }

        constructor(viewModel: MainViewModel) {
            this.viewModel = viewModel;
            this.showDefault();
        }


        passageRaw = ko.observable<Data.IPassage>(null);
        book = ko.observable<string>(null);
        chapter = ko.observable<number>(null);
        verse = ko.observable<number>(null);

        passageVisible = ko.computed<Data.IPassage>({
            read: function () {

                var self = <MainViewModel_DisplayPassage> this;

                var passageChapter = self.passageRaw();

                var v = self.verse();
                var entriesVerse = passageChapter.entries.filter(e=> e.passageRef.verse >= v - 2 && e.passageRef.verse <= v + 2);
                var passageVerse = { entries: entriesVerse };

                var passageFormatted = self.viewModel.displayEntryColorCoding.formatPassage(passageVerse);

                // Format entries
                for (var i = 0; i < entriesVerse.length; i++) {
                    var entry = entriesVerse[i];

                    if (entry.passageRef.verse === v) {
                        entry["verseWrapperClassName"] = "verseWrapperMain";
                    } else {
                        entry["verseWrapperClassName"] = "verseWrapperContext";
                    }
                }

                return passageFormatted;
            },
            owner: this,
            deferEvaluation: true
        });


        hasPassageLoadingFailed = ko.observable<boolean>(false);

        showDefault(onLoad?: () => void, onError?: (message: string) => void) {
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
        }

        showPassage(bookNumber: number, chapter: number, verse: number, onLoad?: () => void, onError?: (message: string) => void) {

            var self = this;

            // Make Blank while waiting
            self.passageRaw({ entries: [] });
            self.hasPassageLoadingFailed(false);

            // Set choice
            this.userSettings.bookChoice = bookNumber.toString();
            this.userSettings.chapterChoice = chapter.toString();
            this.userSettings.verseChoice = verse.toString();

            self.book(Data.BookInfo.getBookName(bookNumber));
            self.chapter(chapter);
            self.verse(verse);

            // Ensure this call is made async to give a change for UI to update
            setTimeout(() => {
                Data.Loader.loadPassage(bookNumber, chapter,
                    function (passageText: string) {

                        // Ensure loading message can display to prevent flicker
                        setTimeout(() => {
                            // Ensure that this was the last chosen passage
                            if (bookNumber === Data.BookInfo.getBookNumber(self.book())
                                && chapter === self.chapter()
                                && verse === self.verse()) {

                                self.passageRaw(Data.Parser.parsePassage(passageText));

                                if (onLoad) { onLoad(); }

                            }
                        }, self.minTimeForLoadingMessage);

                    }, function (errorMessage: string) {
                        self.hasPassageLoadingFailed(true);
                        if (onError) { onError(errorMessage); }
                    });
            }, 0);
        }

        isPassageLoaded = ko.computed<boolean>({
            read: function () {
                var passage = this.passageVisible();
                return passage != null && passage.entries != null && passage.entries.length > 0;
            },
            owner: this,
            deferEvaluation: true
        });

        isPassageLoading = ko.computed<boolean>({
            read: function () {
                return !this.isPassageLoaded() && !this.hasPassageLoadingFailed();
            },
            owner: this,
            deferEvaluation: true
        });

    }

}