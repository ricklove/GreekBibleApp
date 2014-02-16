/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        passage = ko.observable<Data.IPassage>(null);
        hasPassageLoadingFailed = ko.observable<boolean>(false);

        constructor() {
            this.loadDefault();
        }

        loadDefault(onLoad?: () => void, onError?: (message: string) => void) {
            // TODO: Load Last Passage (local Storage)
            this.loadPassage(1, 1, onLoad, onError);
        }

        loadPassage(bookNumber: number, chapter: number, onLoad?: () => void, onError?: (message: string) => void) {

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
            owner: this
        });

        isPassageLoading = ko.computed<boolean>({
            read: function () {
                return !this.isPassageLoaded() && !this.hasPassageLoadingFailed();
            },
            owner: this
        });

        displayPassage = new MainViewModel_DisplayPassage(this);
        choosePassage = new MainViewModel_ChoosePassage(this);
    }

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
}