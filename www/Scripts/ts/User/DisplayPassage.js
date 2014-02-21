/// <reference path="../../typings/knockout/knockout.d.ts" />
/// <reference path="../Support/Colors.ts" />
/// <reference path="../Support/AccessUserSettings.ts" />
/// <reference path="MainViewModel.ts" />
/// <reference path="../Support/LoadPassageText.ts" />
/// <reference path="../Support/ParsePassageText.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (UI) {
            var MainViewModel_DisplayPassage = (function () {
                function MainViewModel_DisplayPassage(viewModel) {
                    this.passage = ko.observable(null);
                    this.book = ko.observable(null);
                    this.chapter = ko.observable(null);
                    this.hasPassageLoadingFailed = ko.observable(false);
                    this.isPassageLoaded = ko.computed({
                        read: function () {
                            var passage = this.passage();
                            return passage != null && passage.entries != null && passage.entries.length > 0;
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.isPassageLoading = ko.computed({
                        read: function () {
                            return !this.isPassageLoaded() && !this.hasPassageLoadingFailed();
                        },
                        owner: this,
                        deferEvaluation: true
                    });
                    this.viewModel = viewModel;
                    this.showDefault();
                }
                Object.defineProperty(MainViewModel_DisplayPassage.prototype, "userSettings", {
                    get: function () {
                        return this.viewModel.providers.userSettings;
                    },
                    enumerable: true,
                    configurable: true
                });

                MainViewModel_DisplayPassage.prototype.showDefault = function (onLoad, onError) {
                    // TODO: Load Last Passage (local Storage)
                    var lastBook = parseInt(this.userSettings.bookChoice);
                    var lastChapter = parseInt(this.userSettings.chapterChoice);

                    if (isNaN(lastBook) || isNaN(lastChapter)) {
                        lastBook = 1;
                        lastChapter = 1;
                    }

                    this.showPassage(lastBook, lastChapter, onLoad, onError);
                };

                MainViewModel_DisplayPassage.prototype.formatPassage = function (passage) {
                    for (var i = 0; i < passage.entries.length; i++) {
                        var e = passage.entries[i];
                        e.partOfSpeech['color'] = this.getColorA(e.partOfSpeech.partOfSpeechCode);
                        e.morph['color'] = this.getColorB(e.morph.morphCode);
                    }

                    return passage;
                };

                MainViewModel_DisplayPassage.prototype.showPassage = function (bookNumber, chapter, onLoad, onError) {
                    var self = this;

                    // Make Blank while waiting
                    self.passage([]);
                    self.hasPassageLoadingFailed(false);

                    // Set choice
                    this.userSettings.bookChoice = bookNumber.toString();
                    this.userSettings.chapterChoice = chapter.toString();
                    self.book(Told.GreekBible.Data.BookInfo.getBookName(bookNumber));
                    self.chapter(chapter);

                    // Load Async
                    Told.GreekBible.Data.Loader.loadPassage(bookNumber, chapter, function (passageText) {
                        self.passage(self.formatPassage(Told.GreekBible.Data.Parser.parsePassage(passageText)));

                        if (onLoad) {
                            onLoad();
                        }
                    }, function (errorMessage) {
                        self.hasPassageLoadingFailed(true);
                        if (onError) {
                            onError(errorMessage);
                        }
                    });
                };

                MainViewModel_DisplayPassage.prototype.getColorA = function (text) {
                    return MainViewModel_DisplayPassage.getUniqueColorA(text);
                };

                MainViewModel_DisplayPassage.prototype.getColorB = function (text) {
                    return MainViewModel_DisplayPassage.getUniqueColorB(text);
                };
                MainViewModel_DisplayPassage.getUniqueColorA = Told.GreekBible.Colors.createGetUniqueColor(150, 150);
                MainViewModel_DisplayPassage.getUniqueColorB = Told.GreekBible.Colors.createGetUniqueColor(175, 175);
                return MainViewModel_DisplayPassage;
            })();
            UI.MainViewModel_DisplayPassage = MainViewModel_DisplayPassage;

            // TODO: Move bindings to display
            ko.bindingHandlers["refreshJQM"] = {
                update: function (element, valueAccessor) {
                    console.log("refreshJQM Update:" + element.id);

                    ko.utils.unwrapObservable(valueAccessor()); // to subscribe

                    setTimeout(function () {
                        console.log("Before:Trigger Create");
                        $(element).trigger('create');
                        console.log("After:Trigger Create");

                        if ($(element).selectmenu) {
                            console.log("Before:SelectMenu Refresh");
                            $(element).selectmenu('refresh');
                            console.log("After:SelectMenu Refresh");
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
                        $(element).append(out);
                    });
                }
            };
        })(GreekBible.UI || (GreekBible.UI = {}));
        var UI = GreekBible.UI;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
