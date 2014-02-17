/// <reference path="../../typings/jQuery/jQuery.d.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            var Loader = (function () {
                function Loader() {
                }
                Loader.loadPassage = function (bookNumber, chapter, onLoaded, onError) {
                    var pBookNumber = ('0' + bookNumber).slice(-2);
                    var pChapter = ('0' + chapter).slice(-2);

                    var url = this.baseUrl + "Data/Chapters/" + pBookNumber + pChapter + ".txt";

                    $.ajax(url, {
                        dataType: "text",
                        cache: true,
                        success: function (data) {
                            onLoaded(data);
                        },
                        error: function (data) {
                            if (onError) {
                                onError(data);
                            }
                        }
                    });
                };
                Loader.baseUrl = "";
                return Loader;
            })();
            Data.Loader = Loader;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
