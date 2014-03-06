/// <reference path="../../typings/jQuery/jQuery.d.ts" />

module Told.GreekBible.Data {

    export class Loader_Details {

        static baseUrl: string = "";

        static loadDetails(onLoaded: (text: string) => void, onError?: (text: string) => void) {

            var filename = "strongsGreek.compacted.json.txt";

            var url = this.baseUrl + "Data/" + filename;

            $.ajax(url,
                {
                    dataType: "text",
                    cache: true,
                    success: function (data: any) { onLoaded(data); },
                    error: function (data: any) { if (onError) { onError(data); } }
                });

        }

    }
}