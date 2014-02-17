/// <reference path="../Core/Passage.ts" />

module Told.GreekBible.Data {

    interface IEntryLine {
        rawLine: string;
        bookChapterVerseCode: string;
        hasChanged_BookChapterVerseCode: boolean;
        partOfSpeechCode: string;
        morphCode: string;
        oldMorphCode: string;
        rawText: string;
        word: string;
        normalizedWord: string;
        lemma: string;
    }

    export class Parser {

        static parsePassage(passageText: string): IPassage {

            var lines = passageText.replace("\r\n", "\n").split("\n");
            var lineData: IEntryLine[] = [];

            var lastBookChapterVerseCode = null;

            for (var iLine = 0; iLine < lines.length; iLine++) {
                var line = lines[iLine].trim();

                if (line.trim() == "") {
                    // Skip blank lines
                    continue;
                }

                // 7 Columns: 200101 N- ----NSM- Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος
                // 8 Columns: 200101 N- ----NSM- N-NSM Ἰάκωβος Ἰάκωβος Ἰάκωβος Ἰάκωβος

                //Columns
                //-------
                // * book/chapter/verse
                // * part of speech
                // * parsing code
                // * [old parsing code]
                // * text (including punctuation)
                // * word (with punctuation stripped)
                // * normalized word
                // * lemma

                //Parsing Code
                //------------
                // * person
                // * tense
                // * voice
                // * mood
                // * case
                // * number
                // * gender
                // * degree

                // use 8 column format
                var lineRegex = /(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)/;
                var m = line.match(lineRegex);

                var newEntryLine: IEntryLine = null;

                if (m) {
                    newEntryLine = {
                        rawLine: line,
                        bookChapterVerseCode: m[1],
                        hasChanged_BookChapterVerseCode: (m[1] !== lastBookChapterVerseCode),
                        partOfSpeechCode: m[2],
                        morphCode: m[3],
                        oldMorphCode: m[4],
                        rawText: m[5],
                        word: m[6],
                        normalizedWord: m[7],
                        lemma: m[8]
                    };

                } else {

                    // Use 7 column format
                    var lineRegex = /(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)\s(\S+)/;
                    var m = line.match(lineRegex);

                    if (m) {
                        newEntryLine = {
                            rawLine: line,
                            bookChapterVerseCode: m[1],
                            hasChanged_BookChapterVerseCode: (m[1] !== lastBookChapterVerseCode),
                            partOfSpeechCode: m[2],
                            morphCode: m[3],
                            oldMorphCode: null,
                            rawText: m[4],
                            word: m[5],
                            normalizedWord: m[6],
                            lemma: m[7]
                        };

                    }
                }

                lineData.push(newEntryLine);

                lastBookChapterVerseCode = newEntryLine.bookChapterVerseCode;

            }

            var entries = lineData.map(l=> Parser.parseEntry(l));

            var passage: IPassage = { entries: entries };

            return passage;
        }

