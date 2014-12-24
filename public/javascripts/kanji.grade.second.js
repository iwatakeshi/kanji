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
    return kanji.defineKanji('second', {
        //kanji are ordered by the number of strokes.
        //The source of these come from Rainbow Kaji Jishou
        "kanji": [{
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }]
    });
}));