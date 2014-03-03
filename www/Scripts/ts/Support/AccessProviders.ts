/// <reference path="AccessUserSettings.ts" />


module Told.GreekBible.Data {

    export interface IProviders {
        userSettings: IUserSettings;
        config: IConfig;
    }

    export interface IConfig {
        minTimeForLoadingMessage: number;
    }

    export function createDefaultProviders() {
        return {
            userSettings: new UserSettings_LocalStorage(),
            config: { minTimeForLoadingMessage: 500 },
        };
    }

}