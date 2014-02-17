/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="DisplayPassage.ts" />
/// <reference path="ChoosePassage.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        displayPassage = new MainViewModel_DisplayPassage(this);
        choosePassage = new MainViewModel_ChoosePassage(this);
    }

    ko.bindingHandlers["refreshJQM"] = <KnockoutBindingHandler>{
        update: function (element, valueAccessor) {
            console.log("refreshJQM Update:" + element.id);

            ko.utils.unwrapObservable(valueAccessor()); // to subscribe

            setTimeout(function () {
                console.log("Before:Trigger Create");
                $(element).trigger('create');
                console.log("After:Trigger Create");

                if ((<any>$(element)).selectmenu) {
                    console.log("Before:SelectMenu Refresh");
                    (<any>$(element)).selectmenu('refresh');
                    console.log("After:SelectMenu Refresh");
                }
            }, 0);
        }
    };
}