/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../System/Colors.ts" />
/// <reference path="MainViewModel.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayPassage {

        private owner: MainViewModel;

        constructor(owner: MainViewModel) {
            this.owner = owner;
        }


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