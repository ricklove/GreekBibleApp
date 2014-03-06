/// <reference path="000_MainViewModel.ts" />
/// <reference path="../Core/PassageDetails.ts" />
/// <reference path="../Support/LoadDetailsText.ts" />
/// <reference path="../Support/ParseDetailsText.ts" />

module Told.GreekBible.UI {

    export class MainViewModel_DisplayEntryDetails {

        private viewModel: MainViewModel;

        private get userSettings() { return this.viewModel.providers.userSettings; }

        constructor(viewModel: MainViewModel) {
            this.viewModel = viewModel;
        }

        private passageDetails: Data.IPassageDetails;

        showDetails(entry: IEntryUI) {

            var self = this;

            // Close all open details
            var entries = self.viewModel.displayPassage.passageVisible().entries;

            for (var i = 0; i < entries.length; i++) {
                entries[i].isSelected = false;

                if (entries[i].details != null) {
                    entries[i].details.isVisible = false;
                }
            }

            // Load details
            if (entry.details == null) {
                entry.details = {
                    isLoading: true,
                    isLoaded: false,
                    isVisible: false,
                    definition: ""
                };

                //var loadDetails;
                //loadDetails();

                // TODO: Deal with race condition where multiple entries clicked quickly while details is still loading
                var loadEntryDetails = function () {

                    var matches = self.passageDetails.entries.filter(e=> e.name === entry.lemma);

                    if (matches.length > 0) {
                        entry.details.definition = matches[0].strongDefinition;
                    } else {
                        entry.details.definition = "NOT FOUND";
                    }

                    entry.details.isLoaded = true;
                    entry.details.isVisible = true;
                };


                if (self.passageDetails == null) {
                    Data.Loader_Details.loadDetails((text) => {
                        self.passageDetails = Data.Parser_Details.parseDetails(text);

                        loadEntryDetails();
                    });
                } else {
                    loadEntryDetails();
                }
            }

            entry.isSelected = true;
        }
    }

}