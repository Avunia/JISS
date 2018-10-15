# JISS
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)](https://forthebadge.com)
### a **J**avascript **I**mage **S**lideshow **S**cript..
..which makes it easy to include animated and powerful slideshows in your website.

And the best?

**No ~~useless~~ unused features.**

This is as naked as you'll wanna get!  
Or so I have heard.

## DEMO
(coming soon)

## INSTALL
### Dependencies
* None

### Usage
Download it and include the **JS** & **CSS** files inside your page(s) with the script & link tag.<br/>
e.g.
```html
<link href="./styles/jiss.min.css" rel="stylesheet"/>
<script src="./scripts/jiss.min.js"></script>
```
And put your images inside a folder, numbered from 0 to infinity (& beyond).  
E.g. "000.jpg" "001.jpg" or "01.png" and so on.

Then simply create an object for your slideshow(s) and start!
```js
var topBanner   = new JISS(); // uses default options
var background  = new JISS({container: 'background'});  // Custom options

// The start function creates the objects, preferably run it when the DOM is ready.
topBanner.start();
background.start();
```
Done. See the configuration below on how to fine tune it.

The generated image elemtns are selectable with the following selector(s):
```css
/* Keep in mind these are affected by the prefix! */
div.JISScontainer > div[class*="JISSimage"]
div.JISSimageN /* Replace N with any number starting from 0 and add padding if applicable */
div.JISSactive
```

## CONFIGURATION
JISS can be configured by supplying the options at creation.  
See following example on how to:
```js
var bannerSlideshow = new JISS({
  container: 'myCustomContainerElement',  // Custom container class name  | def.: slideshow
  imagesCount: 47,                        // Count of images              | def.: 8
  imagesExtension: 'png',                 // Image extension              | def.: jpg
  imagesPath: './my/custom/image/path',   // Path to the image folder     | def.: ./assets/img/slideshow
  imagesPathPadding: 2,                   // Padding of the name          | def.: 3
  interval: 5,                            // Image duration in seconds    | def.: 10
  prefix: 'NotJISS',                      // Prefix of anything JISS uses | def.: JISS
  random: 'no',                           // Randomize images             | def.: 'yes'
  ascending: 'no'                         // (For ordered mode) Sorting   | def.: 'yes'
})
```

## UPDATES
*Version / Release Date / Codename*

### v2.0.0 / 14.10.2018 / "Objectively"
* Reworked configuration
* Minified version is actually usable
* Support for multiple independent slideshows in one page
* Container element can be chosen
* Images can be shown randomly or in ascending/descending order

### v1.1.0 / 11.06.2018 / "Free"
* JQuery dependency removed
* Animations moved from JS to CSS, as god intended

### v1.0.0 / 18.10.2016
* Initial release - more to come soon!

## LICENSE
Copyright (c) 2016-2018 Alexander Meinhardt / [Avunia](https://avunia.net). Licensed under the [MIT License (MIT)](https://opensource.org/licenses/MIT)
