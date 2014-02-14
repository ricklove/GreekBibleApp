/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
/// <reference path="../System/LoadPassageText.ts" />
/// <reference path="../System/ParsePassageText.ts" />
/// <reference path="../System/ParsePassageText_TestData.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        passage = ko.observable<Data.IPassage>(null);
        hasPassageLoadingFailed = ko.observable<boolean>(false);

        constructor() {
            this.loadDefault();
        }

        loadDefault() {
            var sampleText = Data.Tests.Sample.sampleText;
            this.passage(Data.Parser.parsePassage(sampleText));

            // TODO: Load Last Passage (local Storage)
            this.loadPassage(1, 1);
        }

        loadPassage(bookNumber: number, chapter: number) {

            var p = this.passage;

            // Make Blank while waiting
            p(<any>[]);
            this.hasPassageLoadingFailed(false);

            // Load Async
            Data.Loader.loadPassage(bookNumber, chapter, function (passageText: string) {
                p(Data.Parser.parsePassage(passageText));
            }, function (errorMessage: string) {
                    this.hasPassageLoadingFailed(true);
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
            ko.utils.unwrapObservable(valueAccessor()); // to subscribe

            setTimeout(function () {
                $(element).trigger('create');
                if ((<any>$(element)).selectmenu) {
                    (<any>$(element)).selectmenu('refresh');
                }
            }, 0);
        }
    };
}