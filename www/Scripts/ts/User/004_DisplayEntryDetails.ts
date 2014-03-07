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

        selectedEntry = ko.observable<IEntryUI>(null);

        private passageDetails: Data.IPassageDetails;

        showDetails(entry: IEntryUI) {

            var self = this;

            // Close all open details
            var verses = self.viewModel.displayPassage.passageVisible().verses;

            for (var iVerse = 0; iVerse < verses.length; iVerse++) {
                var entries = verses[iVerse].entries;

                for (var i = 0; i < entries.length; i++) {
                    entries[i].isSelected = false;

                    if (entries[i].details != null) {
                        entries[i].details.isVisible = false;
                    }
                }
            }

            self.selectedEntry(null);

            var showEntryDetails = function () {

                var matches = self.passageDetails.entries.filter(e=> e.name === entry.lemma);

                if (matches.length > 0) {
                    entry.details.definition = matches[0].strongDefinition;
                } else {
                    entry.details.definition = "NOT FOUND";
                }

                entry.details.isLoaded = true;
                entry.details.isVisible = true;

                // Selected
                entry.isSelected = true;
                self.selectedEntry(entry);

                console.log("Selected Entry = " + entry.lemma);
            };

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

                if (self.passageDetails == null) {
                    Data.Loader_Details.loadDetails((text) => {
                        self.passageDetails = Data.Parser_Details.parseDetails(text);

                        showEntryDetails();
                    });
                } else {
                    showEntryDetails();
                }
            } else {
                showEntryDetails();
            }

        }
    }

}