/// <reference path="../../typings/jQuery/jQuery.d.ts" />
/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/AccessProviders.ts" />
/// <reference path="_Model.ts" />
/// <reference path="001_DisplayPassage.ts" />
/// <reference path="002_ChangePassage.ts" />
/// <reference path="003_DisplayEntryColorCoding.ts" />
/// <reference path="004_DisplayEntryDetails.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel = (function () {
                function MainViewModel(providers) {
                    if (providers == null) {
                        providers = Told.GreekBible.Data.createDefaultProviders();
                    }

                    this.providers = providers;

                    this.displayEntryColorCoding = new Told.GreekBible.UI.MainViewModel_DisplayEntryColorCoding(this);
                    this.displayPassage = new Told.GreekBible.UI.MainViewModel_DisplayPassage(this);

                    this.changePassage = new Told.GreekBible.UI.MainViewModel_ChangePassage(this);

                    this.displayEntryDefinition = new Told.GreekBible.UI.MainViewModel_DisplayEntryDetails(this);
                }
                return MainViewModel;
            })();
            UI.MainViewModel = MainViewModel;

            ko.bindingHandlers["refreshJQM"] = {
                update: function (element, valueAccessor) {
                    console.log("refreshJQM Update:" + element.id);

                    ko.utils.unwrapObservable(valueAccessor()); // to subscribe

                    setTimeout(function () {
                        try  {
                            console.log("Before:Trigger Create");
                            $(element).trigger('create');
                            console.log("After:Trigger Create");

                            if ($(element).selectmenu) {
                                console.log("Before:SelectMenu Refresh");
                                $(element).selectmenu('refresh');
                                console.log("After:SelectMenu Refresh");
                            }
                        } catch (error) {
                        }
                    }, 0);
                }
            };

            var dustTemplatesCache = [];

            ko.bindingHandlers["dustTemplate"] = {
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
                    });
                },
                update: function (element, valueAccessor) {
                    var templateId = element.id;
                    console.log("dustTemplate update:" + templateId);

                    var simpleData = ko.toJS(ko.unwrap(valueAccessor()));

                    $(element).text("");
                    dust.render(templateId, simpleData, function (err, out) {
                        console.log("dustTemplate render:" + templateId);

                        // Build dom offscreen first
                        var outDom = $(out);

                        $(element).append(outDom);
                    });
                }
            };
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
