kanji
=====

A Kanji dictionary for the web.

The available grades are from first through sixth.

Note: Only part of the first has been added and will continue to expand along the way.


The benefits of using this:

* modular - easily create a dictionary by grade (follows a similar pattern as moment.js).
* examples with ruby
* easy to use API
	* findByRomaji (available as a static method to narrow down results)
	* findByMeaning (available as a static method to narrow down results)
	* findByOnyomi (note all on-yomi must be Katakana)
	* findByKunYomi (note all kun-yomi must be Hiragana)
* should work with node.js (currently working in browser)
* locale support (search kanji in your locale)

###Usage

```html
	<script type="text/javascript" src="kanji.js"></script>
	<script type="text/javascript" src="kanji.grade.first.js"></script>
	<script type="text/javascript" src="kanji.locale.es.js"></script>
	<script type="text/javascript">
		var k = kanji();
		k.findByMeaning('round');
		/* output
		{
			character: "円", 
			example: Array[5], 
			kunyomi: Array[1], 
			meaning: Array[3], 
			onyomi: Array[1], 
			romaji: "en"
		}
		*/
	</script>

```

###Instructions

This project uses Node.js & Express.

```bash
#install node modules
npm install

#start project
npm start

```

1. Go to localhost:3000
2. Open Developer console
3. Play with kanji!

To develop, the files will be located under `./public/javascripts`

If you don't want to use or have node.js then go the located directory and import them
to your index.html file.

Docs will be updated once kanji has been completed


**Start project and find Kanji by meaning:**

![](https://github.com/iwatakeshi/kanji/blob/master/gifs/kanji-npm.gif)

**Change locale and find Kanji by meaning:**

![](https://github.com/iwatakeshi/kanji/blob/master/gifs/kanji-locale.gif)

**Find Kanji by Kun-yomi**

![](https://github.com/iwatakeshi/kanji/blob/master/gifs/kanji-kunyomi.gif)