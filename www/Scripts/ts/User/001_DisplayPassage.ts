/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/Colors.ts" />
/// <reference path="../Support/AccessUserSettings.ts" />
/// <reference path="000_MainViewModel.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayPassage {

        private viewModel: MainViewModel;

        private get userSettings() { return this.viewModel.providers.userSettings; }

        constructor(viewModel: MainViewModel) {
            this.viewModel = viewModel;
            this.showDefault();
        }

        passage = ko.observable<Data.IPassage>(null);
        book = ko.observable<string>(null);
        chapter = ko.observable<number>(null);
        hasPassageLoadingFailed = ko.observable<boolean>(false);

        showDefault(onLoad?: () => void, onError?: (message: string) => void) {
            // TODO: Load Last Passage (local Storage)

            var lastBook = parseInt(this.userSettings.bookChoice);
            var lastChapter = parseInt(this.userSettings.chapterChoice);

            if (isNaN(lastBook) || isNaN(lastChapter)) {
                lastBook = 1;
                lastChapter = 1;
            }

            this.showPassage(lastBook, lastChapter, onLoad, onError);
        }

        formatPassage(passage: Data.IPassage): Data.IPassage {

            for (var i = 0; i < passage.entries.length; i++) {
                var e = passage.entries[i];
                e.partOfSpeech['color'] = this.getColorA(e.partOfSpeech.partOfSpeechCode);
                e.morph['color'] = this.getColorB(e.morph.morphCode);
            }

            return passage;
        }

        showPassage(bookNumber: number, chapter: number, onLoad?: () => void, onError?: (message: string) => void) {

            var self = this;

            // Make Blank while waiting
            self.passage(<any>[]);
            self.hasPassageLoadingFailed(false);

            // Set choice
            this.userSettings.bookChoice = bookNumber.toString();
            this.userSettings.chapterChoice = chapter.toString();
            self.book(Data.BookInfo.getBookName(bookNumber));
            self.chapter(chapter);

            // Load Async
            Data.Loader.loadPassage(bookNumber, chapter,
                function (passageText: string) {

                    // Ensure that this was the last chosen passage
                    if (bookNumber === Data.BookInfo.getBookNumber(self.book())
                        && chapter === self.chapter()) {

                            self.passage(self.formatPassage(Data.Parser.parsePassage(passageText)));
                            if (onLoad) { onLoad(); }

                    }
                    
                }, function (errorMessage: string) {
                    self.hasPassageLoadingFailed(true);
                    if (onError) { onError(errorMessage); }
                });
        }

        isPassageLoaded = ko.computed<boolean>({
            read: function () {
                var passage = this.passage();
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


        static getUniqueColorA = Colors.createGetUniqueColor(150, 150);
        static getUniqueColorB = Colors.createGetUniqueColor(175, 175);

        getColorA(text: string): string {
            return MainViewModel_DisplayPassage.getUniqueColorA(text);
        }

        getColorB(text: string): string {
            return MainViewModel_DisplayPassage.getUniqueColorB(text);
        }
    }

    // TODO: Move bindings to display
    ko.bindingHandlers["refreshJQM"] = <KnockoutBindingHandler>{
        update: function (element, valueAccessor) {
            console.log("refreshJQM Update:" + element.id);

            ko.utils.unwrapObservable(valueAccessor()); // to subscribe

            setTimeout(function () {
                console.log("Before:Trigger Create");
                $(element).trigger('create');
                console.log("After:Trigger Create");

                if ((<any>$(element)).selectmenu) {
                    console.log("Before:SelectMenu Refresh");
                    (<any>$(element)).selectmenu('refresh');
                    console.log("After:SelectMenu Refresh");
                }
            }, 0);
        }
    };

    var dustTemplatesCache = [];
    declare var dust: any;

    ko.bindingHandlers["dustTemplate"] = <KnockoutBindingHandler>{
        init: function (element, valueAccessor) {

            var templateText = $(element).html();
            var templateId = element.id;

            if (templateId == null || templateId == "") {
                templateId = element.id = 'DUST_ID' + dustTemplatesCache.length;
            }

            console.log("dustTemplate init:" + templateId);

            if (dustTemplatesCache[templateId] == null) {
                var compiledTemplate = dust.compile(templateText, templateId);
                dustTemplatesCache[templateId] = compiledTemplate;
                dust.loadSource(compiledTemplate);
            }

            var simpleData = ko.toJS(ko.unwrap(valueAccessor()));

            $(element).text("");
            dust.render(templateId, simpleData, function (err, out) {
                console.log("dustTemplate render:" + templateId);
                $(element).append(out);
            })
        },
        update: function (element, valueAccessor) {

            var templateId = element.id;
            console.log("dustTemplate update:" + templateId);

            var simpleData = ko.toJS(ko.unwrap(valueAccessor()));

            $(element).text("");
            dust.render(templateId, simpleData, function (err, out) {
                console.log("dustTemplate render:" + templateId);
                $(element).append(out);
            })
        }
    };

}