/// <reference path="AccessUserSettings.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            function createDefaultProviders() {
                return {
                    userSettings: new Told.GreekBible.Data.UserSettings_LocalStorage()
                };
            }
            Data.createDefaultProviders = createDefaultProviders;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
