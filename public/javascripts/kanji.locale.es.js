// kanji.js locale configuration
// grade: second
// author: Takeshi Iwana
// All Kanji are ordered by number of strokes
// Kanji and examples are from: Shogakusei no Shin Reinbo- Kanji Yomi Kaki Jiten
// Amazon URL: http://goo.gl/7qwaMY
/*jslint node: true, forin: true, white: true, newcap: true*/
/*jslint browser:true */
/*global define*/

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        define(['kanji'], factory); // AMD
    } else if (typeof exports === 'object') {
        module.exports = factory(require('./kanji')); // Node
    } else {
        factory((typeof global !== 'undefined' ? global : this).kanji); // node or other global
    }
}(function(kanji) {
    return kanji.defineLocale('es', {
        "grade": {
            "first": [{
                character: "一",
                meaning: ["uno"]
            }, {
                character: "右",
                meaning: ["derecho"]

            }, {
                character: "雨",
                meaning: ['lluvia']
            }, {
                character: "円",
                meaning: ["redondo", "yen", "círculo"]
            }, {
                character: "王",
                meaning: ["rey", "monarca", "soberano", "potentado"]
            }]
        }
    });
}));