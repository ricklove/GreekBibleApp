/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/ParsePassageText.ts" />

module Told.GreekBible.UI {
    export class WordModel {
        text: string;
    }

    export class PassageModel {
        words: WordModel[];
    }

    export class PassageViewModel {
        //loadSample() {
        //    var sampleText = Data.Sample.sampleText;
        //    this.passage = Loader.loadPassage(sampleText)
        //}

        //passage: Data.IPassage;
    }

    //export class Loader {
    //    static loadPassage(text: string): Data.IPassage {
    //        var passage = Data.Parser.parsePassage(text);
    //        return passage;
    //    }


    //}
}