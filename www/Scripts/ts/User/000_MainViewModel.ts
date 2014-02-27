/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/AccessProviders.ts" />
/// <reference path="001_DisplayPassage.ts" />
/// <reference path="002_ChangePassage.ts" />
/// <reference path="003_DisplayEntryColorCoding.ts" />

module Told.GreekBible.UI {

    export class MainViewModel {

        public providers: Data.IProviders;
        public displayPassage: MainViewModel_DisplayPassage;
        public changePassage: MainViewModel_ChangePassage;
        public displayEntryColorCoding: MainViewModel_DisplayEntryColorCoding;

        constructor(providers?: Data.IProviders) {

            if (providers == null) {
                providers = Data.createDefaultProviders();
            }

            this.providers = providers;

            this.displayEntryColorCoding = new MainViewModel_DisplayEntryColorCoding(this);
            this.displayPassage = new MainViewModel_DisplayPassage(this);
            this.changePassage = new MainViewModel_ChangePassage(this);
        }
    }

    ko.bindingHandlers["refreshJQM"] = <KnockoutBindingHandler>{
        update: function (element, valueAccessor) {
            console.log("refreshJQM Update:" + element.id);

            ko.utils.unwrapObservable(valueAccessor()); // to subscribe

            setTimeout(function () {
                try {
                    console.log("Before:Trigger Create");
                    $(element).trigger('create');
                    console.log("After:Trigger Create");

                    if ((<any>$(element)).selectmenu) {
                        console.log("Before:SelectMenu Refresh");
                        (<any>$(element)).selectmenu('refresh');
                        console.log("After:SelectMenu Refresh");
                    }
                } catch (error) { }

            }, 0);
        }
    };

    var dustTemplatesCache = [];
    declare var dust: any;

    ko.bindingHandlers["dustTemplate"] = <KnockoutBindingHandler>{
        init: function (element, valueAccessor) {

            var templateText = $(element).html();
            var templateId = element.id;

            if (templateId == null || templateId == "") {
                templateId = element.id = 'DUST_ID' + dustTemplatesCache.length;
            }

            console.log("dustTemplate init:" + templateId);

            if (dustTemplatesCache[templateId] == null) {
                var compiledTemplate = dust.compile(templateText, templateId);
                dustTemplatesCache[templateId] = compiledTemplate;
                dust.loadSource(compiledTemplate);
            }

            var simpleData = ko.toJS(ko.unwrap(valueAccessor()));

            $(element).text("");
            dust.render(templateId, simpleData, function (err, out) {
                console.log("dustTemplate render:" + templateId);
                $(element).append(out);
            })
        },
        update: function (element, valueAccessor) {

            var templateId = element.id;
            console.log("dustTemplate update:" + templateId);

            var simpleData = ko.toJS(ko.unwrap(valueAccessor()));

            $(element).text("");
            dust.render(templateId, simpleData, function (err, out) {
                console.log("dustTemplate render:" + templateId);
                $(element).append(out);
            })
        }
    };
}