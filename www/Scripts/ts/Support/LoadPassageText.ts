﻿/// <reference path="../../typings/jQuery/jQuery.d.ts" />

module Told.GreekBible.Data {

    export class Loader {

        static baseUrl: string = "";

        static loadPassage(bookNumber: number, chapter: number, onLoaded: (text: string) => void, onError?: (text: string) => void) {

            var pBookNumber = ('0' + bookNumber).slice(-2);
            var pChapter = ('0' + chapter).slice(-2);

            var url = this.baseUrl + "Data/Chapters/" + pBookNumber + pChapter + ".txt";

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