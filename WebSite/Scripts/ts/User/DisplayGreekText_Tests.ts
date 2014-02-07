/// <reference path="../../typings/qunit/qunit.d.ts" />
/// <reference path="DisplayGreekText.ts" />

module Told.GreekBible.UI.Tests {

    test("will load first word from Sample - James 1", function () {
        var obj = new PassageViewModel();

        obj.loadSample();

        var result = obj.passage.words[0].text;

        equal(result, "Ἰάκωβος", "The first word should be Ἰάκωβος");
    });


}