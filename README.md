# JISS
### a **J**avascript **I**mage **S**lideshow **S**cript..
..which makes it easy to include animated and powerful slideshows in your website, without modifying existing code!

## DEMO ##
(coming soon)

## INSTALL ##
### Dependencies
* jQuery (tested only in v1.11.1)

### Usage
Download it and include the **JS** & **CSS** file inside your page(s) with the script & link tag.<br/>
e.g.
```html
<link type="text/css" rel="stylesheet" href="./css/jiss.css" />
<script src="./js/jiss.min.js"></script>
```
Keep in mind the **JS** file must be included **BELOW** the jQuery script.<br/>

Afterwards, add the following tag in your page(s):
```html
<div class="background container"></div>
```

The generated image tags are selectable with the following selector(s):
```css
div.background.container > div[class*="image"]
div.background.imageNNN
/* Replace NNN with any number starting from 000 */
```

(Bower / NPM support / CDN *may* come in the future)

## CONFIGURATION ##
JISS currently has the following variables to be configured:
variable | info
-- | --
picturecount | Amount of images in the folder
size | Pad size (amount of digits, "3" = "000")
picturepath | Path to the images (from documentroot)
extension | File extension of the images

## UPDATES
### v1.00 / 18.10.2016 ###
* Initial release - more to come soon! 

## LICENSE
Copyright (c) 2016 Alexander Meinhardt / [WindyRain0212](http://home.nssdev.net). Licensed under the [MIT License (MIT)](https://opensource.org/licenses/MIT)