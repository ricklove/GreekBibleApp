/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        passage = ko.observable<Data.IPassage>(null);

        displayPassage = new MainViewModel_DisplayPassage(this);
        choosePassage = new MainViewModel_ChoosePassage(this);

    }

}