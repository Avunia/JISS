/*
    JISS - Javascript Image Slideshow Script | v1.0 | 18.10.2016
    (https://github.com/windyrain0212/jiss)
    (c) Alexander Meinhardt / @windyrain0212 / http://home.nssdev.net 
*/

var picturecount = 22;
var size = 3;
var picturepath = './content/img/screenshots/';
var extension = 'jpg';

var nextpicture = null;    
var pictures = new Array();

$(function() {
    for (i=0;i<picturecount;i++) {
        current = pad(i, size);
        createBackgrounds(current);
    }
    
    changeBackground();
});
function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

function createBackgrounds(num) {
    pictures[num] = new Image();
    pictures[num] = picturepath + num + '.' + extension;
    $('.background.container').append('<div class="background image'+num+'" style="background-image: url(\''+pictures[num]+'\'); opacity: 0;"></div>');
}

function changeBackground() {
    // Just so it doesn't error on page load.
    if(nextpicture != null) {
        // Hide current picture
        $('.background.image'+pad(nextpicture, size)).animate({
        opacity: 0.0
    }, 750);
    }
    
    prevpicture = nextpicture;
    // Set new picture to load
    nextpicture = Math.round(Math.random()*(picturecount-1));
    // Check new value so it doesn't display the same image again
    if(nextpicture == prevpicture) {
        if(nextpicture < (picturecount-1)) {
            nextpicture += 1;
        } else if (nextpicture > 0) {
            nextpicture -= 1;
        }
    }
    // Show new picture
    $('.background.image'+pad(nextpicture, size)).animate({
        opacity: 1.0
    }, 750);

    // Loop.
    setTimeout("changeBackground()", 10000);
}