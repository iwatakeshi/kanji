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

    function isObjectLike(value) {
        return (value && typeof value == 'object') || false;
    }

    function isObject(value) {
        return !!(value && objectTypes[typeof value]);
    }

    function isString(value) {
        return typeof value == 'string' || (isObjectLike(value) && toString.call(value) == stringClass) || false;
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
        return Object.prototype.toString.call(value) === objectClass;
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
     * Static Methods for minidash
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
        locales = {},
        // '*' means all
        grades = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', "*"],
        global = {
            grade: grades[0],
            locale: 'en'
        },
        hasModule = (typeof module !== 'undefined' && module.exports);

    /** kanji Helpers */
    function replaceMeanings() {
        if (locales[global.locale]) {
            _.each(dictionary, function(g, gvalue) {
                if (global.grade !== '*') {
                    //for each grade of type array
                    _.each(gvalue, function(k) {
                        if (g === global.grade) {
                            if (locales[global.locale]) {
                                if (locales[global.locale].grade[g]) {
                                    _.each(locales[global.locale].grade[g], function(kl) {
                                        if (k.character === kl.character) {
                                            k.meaning = kl.meaning;
                                        }
                                    });
                                }

                            }
                        }
                    });
                } else {
                    //for each grade of type array
                    _.each(gvalue, function(k) {
                        if (locales[global.locale]) {
                            if (locales[global.locale].grade[g]) {
                                _.each(locales[global.locale].grade[g], function(kl) {
                                    if (k.character === kl.character) {
                                        k.meaning = kl.meaning;
                                    }
                                });
                            }

                        }

                    });
                }
            });
        }
    }

    /** 
     * Automatically loads the grades and locales
     */
    function loadModules() {
        if (hasModule) {
            var fs = require("fs"),
                path = require("path");

            var p = "./public/javascripts/"
            fs.readdir(p, function(err, files) {
                if (err) {
                    throw err;
                } else {
                    files.map(function(file) {
                        return path.join(p, file);
                    }).filter(function(file) {
                        return fs.statSync(file).isFile();
                    }).forEach(function(file) {
                        if (file.match(/locale/) || file.match(/grade/)) {
                            require(path.resolve(file));
                        }
                        //console.log("%s (%s)", file, path.extname(file));
                    });
                }


            });
        }
    }

    /**
     * Kanji Constructor
     */
    var Kanji = function() {
        loadModules();
    };

    /**
     * Sets the grade level and returns the grade
     * @param  {String, Number} grade
     * @return {Array} grade
     */
    Kanji.prototype.grade = function(grade) {
        if (isNumber(grade)) {
            global.grade = grades[grade - 1];
        }

        if (isString(grade)) {
            global.grade = grade;
        }

        if (global.grade !== '*') {
            return dictionary[global.grade];
        } else {
            return this.grades();
        }

    };

    /**
     * Returns the entire dictionary of all grades
     * @return {Array} dictionary
     */
    Kanji.prototype.grades = function() {
        return dictionary;
    };

    /** Sets the locale */
    Kanji.prototype.locale = function(locale) {
        global.locale = (locale !== undefined && isString(locale)) ? locale : 'en';
        replaceMeanings();
    };

    /**
     * Searches the kanji by meaning
     * @param  {String} meaning
     * @return {Array} result
     */
    Kanji.prototype.findByMeaning = function(meaning) {
        var result = [];
        //check if the user wamts to search through all
        if (global.grade !== '*') {
            //loop through dictionary by grade
            _.each(dictionary[global.grade], function(k) {
                _.each(k.meaning, function(m) {
                    if (m === meaning) {
                        result.push(k);
                    }
                });

            });

        } else {
            _.each(dictionary, function(g, gvalue) {
                _.each(gvalue, function(k) {
                    _.each(k.meaning, function(m) {
                        if (m === meaning) {
                            result.push(k);
                        }
                    });

                });
            });
        }
        return result;
    };

    /**
     * Searches the kanji by meaning asychronously
     * @param  {String} meaning
     * @param {Function} callback
     */
    Kanji.prototype.findByMeaningAsync = function(meaning, callback) {
        //check if the user wamts to search through all
        if (global.grade !== '*') {
            //loop through dictionary by grade
            _.each(dictionary[global.grade], function(k) {
                _.each(k.meaning, function(m) {
                    if (m === meaning) {
                        callback(k);
                    }
                });
            });

        } else {
            _.each(dictionary, function(g, gvalue) {
                _.each(gvalue, function(k) {
                    _.each(k.meaning, function(m) {
                        if (m === meaning) {
                            result.push(k);
                        }
                    });

                });
            });
        }
    };

    /**
     * Searches the kanji by romaji
     * @param  {String} romaji
     * @return {Array} result
     */
    Kanji.prototype.findByRomaji = function(romaji) {
        var result = [];
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                if (k.romaji === romaji) {
                    result.push(k);
                }
            });
        } else {
            _.each(dictionary, function(g) {
                _.each(g, function(k) {
                    if (k.romaji === romaji) {
                        result.push(k);
                    }
                });
            });
        }
        return result;
    };

    /**
     * Searches the kanji by romaji asynchronously
     * @param  {String} romaji
     * @param {Function} callback
     */
    Kanji.prototype.findByRomajiAsync = function(romaji, callback) {
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                if (k.romaji === romaji) {
                    callback(k);
                }
            });
        } else {
            _.each(dictionary, function(g) {
                _.each(g, function(k) {
                    if (k.romaji === romaji) {
                        callback(k);
                    }
                });
            });
        }
    };

    /**
     * Searches the kanji by on-yomi
     * @param  {String} onyomi
     * @return {Array} result
     */
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

    /**
     * Searches the kanji by on-yomi
     * @param  {String} onyomi
     * @param {Function} callback
     */
    Kanji.prototype.findByOnyomiAsync = function(onyomi, callback) {
        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                _.each(k.onyomi, function(o) {
                    if (o) {
                        if (o === onyomi) {
                            callback(k);
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
                                callback(k);
                            }
                        }
                    });
                });
            });
        }
        return result;
    };

    /**
     * Searches the kanji by kunyomi
     * @param  {String} meaning
     * @return {Array} result
     */
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

    /**
     * Searches the kanji by kunyomi asynchronously
     * @param  {String} meaning
     * @param  {Function} callback
     */
    Kanji.prototype.findByKunyomiAsync = function(kunyomi, callback) {

        if (global.grade !== '*') {
            _.each(dictionary[global.grade], function(k) {
                _.each(k.kunyomi, function(o) {
                    if (o) {
                        if (o === kunyomi) {
                            callback(k);
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
                                callback(k);
                            }
                        }
                    });
                });
            });
        }
    };

    kanji = function() {
        return new Kanji();
    };

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

    /*
      Import locales
     */
    kanji.defineLocale = function(locale, obj) {
        if (!locales[locale]) {
            locales[locale] = obj;
        }
    }

    /**************************
            Expose kanji
    **************************/

    // CommonJS module is defined
    if (hasModule) {
        kanji.prototype = Kanji.prototype;
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