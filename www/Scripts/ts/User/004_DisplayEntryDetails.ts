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

        formatPassage(passage: IPassageUI): IPassageUI {

            var p = passage;

            for (var i = 0; i < p.entries.length; i++) {
                var e = p.entries[i];
                e.id = "" + this._nextId++;
            }

            return p;
        }

        private _nextId = 1000;

        selectedEntry = ko.observable<IEntryUI>(null);
        selectedEntryTop = ko.observable<string>("0px");

        private passageDetails: Data.IPassageDetails;

        hideDetails(entry: IEntryUI) {
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
        }

        showDetails(entry: IEntryUI) {

            var self = this;

            self.hideDetails();

            var showEntryDetails = function () {

                var matches = self.passageDetails.entries.filter(e=> e.name === entry.lemma);

                if (matches.length > 0) {
                    entry.details.data = matches[0];
                    entry.details.isFound = true;

                } else {
                    entry.details.data = null;
                    entry.details.isFound = false;
                }

                entry.details.isLoaded = true;
                entry.details.isVisible = true;

                // Selected
                entry.isSelected = true;
                self.selectedEntry(entry);

                var top = Math.floor($("#" + entry.id).offset().top + ($("#" + entry.id).outerHeight(true)));

                self.selectedEntryTop(top + "px");

                console.log("Selected Entry = " + entry.lemma);
            };

            // Load details
            if (entry.details == null) {
                entry.details = {
                    isLoading: true,
                    isFound: true,
                    isLoaded: false,
                    isVisible: false,
                    data: null
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

    ko.bindingHandlers["blankSpace"] = {
        init: function (element, valueAccessor, allBindings) {
            if (ko.unwrap(valueAccessor()) != null) {
                $(element).show();

                var targetId = allBindings.get("blankSpaceTargetId");
                var targetHeight = $("#" + targetId).outerHeight();
                $(element).height(targetHeight);
            } else {
                $(element).hide();
            }
        },
        update: function (element, valueAccessor, allBindings) {
            if (ko.unwrap(valueAccessor()) != null) {
                $(element).show();

                var targetId = allBindings.get("blankSpaceTargetId");
                var targetHeight = $("#" + targetId).outerHeight();
                $(element).height(targetHeight);
            } else {
                $(element).hide();
            }
        }
    };

}