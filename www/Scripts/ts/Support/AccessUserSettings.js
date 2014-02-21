/// <reference path="../../typings/jQuery/jQuery.d.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            var UserSettings_LocalStorage = (function () {
                function UserSettings_LocalStorage() {
                }
                /*
                * Get User Settings from local storage provider
                *
                * @param key which setting to retrieve
                * @returns the value, or null if not found
                */
                UserSettings_LocalStorage.getUserSetting = function (key) {
                    var value = localStorage.getItem(key);
                    console.log("Get User Setting:" + key + "=" + value);
                    return value;
                };

                UserSettings_LocalStorage.setUserSetting = function (key, value) {
                    localStorage.setItem(key, value);
                    console.log("Set User Setting:" + key + "=" + value);
                };

                Object.defineProperty(UserSettings_LocalStorage.prototype, "bookChoice", {
                    get: function () {
                        return UserSettings_LocalStorage.getUserSetting("bookChoice");
                    },
                    set: function (value) {
                        UserSettings_LocalStorage.setUserSetting("bookChoice", value);
                    },
                    enumerable: true,
                    configurable: true
                });

                Object.defineProperty(UserSettings_LocalStorage.prototype, "chapterChoice", {
                    get: function () {
                        return UserSettings_LocalStorage.getUserSetting("chapterChoice");
                    },
                    set: function (value) {
                        UserSettings_LocalStorage.setUserSetting("chapterChoice", value);
                    },
                    enumerable: true,
                    configurable: true
                });
                return UserSettings_LocalStorage;
            })();
            Data.UserSettings_LocalStorage = UserSettings_LocalStorage;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
