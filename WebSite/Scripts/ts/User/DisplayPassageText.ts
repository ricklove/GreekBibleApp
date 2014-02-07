/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/ParsePassageText.ts" />
/// <reference path="../System/ParsePassageText_TestData.ts" />

module Told.GreekBible.UI {
    export class WordModel {
        text: string;
    }

    export class PassageModel {
        words: WordModel[];
    }

    export class PassageViewModel {

        passage = ko.observable<Data.IPassage>(null);

        loadSample() {
            var sampleText = Data.Tests.Sample.sampleText;
            this.passage(Data.Parser.parsePassage(sampleText));
        }

    }

    //export class Loader {
    //    static loadPassage(text: string): Data.IPassage {
    //        var passage = Data.Parser.parsePassage(text);
    //        return passage;
    //    }


    //}
}