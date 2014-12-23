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

    var kanji,
        dictionary = {},
        grades = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'],
        global = {
            grade: grades[0]
        },
        hasModule = (typeof module !== 'undefined' && module.exports);
    
    var Kanji = function() {

    };

    Kanji.prototype.grade = function(grade) {
      if(typeof grade === Number){
          global.grade = grades[grade];
      }

      if(typeof grade === String){
          global.grade = grade;
      }

      return dictionary[global.grade];
    };

    Kanji.prototype.grades = function() {
      return dictionary;
    };

    kanji = function() {
        return new Kanji();
    };

    kanji.defineKanji = function(grade, obj) {
        if (!dictionary[grade]) {
            dictionary[grade] = obj;
        }
    }

    /************************************
      Exposing kanji
  ************************************/

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