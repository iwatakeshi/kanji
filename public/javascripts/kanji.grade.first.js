// kanji.js kanji configuration
// grade: first
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
    return kanji.defineKanji('first', {
        "kanji": [{
            character: "一",
            romaji: "ichi",
            meaning: ["one"],
            onyomi: ["イチ", "イツ"],
            kunyomi: ["ひと", "ひと‐つ"],
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
            onyomi: ["エン"],
            kunyomi: ["まる‐い"],
            example: [{
                ex: "円いパンをやく。",
                ruby: ["まる"]
            }, {
                ex: "コンパスで円をかく。",
                ruby: ["えん"]
            }, {
                ex: "はなしあって円満にかいけつしよう。",
                ruby: ["えんまん"]
            }, {
                ex: "百円でアイスクリームを買いました。",
                ruby: ["ひゃく", "か"]
            }, {
                ex: "円高（＝日本のお金のかちがあがること）になる。",
                ruby: ["えんだか", "にほん", "かね"]
            }]

        }, {
            character: "王",
            romaji: "ou",
            meaning: ["king", "monarch", "sovereign", "potentate"],
            onyomi: ["オウ"],
            kunyomi: [],
            example: [{
                ex: "王さまは、みんなのことをかんがえていました。",
                ruby: ["おう"]
            }, {
                ex: "かれは、Jリーグでとくてん王になった。",
                ruby: ["ジェー", "おう"]
            }]

        }, {
            character: "音",
            romaji: "oto",
            meaning: ["sound", "noise", "note"],
            onyomi: ["オン", "イン"],
            kunyomi: ["おと", "ね"],
            example: [{
                ex: "足音がきこえる。",
                ruby: ["あしおと"]
            }, {
                ex: "おてらのかねの音がきこえる。",
                ruby: ["ね"]
            }, {
                ex: "いえごの発音がとてもよい。",
                ruby: ["はつおん"]
            }, {
                ex: "音信がとだえる。",
                ruby: ["おんしん"]
            }]

        }, {
            character: "下",
            romaji: "shita",
            meaning: ["under", "below"],
            onyomi: ["カ", "ゲ"],
            kunyomi: ["した", "しも", "もと", "さ‐げる", "さ‐がる", "くだーる", "くだ‐す", "くだ‐さる", "お‐ろす", "お‐りる"],
            example: [{
                ex: "木の下にすわって休む。",
                ruby: ["した", "やす"]
            }, {
                ex: "はしごから下りる。",
                ruby: ["お"]
            }, {
                ex: "地下鉄にのりかえる。",
                ruby: ["ちかてつ"]
            }, {
                ex: "年下のこといっしょにあそぶ。",
                ruby: ["としした"]
            }, {
                ex: "川下にむかってながれる。",
                ruby: ["かわしも"]
            }, {
                ex: "きおんがきゅうに下がる",
                ruby: ["さ"]
            }]

        }, {
            character: "火",
            romaji: "hi",
            meaning: ["fire", "flame", "light", "blaze"],
            onyomi: ["カ"],
            kunyomi: ["ひ", "ほ"],
            example: [{
                ex: "まっかにもえる火。",
                ruby: ["ひ"]
            }, {
                ex: "日本には、火山がおおい。",
                ruby: ["ひほん", "かざん"]
            }, {
                ex: "火事にならないように、火の用心をしましょう。",
                ruby: ["かじ", "ひ", "ようじん"]
            }, {
                ex: "きょうは、みんなで花火をします。",
                ruby: ["はなび"]
            }, {
                ex: "たき火をしてやきいもをやく。",
                ruby: ["び"]
            }, {
                ex: "火曜日におばさんがくる。",
                ruby: ["かようび"]
            }]

        }, {
            character: "花",
            romaji: "hana",
            meaning: ["flower", "blossom"],
            onyomi: ["カ"],
            kunyomi: ["はな"],
            example: [{
                ex: "きれいな花を、花びんにさした。",
                ruby: ["はな", "か"]
            }, {
                ex: "花だんに草花のたねをまいた。",
                ruby: ["か", "くさばな"]
            }, {
                ex: "たんじょう日に花束をもらった。",
                ruby: ["び", "はなたば"]
            }, {
                ex: "さらにうちあげ花火があがった。",
                ruby: ["はなび"]
            }, {
                ex: "花よめさんが、とてもきれいです。",
                ruby: ["はな"]
            }]

        }, {
            character: "貝",
            romaji: "kai",
            meaning: ["shellfish", "shell"],
            onyomi: [],
            kunyomi: ["かい"],
            example: [{
                ex: "はまべで、きれいな貝がらをひろった。",
                ruby: ["かい"]
            }, {
                ex: "桜貝を糸でむすんで、ネックレスをつくろう。",
                ruby: ["さくらがい", "いと"]
            }, {
                ex: "貝づかは、大むかしの人がたべたあとの貝がらをすてたところです。",
                ruby: ["かい", "おお", "ひと", "かい"]
            }]

        }, {
            character: "学",
            romaji: "gaku",
            meaning: ["learn", "study"],
            onyomi: ["ガク"],
            kunyomi: ["まな‐ぶ"],
            example: [{
                ex: "兄は、大学で医学を学んでいる。",
                ruby: ["あに", "だいがく", "いがく", "まな"]
            }, {
                ex: "しゃかいかの学習で、車の工場を見学した。",
                ruby: ["がくしゅう", "くるま", "こうじょう", "けんがく"]
            }, {
                ex: "めざましい科学のぎじゅつのしんぽ。",
                ruby: ["かがく"]
            }, {
                ex: "小学校に入学する。",
                ruby: ["しょうがっこう", "にゅうがく"]
            }]

        }, {
            character: "気",
            romaji: "ki",
            meaning: ["spirit", "mood"],
            onyomi: ["キ", "ケ"],
            kunyomi: [],
            example: [{
                ex: "じてん車のタイヤに空気を入れる。",
                ruby: ["しゃ","くうき"]
            }, {
                ex: "かぜがなおって元気になりました。",
                ruby: ["げんき"]
            }, {
                ex: "いえを出てからわすれものに気がついた。",
                ruby: ["で","き"]
            }, {
                ex: "うしろに、人の気配がする。",
                ruby: ["ひと","けはい"]
            }]

        }, {
            character: "九",
            romaji: "kyū",
            meaning: ["nine"],
            onyomi: ["キュウ","ク"],
            kunyomi: ["ここの","ここの‐つ"],
            example: [{
                ex: "やきゅうは、一チーム九。",
                ruby: ["いち","きゅう"]
            }]

        }, {
            character: "休",
            romaji: "kyū",
            meaning: ["rest","holiday"],
            onyomi: ["キュウ"],
            kunyomi: ["やす‐む","やす‐まる","やす‐める"],
            example: [{
                ex: "かぜで学校を休んだ。",
                ruby: ["がっこう","やす"]
            },{
                ex: "体を休める。",
                ruby: ["からだ","やす"]
            },{
                ex: "こんどの休日は、ゆうえんちにいきます。",
                ruby: ["きゅうじつ"]
            },{
                ex: "五月の連休に、かぞくでりょこうをした。",
                ruby: ["ごがつ","れんきゅう"]
            },{
                ex: "本日はおみせを休業いたします。",
                ruby: ["ほんじつ","きゅうぎょう"]
            },{
                ex: "ざっしが、休刊になりました。",
                ruby: ["きゅうかん"]
            }]

        }, {
            character: "玉",
            romaji: "tama",
            meaning: ["ball","sphere","bullet"],
            onyomi: ["ギョク"],
            kunyomi: ["たま"],
            example: [{
                ex: "宝玉（＝たからとすほう石）がついた、王さまのかんむり。",
                ruby: ["ほうぎょく","せき","おう"]
            },{
                ex: "水玉もようのかさをさす。",
                ruby:["みずたま"]
            },{
                ex:"ふたつの目玉が、くらやみでひかる。",
                ruby:["めだま"]
            }]

        }, {
            character: "金",
            romaji: "きん",
            meaning: ["gold", "money", "metal", "currency"],
            onyomi: ["キン","コン"],
            kunyomi: ["かね","かな"],
            example: [{
                ex: "オリンピックで、金メダルをとった。",
                ruby: ["きん"]
            },{
                ex: "金色にかがやくたからもの。",
                ruby: ["こんじき"]
            },{
                ex: "かばんの金具がとれた。",
                ruby: ["かなぐ"]
            },{
                ex: "お金をきふする。",
                ruby: ["かね"]
            },{
                ex: "金曜日は、すいえいをならっています。",
                ruby: ["きんようび"]
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