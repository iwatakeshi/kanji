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
            onyomi: ["イチ", "イツ"],
            kunyomi: ["ひと", "ひとつ"],
            example: [{
                ex: "一月のたんじょう日で、一つ年をとった。",
                ruby: ["いちがつ", "び", "ひと", "とし"]
            }, {
                ex: "きんぎょが、一ぴきおよいでいます。",
                ruby: ["いっ"]
            }, {
                ex: "かけっこで、一等になりました。",
                ruby: ["いっとう"]
            }, {
                ex: "おんどを一定にする。",
                ruby: ["いってい"]
            }]
        }, {
            character: "右",
            romaji: "migi",
            meaning: ["right"],
            onyomi: ["ウ", "ユウ"],
            kunyomi: ["みぎ"],
            example: [{
                ex: "右手ではしをもつ。",
                ruby: ["みぎて"]
            }, {
                ex: "右側のページ。",
                ruby: ["みぎがわ"]
            }, {
                ex: "おうだんほどうでは、左右をよく見ましょう。",
                ruby: ["さゆう", "み"]
            }, {
                ex: "しんごうを右折〈＝右にまがること）すると、がっこうがある。",
                ruby: ["うせつ", "みぎ"]
            }, {
                ex: "わたしは右ききです。",
                ruby: ["みぎ"]
            }]
        }, {
            character: "雨",
            romaji: "ame",
            meaning: ["rain"],
            onyomi: ["ウ"],
            kunyomi: ["あま", "あめ"],
            example: [{
                ex: "雨がざあざあふる。",
                ruby: ["あめ"]
            }, {
                ex: "木の下で雨宿りをする。",
                ruby: ["き", "した", "あまやどり"]
            }, {
                ex: "風雨がはげしくなってきた。",
                ruby: ["ふうう"]
            }, {
                ex: "梅雨に入ってから、雨ふりの日がつづいている。",
                ruby: ["つゆ", "はい", "あめ", "ひ"]
            }]

        }, {
            character: "円",
            romaji: "en",
            meaning: ["round", "yen", "circle"],
            onyomi: ["えん"],
            kunyomi: ["まる‐い"],
            example: [{
                ex: "円いパンをやく。",
                ruby: ["まる"]
            }, {
                ex: "コンパスで円をかく。",
                ruby: ["えん"]
            },{
                ex: "はなしあって円満にかいけつしよう。",
                ruby:["えんまん"]
            },{
                ex:"百円でアイスクリームを買いました。",
                ruby:["ひゃく","か"]
            },{
                ex:"円高（＝日本のお金のかちがあがること）になる。",
                ruby:["えんだか","にほん","かね"]
            }]

        }, {
            character: "王",
            romaji: "ou",
            meaning: ["king","monarch", "sovereign","potentate"],
            onyomi: ["おう"],
            kunyomi: [],
            example: [{
                ex: "王さまは、みんなのことをかんがえていました。",
                ruby: ["おう"]
            },
            {
                ex:"かれは、Jリーグでとくてん王になった。",
                ruby:["ジェー","おう"]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
            character: "",
            romaji: "",
            meaning: [""],
            onyomi: [""],
            kunyomi: [""],
            example: [{
                ex: "",
                ruby: [""]
            }]

        }, {
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