/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        displayPassage = new MainViewModel_DisplayPassage(this);
        choosePassage = new MainViewModel_ChoosePassage(this);

        passage = ko.observable<Data.IPassage>(null);

        loadSample() {
            var sampleText = Data.Tests.Sample.sampleText;
            this.passage(Data.Parser.parsePassage(sampleText));
        }

        loadPassage(bookNumber: number, chapter: number) {
            // TODO: Load this correctly
            var passageText = Data.Tests.Sample.sampleText2;

            this.passage(Data.Parser.parsePassage(passageText));
        }

    }

}