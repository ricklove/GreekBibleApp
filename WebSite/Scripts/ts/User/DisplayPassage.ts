/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/Colors.ts" />
/// <reference path="MainViewModel.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayPassage {

        private viewModel: MainViewModel;

        constructor(viewModel: MainViewModel) {
            this.viewModel = viewModel;
            this.showDefault();
        }

        passage = ko.observable<Data.IPassage>(null);
        hasPassageLoadingFailed = ko.observable<boolean>(false);

        showDefault(onLoad?: () => void, onError?: (message: string) => void) {
            // TODO: Load Last Passage (local Storage)
            this.showPassage(1, 1, onLoad, onError);
        }

        showPassage(bookNumber: number, chapter: number, onLoad?: () => void, onError?: (message: string) => void) {

            var p = this.passage;

            // Make Blank while waiting
            p(<any>[]);
            this.hasPassageLoadingFailed(false);

            // Load Async
            Data.Loader.loadPassage(bookNumber, chapter,
                function (passageText: string) {
                    p(Data.Parser.parsePassage(passageText));
                    if (onLoad) { onLoad(); }
                }, function (errorMessage: string) {
                    this.hasPassageLoadingFailed(true);
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

}