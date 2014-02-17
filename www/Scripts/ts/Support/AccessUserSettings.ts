/// <reference path="../../typings/jQuery/jQuery.d.ts" />

module Told.GreekBible.Data {

    export class AccessUserSettings {

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

    }
}