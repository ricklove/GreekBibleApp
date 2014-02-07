module Told.GreekBible.Data {

    export interface IPassage {
        entries: IEntry[];
    }

    export interface IEntry {
        passageRef: IPassageRef;
        morph: IMorph;
        partOfSpeech: IPartOfSpeech;
        rawText: string;
        lemma: string;
    }

    export interface IPassageRef {
        bookIndex: number;
        chapter: number;
        verse: number;
    }

    export interface IMorph {
        morphCode: string;

        mPerson: string;
        mTense: string;
        mVoice: string;
        mMood: string;
        mCase: string;
        mNumber: string;
        mGender: string;
        mDegree: string;
    }

    export interface IPartOfSpeech {
        partOfSpeechCode: string;

        mainPart: string;
        secondPart: string;
    }

}