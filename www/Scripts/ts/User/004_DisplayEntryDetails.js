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
                    this._nextId = 1000;
                    this.selectedEntry = ko.observable(null);
                    this.selectedEntryTop = ko.observable("0px");
                    this.viewModel = viewModel;
                }
                Object.defineProperty(MainViewModel_DisplayEntryDetails.prototype, "userSettings", {
                    get: function () {
                        return this.viewModel.providers.userSettings;
                    },
                    enumerable: true,
                    configurable: true
                });

                MainViewModel_DisplayEntryDetails.prototype.formatPassage = function (passage) {
                    var p = passage;

                    for (var i = 0; i < p.entries.length; i++) {
                        var e = p.entries[i];
                        e.id = "" + this._nextId++;
                    }

                    return p;
                };

                MainViewModel_DisplayEntryDetails.prototype.hideDetails = function (entry) {
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
                };

                MainViewModel_DisplayEntryDetails.prototype.showDetails = function (entry) {
                    var self = this;

                    self.hideDetails();

                    var showEntryDetails = function () {
                        var matches = self.passageDetails.entries.filter(function (e) {
                            return e.name === entry.lemma;
                        });

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
                            Told.GreekBible.Data.Loader_Details.loadDetails(function (text) {
                                self.passageDetails = Told.GreekBible.Data.Parser_Details.parseDetails(text);

                                showEntryDetails();
                            });
                        } else {
                            showEntryDetails();
                        }
                    } else {
                        showEntryDetails();
                    }
                };
                return MainViewModel_DisplayEntryDetails;
            })();
            UI.MainViewModel_DisplayEntryDetails = MainViewModel_DisplayEntryDetails;

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
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
