/// <reference path="../Core/PassageDetails.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            var Parser_Details = (function () {
                function Parser_Details() {
                }
                Parser_Details.parseDetails = function (detailsText) {
                    var detailsRaw = JSON.parse(detailsText);
                    var entries = [];

                    for (var i = 0; i < detailsRaw.entries.length; i++) {
                        entries.push(Parser_Details.parseEntry(detailsRaw.entries[i]));
                    }

                    return { entries: entries };
                };

                Parser_Details.parseEntry = function (entryRaw) {
                    return {
                        id: parseInt(entryRaw[0]),
                        name: entryRaw[1],
                        translit: entryRaw[2],
                        pronunciation: entryRaw[3],
                        strongDefinition: entryRaw[4],
                        kjvDefinition: entryRaw[5],
                        strongDerivation: entryRaw[6],
                        references: entryRaw[7]
                    };
                };
                return Parser_Details;
            })();
            Data.Parser_Details = Parser_Details;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
