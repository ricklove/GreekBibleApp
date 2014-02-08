/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/ParsePassageText.ts" />
/// <reference path="../System/ParsePassageText_TestData.ts" />

module Told.GreekBible.UI {


    export class MainViewModel_DisplayPassage {

        private owner: MainViewModel;

        constructor(owner: MainViewModel) {
            this.owner = owner;
        }

        loadSample() {
            var sampleText = Data.Tests.Sample.sampleText;
            this.owner.passage(Data.Parser.parsePassage(sampleText));
        }

    }

}