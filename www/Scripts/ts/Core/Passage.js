var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            var BookInfo = (function () {
                function BookInfo() {
                }
                BookInfo.getBookNames = function () {
                    return this.booksWithAbbreviations.map(function (b) {
                        return b.book;
                    });
                };

                BookInfo.getChapterCount = function (bookNumber) {
                    return this.booksWithAbbreviations[bookNumber - 1].chapterCount;
                };

                //static getVerseCount(bookNumber: number, chapterNumber: number) {
                //    return 100;
                //    //return this.booksWithAbbreviations[bookNumber - 1].chapterCount;
                //}
                BookInfo.getBookName = function (bookNumber) {
                    return this.booksWithAbbreviations[bookNumber - 1].book;
                };

                BookInfo.getBookNumber = function (bookName) {
                    return this.booksWithAbbreviations.filter(function (b) {
                        return b.book == bookName;
                    })[0].bookNumber;
                };

                BookInfo.booksWithAbbreviations = [
                    { bookNumber: 1, chapterCount: 28, book: "Matthew", abbreviations: ["Mt", "Matt"] },
                    { bookNumber: 2, chapterCount: 16, book: "Mark", abbreviations: ["Mk", "Mrk", "Mr"] },
                    { bookNumber: 3, chapterCount: 24, book: "Luke", abbreviations: ["Lk", "Luk"] },
                    { bookNumber: 4, chapterCount: 21, book: "John", abbreviations: ["Jn", "John", "Jhn"] },
                    { bookNumber: 5, chapterCount: 28, book: "Acts", abbreviations: ["Ac", "Acts", "Act"] },
                    { bookNumber: 6, chapterCount: 16, book: "Romans", abbreviations: ["Rm", "Rom", "Ro"] },
                    { bookNumber: 7, chapterCount: 16, book: "1 Corinthians", abbreviations: ["1Co", "1 Cor", "1 Co", "I Co", "I Cor", "1Cor", "I Corinthians", "1Corinthians", "1st Corinthians", "First Corinthians", "Cor1"] },
                    { bookNumber: 8, chapterCount: 13, book: "2 Corinthians", abbreviations: ["2Co", "2 Cor", "2 Co", "II Co", "II Cor", "2Cor", "II Corinthians", "2Corinthians", "2nd Corinthians", "Second Corinthians", "Cor2"] },
                    { bookNumber: 9, chapterCount: 6, book: "Galatians", abbreviations: ["Ga", "Gal"] },
                    { bookNumber: 10, chapterCount: 6, book: "Ephesians", abbreviations: ["Eph", "Ephes"] },
                    { bookNumber: 11, chapterCount: 4, book: "Philippians", abbreviations: ["Php", "Phil"] },
                    { bookNumber: 12, chapterCount: 4, book: "Colossians", abbreviations: ["Col"] },
                    { bookNumber: 13, chapterCount: 5, book: "1 Thessalonians", abbreviations: ["1Th", "1 Thess", "1 Th", "I Th", "I Thes", "1Thes", "I Thess", "1Thess", "I Thessalonians", "1Thessalonians", "1st Thessalonians", "First Thessalonians", "Thess1"] },
                    { bookNumber: 14, chapterCount: 3, book: "2 Thessalonians", abbreviations: ["2Th", "2 Thess", "2 Th", "II Th", "II Thes", "2Thes", "II Thess", "2Thess", "II Thessalonians", "2Thessalonians", "2nd Thessalonians", "Second Thessalonians", "Thess2"] },
                    { bookNumber: 15, chapterCount: 6, book: "1 Timothy", abbreviations: ["1Tm", "1 Tim", "1 Ti", "I Ti", "1Ti", "I Tim", "1Tim", "I Timothy", "1Timothy", "1st Timothy", "First Timothy", "Tim1"] },
                    { bookNumber: 16, chapterCount: 4, book: "2 Timothy", abbreviations: ["2Tm", "2 Tim", "2 Ti", "II Ti", "2Ti", "II Tim", "2Tim", "II Timothy", "2Timothy", "2nd Timothy", "Second Timothy", "Tim2"] },
                    { bookNumber: 17, chapterCount: 3, book: "Titus", abbreviations: ["Ti", "Titus", "Tit"] },
                    { bookNumber: 18, chapterCount: 1, book: "Philemon", abbreviations: ["Phm", "Phlm", "Philem"] },
                    { bookNumber: 19, chapterCount: 13, book: "Hebrews", abbreviations: ["Heb", "Hebrews"] },
                    { bookNumber: 20, chapterCount: 5, book: "James", abbreviations: ["Jms", "James", "Jas", "Jm"] },
                    { bookNumber: 21, chapterCount: 5, book: "1 Peter", abbreviations: ["1Pt", "1 Pet", "1 Pe", "I Pe", "1Pe", "I Pet", "1Pet", "I Pt", "1 Pt", "I Peter", "1Peter", "1st Peter", "First Peter", "Pet1"] },
                    { bookNumber: 22, chapterCount: 3, book: "2 Peter", abbreviations: ["2Pt", "2 Pet", "2 Pe", "II Pe", "2Pe", "II Pet", "2Pet", "II Pt", "2 Pt", "II Peter", "2Peter", "2nd Peter", "Second Peter", "Pet2"] },
                    { bookNumber: 23, chapterCount: 5, book: "1 John", abbreviations: ["1Jn", "1 John", "1 Jn", "I Jn", "I Jo", "1Jo", "I Joh", "1Joh", "I Jhn", "1 Jhn", "1Jhn", "I John", "1John", "1st John", "First John", "John1"] },
                    { bookNumber: 24, chapterCount: 1, book: "2 John", abbreviations: ["2Jn", "2 John", "2 Jn", "II Jn", "II Jo", "2Jo", "II Joh", "2Joh", "II Jhn", "2 Jhn", "2Jhn", "II John", "2John", "2nd John", "Second John", "John2"] },
                    { bookNumber: 25, chapterCount: 1, book: "3 John", abbreviations: ["3Jn", "3 John", "3 Jn", "III Jn", "III Jo", "3Jo", "III Joh", "3Joh", "III Jhn", "3 Jhn", "3Jhn", "III John", "3John", "3rd John", "Third John", "John3"] },
                    { bookNumber: 26, chapterCount: 1, book: "Jude", abbreviations: ["Jd", "Jude", "Jud"] },
                    { bookNumber: 27, chapterCount: 22, book: "Revelation", abbreviations: ["Rv", "Rev", "Re", "The Revelation"] }
                ];
                return BookInfo;
            })();
            Data.BookInfo = BookInfo;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
