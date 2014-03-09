module Told.GreekBible.Data {

    export interface IPassageDetails {
        entries: IDetailsEntry[]
    }

    export interface IDetailsEntry {
        id: number;
        name: string;
        translit: string;
        pronunciation: string;
        strongDefinition: string;
        kjvDefinition: string;
        strongDerivation: string;
        references: string;
    }
}