        private static parseEntry(entryLine: IEntryLine): IEntry {

            var getPassageRef = function (bookChapterVerseCode): IPassageRef {

                var parseCode = function (text) {
                    if (text[0] == "0") {
                        return parseInt(text[1]);
                    } else {
                        return parseInt(text);
                    }
                }

				var bcvRegex = /([0-9]{2})([0-9]{2})([0-9]{2})/;
                var bcvMatch = bookChapterVerseCode.match(bcvRegex);
                var bookNumber = parseCode(bcvMatch[1]);
                var chapter = parseCode(bcvMatch[2]);
                var verse = parseCode(bcvMatch[3]);

                return {
                    bookNumber: bookNumber,
                    chapter: chapter,
                    verse: verse
                };
            }

			var passageRef = getPassageRef(entryLine.bookChapterVerseCode);

            var getMorphPerson = function (code) {
                return code == "" ? null :
                    code == "1" ? "1st" :
                    code == "2" ? "2nd" :
                    code == "3" ? "3rd" :
                    code == "-" ? null : "PERSON?:" + code;
            }

				var getMorphTense = function (code) {
                return code == "" ? null :
                    code == "A" ? "Aorist" :
                    code == "P" ? "Present" :
                    code == "F" ? "Future" :
                    code == "X" ? "Perfect" :
                    code == "I" ? "Imperfect" :
                    code == "-" ? null : "TENSE?:" + code;
            }

				var getMorphVoice = function (code) {
                return code == "" ? null :
                    code == "A" ? "Active" :
                    code == "P" ? "Passive" :
                    code == "M" ? "Middle" :
                    code == "-" ? null : "VOICE?:" + code;
            }

				var getMorphMood = function (code) {
                return code == "" ? null :
                    code == "N" ? "Infinitive" :
                    code == "S" ? "Subjunctive" :
                    code == "P" ? "Participle" :
                    code == "I" ? "Indicative" :
                    code == "D" ? "Imperative" : // D for Demand?
                    code == "-" ? null : "MOOD?:" + code;
            }

				var getMorphCase = function (code) {
                return code == "" ? null :
                    code == "N" ? "Nominative" :
                    code == "G" ? "Genitive" :
                    code == "D" ? "Dative" :
                    code == "A" ? "Accusative" :
                    code == "V" ? "Vocative" :
                    code == "-" ? null : "CASE?:" + code;
            }

				var getMorphNumber = function (code) {
                return code == "" ? null :
                    code == "S" ? "Singular" :
                    code == "P" ? "Plural" :
                    code == "-" ? null : "NUMBER?:" + code;
            }

				var getMorphGender = function (code) {
                return code == "" ? null :
                    code == "M" ? "Masculine" :
                    code == "F" ? "Feminine" :
                    code == "N" ? "Neuter" :
                    code == "-" ? null : "GENDER?:" + code;
            }

				var getMorphDegree = function (code) {
                return code == "" ? null :
                    code == "C" ? "Comparative" :
                    code == "S" ? "Superlative" :
                    code == "-" ? null : "DEGREE?:" + code;
            }

				var morph: IMorph = {
                morphCode: entryLine.morphCode,
                mPerson: getMorphPerson(entryLine.morphCode[0]),
                mTense: getMorphTense(entryLine.morphCode[1]),
                mVoice: getMorphVoice(entryLine.morphCode[2]),
                mMood: getMorphMood(entryLine.morphCode[3]),
                mCase: getMorphCase(entryLine.morphCode[4]),
                mNumber: getMorphNumber(entryLine.morphCode[5]),
                mGender: getMorphGender(entryLine.morphCode[6]),
                mDegree: getMorphDegree(entryLine.morphCode[7])
            };

            var getPartOfSpeechMainPart = function (code) {
                return code == "" ? null :
                    code == "N" ? "Noun" :
                    code == "V" ? "Verb" :
                    code == "A" ? "Adjective" :
                    code == "D" ? "Adverb" :
                    code == "C" ? "Conjunction" :
                    code == "P" ? "Preposition" :
                    code == "R" ? "Pronoun" :
                    code == "I" ? "Interjection" :
                    code == "X" ? "Particle" :
                    code == "-" ? null : "PartOfSpeech-Main?:" + code;
            }

				var getPartOfSpeechSecondPart = function (code) {
                return code == "" ? null :
                    code == "A" ? "Article" :
                    code == "I" ? "Indefinite" :
                    code == "P" ? "Possesive" :
                    code == "D" ? "Demonstrative" :
                    code == "R" ? "Relative" :
                    code == "-" ? null : "PartOfSpeech-Second?:" + code;
            }

				var partOfSpeech: IPartOfSpeech = {
                partOfSpeechCode: entryLine.partOfSpeechCode,

                mainPart: getPartOfSpeechMainPart(entryLine.partOfSpeechCode[0]),
                secondPart: getPartOfSpeechSecondPart(entryLine.partOfSpeechCode[1])
            };

            var entry: IEntry = {
                passageRef: passageRef,
                isVerseStart: entryLine.hasChanged_BookChapterVerseCode,
                morph: morph,
                partOfSpeech: partOfSpeech,
                rawText: entryLine.rawText,
                lemma: entryLine.lemma
            };

            return entry;
        }
    }
}