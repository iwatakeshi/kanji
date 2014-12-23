// kanji.js kanji configuration
// grade: first
// author : Werner Mollentze : https://github.com/wernerm
/*jslint node: true, forin: true, white: true, newcap: true*/
/*jslint browser:true */
/*global define*/

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['kanji'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('.kanji')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).kanji); // node or other global
    }
}(function(kanji) {
    return kanji.defineKanji('first', {
        //kanji are ordered by the number of strokes.
        //The source of these come from Rainbow Kaji Jishou
        "kanji": [{
                character: "一",
                romaji: "ichi",
                meaning: ["one"],
                on: ["イチ", "イツ"],
                kun: ["ひと", "ひとつ"],
                example: [
                    "一月のたんじょう日で、一つ年をとった。",
                    "きんぎょが、一ぴきおよいでいます。",
                    "かけっこで、一等になりました。",
                    "おんどをいっていにする。"
                ]
            }, {
                character:"右",
                romaji:"migi",
                meaning:["right"],
                on:["ウ","ユウ"],
                kun:["みぎ"],
                example:[
                    "右手ではしをもつ。",
                    "右側のページ。",
                    "おうだんほどうでは、左右をよく見ましょう。",
                    "しんごうを右折〈＝右にまがること）すると、がっこうがある。",
                    "わたしは右ききです。"
                ]
            }
        ]
    });
}));