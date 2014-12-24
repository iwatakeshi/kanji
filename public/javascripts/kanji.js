/*jslint node: true, forin: true, jslint white: true, newcap: true*/
/*
 * kanji
 * author : Takeshi Iwana
 * https://github.com/iwatakeshi
 * license : MIT
 * Code heavily borrowed from Adam Draper
 * https://github.com/adamwdraper
 */

(function() {
    'use strict';

    /**************************
             Helpers
    **************************/
    function debug() {
        console.log.apply(console, arguments);
    }

    var reNative = RegExp('^' +
        String(toString)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/toString| for [^\]]+/g, '.*?') + '$'
    );

    var objectTypes = {
        'boolean': false,
        'function': true,
        'object': true,
        'number': false,
        'string': false,
        'undefined': false
    };
    /** `Object#toString` result shortcuts */
    var argsClass = '[object Arguments]',
        arrayClass = '[object Array]',
        boolClass = '[object Boolean]',
        dateClass = '[object Date]',
        funcClass = '[object Function]',
        numberClass = '[object Number]',
        objectClass = '[object Object]',
        regexpClass = '[object RegExp]',
        stringClass = '[object String]';

    /* Native method shortcuts for methods with the same name as other `mindash` methods */
    var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
        nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
        nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys;

    function isNative(value) {
        return typeof value == 'function' && reNative.test(value);
    }

    function isObject(value) {
        return !!(value && objectTypes[typeof value]);
    }

    function isNumber(value) {
        return typeof value == 'number' ||
            value && typeof value == 'object' && toString.call(value) == numberClass || false;
    }

    function isNaN(value) {
        return isNumber(value) && value != +value;
    }

    var isArray = nativeIsArray || function(value) {
        return value && typeof value == 'object' && typeof value.length == 'number' &&
            toString.call(value) == arrayClass || false;
    };

    //really basic
    function isPlainObject(value) {
        return Object.prototype.toString.call(value) === "[object Object]";
    }

    function each(collection, callback) {
        var count = 0;
        if (collection && _.isPlainObject(collection)) {
            for (var key in collection) {
                if (collection.hasOwnProperty(key)) {
                    callback(key, collection[key]);
                }
            }
        }

        if (collection && isArray(collection)) {
            while (count < collection.length) {
                callback(collection[count++], count);
            }
        }
    }

    //minidash
    var _ = function() {};

    /*
     * Static Methods for mindash
     */
    _.isObject = isObject;

    _.isNumber = isNumber;

    _.isNaN = isNaN;

    _.isArray = isArray;

    _.isPlainObject = isPlainObject;

    _.each = each;

    /**************************
             kanji
    **************************/
    var kanji,
        dictionary = {},
        // '*' means all
        grades = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', "*"],
        global = {
            grade: grades[0]
        },
        hasModule = (typeof module !== 'undefined' && module.exports);

    var Kanji = function() {};

    Kanji.prototype.grade = function(grade) {
        if (typeof grade === Number) {
            global.grade = grades[grade];
        }

        if (typeof grade === String) {
            global.grade = (grade !== '*' ? grade : global.grade);
        }

        return dictionary[global.grade];
    };

    Kanji.prototype.grades = function() {
        return dictionary;
    };

    Kanji.prototype.findByMeaning = function(meaning) {
        var result;
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                _.each(k.meaning, function(m) {
                    if (m === meaning) {
                        result = k;
                    }
                });
            });

        } else {
            _.each(dictionary, function(g) {
                _.each(g, function(k) {
                    _.each(k.meaning, function(m) {
                        if (m === meaning) {
                            result = k;
                        }
                    });
                });
            });
        }
        return result;
    };

    Kanji.prototype.findByRomaji = function(romaji) {
        var result;
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                if (k.romaji === romaji) {
                    result = k;
                }
            });
        } else {
            _.each(dictionary, function(g) {
                _.each(g, function(k) {
                    if (k.romaji === romaji) {
                        result = k;
                    }
                });
            });
        }
        return result;
    };

    Kanji.prototype.findByOnyomi = function(onyomi) {
        var result = [];
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                _.each(k.onyomi, function(o) {
                    if (o) {
                        if (o === onyomi) {
                            result.push(k);
                        }
                    }

                });
            });

        } else {
            _.each(dictionary, function(g) {
                _.each(g, function(k) {
                    _.each(k.onyomi, function(m) {
                        if (o) {
                            if (o === onyomi) {
                                result.push(k);
                            }
                        }
                    });
                });
            });
        }
        return result;
    };

    Kanji.prototype.findByKunyomi = function(kunyomi) {
        var result = [];
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                _.each(k.kunyomi, function(o) {
                    if (o) {
                        if (o === kunyomi) {
                            result.push(k);
                        }
                    }

                });
            });

        } else {
            _.each(dictionary, function(g) {
                _.each(g, function(k) {
                    _.each(k.kunyomi, function(m) {
                        if (o) {
                            if (o === kunyomi) {
                                result.push(k);
                            }
                        }
                    });
                });
            });
        }
        return result;
    };

    kanji = function() {
        return new Kanji();
    };

    /*
      Static methods
    */
    kanji.findByMeaning = function(collection, meaning) {
        var result;
        _.each(collection, function(k) {
            _.each(k.meaning, function(m) {
                if (m === meaning) {
                    result = k;
                }
            });
        });

        return result;
    };

    kanji.findByRomaji = function(collection, romaji) {
        var result;
        _.each(collection, function(k) {
            if (k.romaji === romaji) {
                result = k;
            }
        });

        return result;
    };

    /*
      Import kanji by grade
    */
    kanji.defineKanji = function(grade, obj) {
        if (!dictionary[grade]) {
            dictionary[grade] = obj.kanji;
        }
    }

    /**************************
            Expose kanji
    **************************/

    // CommonJS module is defined
    if (hasModule) {
        module.exports = kanji;
    }

    /*global ender:false */
    if (typeof ender === 'undefined') {
        // here, `this` means `window` in the browser, or `global` on the server
        // add `kanji` as a global object via a string identifier,
        // for Closure Compiler 'advanced' mode
        this.kanji = kanji;
    }

    /*global define:false */
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return kanji;
        });
    }
}).call(this);