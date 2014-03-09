/// <reference path="../Core/PassageDetails.ts" />

module Told.GreekBible.Data {

    interface IPassageDetailsRaw {
        entries: string[][];
    }

    export class Parser_Details {

        static parseDetails(detailsText: string): IPassageDetails {

            var detailsRaw = <IPassageDetailsRaw> JSON.parse(detailsText);
            var entries: IDetailsEntry[] = [];

            for (var i = 0; i < detailsRaw.entries.length; i++) {
                entries.push(Parser_Details.parseEntry(detailsRaw.entries[i]));
            }

            return { entries: entries };
        }

        static parseEntry(entryRaw: string[]): IDetailsEntry {
            return {
                id: parseInt(entryRaw[0]),
                name: entryRaw[1],
                translit: entryRaw[2],
                pronunciation: entryRaw[3],
                strongDefinition: entryRaw[4],
                kjvDefinition: entryRaw[5],
                strongDerivation: entryRaw[6],
                references: entryRaw[7],
            };
        }
    }
}