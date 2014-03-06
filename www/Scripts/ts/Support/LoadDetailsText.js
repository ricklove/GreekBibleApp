/// <reference path="../../typings/jQuery/jQuery.d.ts" />
var Told;
(function (Told) {
    (function (GreekBible) {
        (function (Data) {
            var Loader_Details = (function () {
                function Loader_Details() {
                }
                Loader_Details.loadDetails = function (onLoaded, onError) {
                    var filename = "strongsGreek.compacted.json.txt";

                    var url = this.baseUrl + "Data/" + filename;

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
                Loader_Details.baseUrl = "";
                return Loader_Details;
            })();
            Data.Loader_Details = Loader_Details;
        })(GreekBible.Data || (GreekBible.Data = {}));
        var Data = GreekBible.Data;
    })(Told.GreekBible || (Told.GreekBible = {}));
    var GreekBible = Told.GreekBible;
})(Told || (Told = {}));
