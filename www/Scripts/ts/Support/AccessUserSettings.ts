/// <reference path="../../typings/jQuery/jQuery.d.ts" />

module Told.GreekBible.Data {

    export interface IUserSettings {
        bookChoice: string;
        chapterChoice: string;
        verseChoice: string;
    }

    export class UserSettings_LocalStorage implements IUserSettings {

        /*
         * Get User Settings from local storage provider
         *
         * @param key which setting to retrieve
         * @returns the value, or null if not found
         */
        static getUserSetting(key: string): string {
            var value = localStorage.getItem(key);
            console.log("Get User Setting:" + key + "=" + value);
            return value;
        }

        static setUserSetting(key: string, value: string) {
            localStorage.setItem(key, value);
            console.log("Set User Setting:" + key + "=" + value);
        }

        get bookChoice() { return UserSettings_LocalStorage.getUserSetting("bookChoice"); }
        set bookChoice(value: string) { UserSettings_LocalStorage.setUserSetting("bookChoice", value); }

        get chapterChoice() { return UserSettings_LocalStorage.getUserSetting("chapterChoice"); }
        set chapterChoice(value: string) { UserSettings_LocalStorage.setUserSetting("chapterChoice", value); }

        get verseChoice() { return UserSettings_LocalStorage.getUserSetting("verseChoice"); }
        set verseChoice(value: string) { UserSettings_LocalStorage.setUserSetting("verseChoice", value); }
    }
}