﻿/// <reference path="../Core/Passage.ts" />
/// <reference path="000_MainViewModel.ts" />


module Told.GreekBible.UI {

    export interface IPassageVersesUI {
        verses: IVerseUI[];
        allEntries: IEntryUI[];
    }

    export interface IVerseUI {
        passageRef: Data.IPassageRef;
        verseWrapperClassName: string;

        entries: IEntryUI[];
    }

    export interface IPassageUI extends Data.IPassage {
        entries: IEntryUI[];
    }

    export interface IEntryUI extends Data.IEntry {
        partOfSpeech: IPartOfSpeechUI;
        morph: IMorphUI;

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
        isLoaded: boolean;
        isLoading: boolean;
        isVisible: boolean;

        definition: string;
    }
}