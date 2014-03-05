/// <reference path="000_MainViewModel.ts" />
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
                };
                return MainViewModel_DisplayEntryDetails;
            })();
            UI.MainViewModel_DisplayEntryDetails = MainViewModel_DisplayEntryDetails;
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
