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

        hideDetails() {
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

        createBlankEntry(): IEntryUI {
            return {
                id: "0",

                details: { data: null, isFound: true, isLoaded: true, isLoading: false, isVisible: true },
                lemma: "",
                rawText: "",

                partOfSpeech: { color: "#FFFFFF", partOfSpeechCode: "", mainPart: "", secondPart: "" },
                morph: { color: "#FFFFFF", morphCode: "", mCase: "", mDegree: "", mGender: "", mMood: "", mNumber: "", mPerson: "", mTense: "", mVoice: "" },

                passageRef: null,

                isSelected: false,
                isVerseStart: false,
            };
        }

        showDetails_Reference(referenceId: number) {
            console.log("called showDetails_Reference '" + referenceId + "'");

            var self = this;

            var matches = self.passageDetails.entries.filter(e=> e.id === referenceId);

            if (matches.length > 0) {
                var match = matches[0];
                var fakeEntry: IEntryUI = self.createBlankEntry();

                // Reuse id to keep in same place
                fakeEntry.id = self.selectedEntry().id;
                fakeEntry.lemma = match.name;
                fakeEntry.rawText = match.name;

                self.showDetails(fakeEntry);
                console.log("show details " + fakeEntry.id);
            }
        }

        private _lastShowDetailsEntry: IEntryUI;

        showDetails(entry: IEntryUI) {

            var self = this;

            self._lastShowDetailsEntry = entry;

            if (self.selectedEntry() === entry) {
                self.hideDetails();
                return;
            }

            self.hideDetails();

            var selectEntry = function (entryToSelect: IEntryUI) {

                // Allow for headless testing 
                if ($("#" + entryToSelect.id).length > 0) {
                    var top = Math.floor($("#" + entryToSelect.id).offset().top + ($("#" + entryToSelect.id).outerHeight(false)));
                    self.selectedEntryTop(top + "px");
                }

                entryToSelect.isSelected = true;
                self.selectedEntry(entryToSelect);

                console.log("Selected Entry = " + entryToSelect.lemma);
            };

            var showEntryDetails = function () {

                var matches = self.passageDetails.entries.filter(e=> e.name === entry.lemma);

                if (matches.length > 0) {
                    entry.details.data = <IDetailsEntryUI> matches[0];

                    entry.details.data.strongDefinitionParts = self.createRefParts(entry.details.data.strongDefinition);
                    entry.details.data.kjvDefinitionParts = self.createRefParts(entry.details.data.kjvDefinition);
                    entry.details.data.referencesParts = self.createRefParts(entry.details.data.references);
                    entry.details.data.strongDerivationParts = self.createRefParts(entry.details.data.strongDerivation);

                    entry.details.isFound = true;

                } else {
                    entry.details.data = null;
                    entry.details.isFound = false;
                }

                entry.details.isLoading = false;
                entry.details.isLoaded = true;
                entry.details.isVisible = true;

                selectEntry(entry);
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

                if (self.passageDetails == null) {

                    Data.Loader_Details.loadDetails((text) => {
                        setTimeout(() => {
                            if (self.passageDetails == null) {
                                self.passageDetails = Data.Parser_Details.parseDetails(text);
                            }

                            // Deal with race condition where multiple entries clicked quickly while details is still loading
                            if (entry === self._lastShowDetailsEntry) {
                                showEntryDetails();
                            }

                        }, 500);
                    });

                    selectEntry(entry);

                } else {
                    showEntryDetails();
                }
            } else {
                showEntryDetails();
            }

        }

        createRefParts(text: string): IReferencePart[] {

            var self = this;

            var regex = /([^\$]*)(\$G\d+)/mg;
            var parts: IReferencePart[] = [];
            var m: RegExpExecArray;
            var lastFoundIndex = -1;

            while (m = regex.exec(text)) {

                lastFoundIndex = regex.lastIndex;

                var t = m[1].trim();
                var reference = m[2].trim();

                if (t != "") {
                    parts.push({ isReference: false, text: t, referenceId: -1 });
                }

                if (reference != "") {

                    var refId = parseInt(/(\d+)/.exec(reference)[1]);

                    var matches = self.passageDetails.entries.filter(e=> e.id === refId);

                    if (matches.length > 0) {
                        parts.push({ isReference: true, text: matches[0].name + "(#" + refId + ")", referenceId: refId });
                    }
                }
            }

            if (regex.lastIndex >= lastFoundIndex) {
                var remaining = text.substr(regex.lastIndex);

                if (remaining != "") {
                    parts.push({ isReference: false, text: remaining, referenceId: -1 });
                }
            }

            return parts;
        }
    }

    ko.bindingHandlers["blankSpace"] = {
        init: function (element, valueAccessor, allBindings) {
            if (ko.unwrap(valueAccessor()) != null) {
                $(element).height(0);
                $(element).show();

                var targetId = allBindings["get"]("blankSpaceTargetId");
                var targetHeight = $("#" + targetId).outerHeight();

                var targetBottom = $("#" + targetId).offset().top + targetHeight;
                var parentBottom = $(element).parent().offset().top + $(element).parent().height();

                var neededRoom = targetBottom - parentBottom;

                if (neededRoom > 0) {
                    $(element).height(neededRoom + 5);
                }
            } else {
                $(element).hide();
            }
        },
        update: function (element, valueAccessor, allBindings) {
            if (ko.unwrap(valueAccessor()) != null) {
                $(element).height(0);
                $(element).show();

                var targetId = allBindings["get"]("blankSpaceTargetId");
                var targetHeight = $("#" + targetId).outerHeight();

                var targetBottom = $("#" + targetId).offset().top + targetHeight;
                var parentBottom = $(element).parent().offset().top + $(element).parent().height();

                var neededRoom = targetBottom - parentBottom;

                if (neededRoom > 0) {
                    $(element).height(neededRoom + 5);
                }
            } else {
                $(element).hide();
            }
        }
    };

}