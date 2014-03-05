/// <reference path="000_MainViewModel.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayEntryDetails {

        private viewModel: MainViewModel;

        private get userSettings() { return this.viewModel.providers.userSettings; }

        constructor(viewModel: MainViewModel) {
            this.viewModel = viewModel;
        }

        showDetails(entry: IEntryUI) {

            // Close all details
            var entries = this.viewModel.displayPassage.passageVisible().entries;

            for (var i = 0; i < entries.length; i++) {
                entries[i].isSelected = false;
            }

            // Load details
            if (entry.details == null) {
                entry.details = { isVisible: false, definition: "" };
            }

            entry.isSelected = true;
        }
    }

}