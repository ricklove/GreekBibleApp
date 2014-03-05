/// <reference path="../Support/Colors.ts" />
/// <reference path="000_MainViewModel.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayEntryColorCoding {

        private viewModel: MainViewModel;

        private get userSettings() { return this.viewModel.providers.userSettings; }

        constructor(viewModel: MainViewModel) {
            this.viewModel = viewModel;
        }

        formatPassage(passage: IPassageUI): IPassageUI {

            var p = passage;

            for (var i = 0; i < p.entries.length; i++) {
                var e = p.entries[i];
                e.partOfSpeech.color = this.getColorA(e.partOfSpeech.partOfSpeechCode);
                e.morph.color = this.getColorB(e.morph.morphCode);
            }

            return p;
        }

        static getUniqueColorA = Colors.createGetUniqueColor(150, 150);
        static getUniqueColorB = Colors.createGetUniqueColor(175, 175);

        getColorA(text: string): string {
            return MainViewModel_DisplayEntryColorCoding.getUniqueColorA(text);
        }

        getColorB(text: string): string {
            return MainViewModel_DisplayEntryColorCoding.getUniqueColorB(text);
        }
    }

}