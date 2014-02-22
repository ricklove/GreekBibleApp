/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/AccessProviders.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChangePassage.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        public providers: Data.IProviders;
        public displayPassage: MainViewModel_DisplayPassage;
        public changePassage: MainViewModel_ChangePassage;

        constructor(providers?: Data.IProviders) {

            if (providers == null) {
                providers = Data.createDefaultProviders();
            }

            this.providers = providers;
            this.displayPassage = new MainViewModel_DisplayPassage(this);
            this.changePassage = new MainViewModel_ChangePassage(this);
        }
    }


}