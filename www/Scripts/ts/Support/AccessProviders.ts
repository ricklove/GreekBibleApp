/// <reference path="AccessUserSettings.ts" />


module Told.GreekBible.Data {

    export interface IProviders {
        userSettings: IUserSettings;
    }

    export function createDefaultProviders() {
        return {
            userSettings: new UserSettings_LocalStorage(),
        };
    }

}