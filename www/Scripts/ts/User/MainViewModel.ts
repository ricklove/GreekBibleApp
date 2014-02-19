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

    var dustTemplatesCache = [];
    declare var dust: any;

    ko.bindingHandlers["dustTemplate"] = <KnockoutBindingHandler>{
        update: function (element, valueAccessor) {

            console.log("dustTemplate:" + element);

            var templateText = $(element).text();
            var templateId = 'ID' + dustTemplatesCache.length;

            if (dustTemplatesCache[templateId] == null) {

                var compiledTemplate = dust.compile(templateText, templateId);
                dustTemplatesCache[templateId] = compiledTemplate;
                dust.loadSource(compiledTemplate);
            }

            var simpleData = ko.toJS(valueAccessor());

            dust.render(templateId, simpleData, function (err, out) {
                $(element).append(out);
            })

                ////return "<div id='dustPlaceholder'>Loading...</div>";
                //return ko.utils.parseHtmlFragment(output);
        }
    };
}