/// <reference path="../Core/Passage.ts" />
/// <reference path="000_MainViewModel.ts" />


module Told.GreekBible.UI {

    export interface IPassageUI extends Data.IPassage {
        entries: IEntryUI[];
    }

    export interface IEntryUI extends Data.IEntry {
        partOfSpeech: IPartOfSpeechUI;
        morph: IMorphUI;

        verseWrapperClassName: string;

        isSelected: boolean;

        details: IEntryDetailsUI;
    }

    export interface IPartOfSpeechUI extends Data.IPartOfSpeech {
        color: string;
    }

    export interface IMorphUI extends Data.IMorph {
        color: string;
    }

    export interface IEntryDetailsUI {
        isVisible: boolean;
        definition: string;
    }
}