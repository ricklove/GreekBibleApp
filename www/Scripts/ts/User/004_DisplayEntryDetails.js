/// <reference path="000_MainViewModel.ts" />
/// <reference path="../Core/PassageDetails.ts" />
/// <reference path="../Support/LoadDetailsText.ts" />
/// <reference path="../Support/ParseDetailsText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_DisplayEntryDetails = (function () {
                function MainViewModel_DisplayEntryDetails(viewModel) {
                    this.viewModel = viewModel;
                }
                Object.defineProperty(MainViewModel_DisplayEntryDetails.prototype, "userSettings", {
                    get: function () {
                        return this.viewModel.providers.userSettings;
                    },
                    enumerable: true,
                    configurable: true
                });

                MainViewModel_DisplayEntryDetails.prototype.showDetails = function (entry) {
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
                            var matches = self.passageDetails.entries.filter(function (e) {
                                return e.name === entry.lemma;
                            });

                            if (matches.length > 0) {
                                entry.details.definition = matches[0].strongDefinition;
                            } else {
                                entry.details.definition = "NOT FOUND";
                            }

                            entry.details.isLoaded = true;
                            entry.details.isVisible = true;
                        };

                        if (self.passageDetails == null) {
                            Told.GreekBible.Data.Loader_Details.loadDetails(function (text) {
                                self.passageDetails = Told.GreekBible.Data.Parser_Details.parseDetails(text);

                                loadEntryDetails();
                            });
                        } else {
                            loadEntryDetails();
                        }
                    }

                    entry.isSelected = true;
                };
                return MainViewModel_DisplayEntryDetails;
            })();
            UI.MainViewModel_DisplayEntryDetails = MainViewModel_DisplayEntryDetails;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
