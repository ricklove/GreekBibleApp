/// <reference path="SampleData.ts" />

// <reference path="../../typings/knockout/knockout.d.ts" />

module Told.GreekBible.UI {
    export class WordModel {
        text: string;
    }

    export class PassageModel {
        words: Array<WordModel>;
    }

    export class PassageViewModel {
        loadSample() {
            var sampleText = Data.Sample.sampleText;
            this.passage = Loader.loadPassage(sampleText)
        }

        passage: PassageModel;
    }

    class Loader {
        static loadPassage(text: string): PassageModel {
            //var passage = new PassageModel();

            //passage.words = new Array<WordModel>();
            //passage.words[0] = new WordModel();
            //passage.words[0].text = "test";

            //return passage;
        }
    }
}