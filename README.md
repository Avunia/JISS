# JISS
### a **J**avascript **I**mage **S**lideshow **S**cript..
..which makes it easy to include animated and powerful slideshows in your website, without modifying existing code!
And the best?

**No ~~useless~~ unused features.**

This is as naked as you'll wanna get!

## DEMO ##
(coming soon)

## INSTALL ##
### Dependencies
* None

### Usage
Download it and include the **JS** & **CSS** file inside your page(s) with the script & link tag.<br/>
e.g.
```html
<link href="./styles/jiss.min.css" rel="stylesheet"/>
<script src="./scripts/jiss.min.js"></script>
```
Afterwards, add the following tag in your page(s):
```html
<div class="jissBackground container"></div>
```

The generated image tags are selectable with the following selector(s):
```css
div.jissBackground.container > div[class*="image"]
div.jissBackground.imageNNN
/* Replace NNN with any number starting from 000 */
```

## CONFIGURATION ##
JISS currently has the following variables to be configured:
* picturecount - Amount of images in the folder
* size - Pad size (amount of digits, "3" = "000")
* picturepath - Path to the images (from documentroot)
* extension - File extension of the images

## UPDATES
*Version / Release Date / Codename*
### v1.0.0 / 18.10.2016 ###
* Initial release - more to come soon! 
### v1.1.0 / 11.06.2018 / "Free" ###
* JQuery dependency removed
* Animations moved from JS to CSS

## LICENSE
Copyright (c) 2016-2018 Alexander Meinhardt / [Avunia](http://avunia.gitlab.io). Licensed under the [MIT License (MIT)](https://opensource.org/licenses/MIT)
