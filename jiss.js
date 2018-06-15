/*
JISS - Javascript Image Slideshow Script | v1.0 | 18.10.2016
(https://github.com/Avunia/JISS)
(c) Alexander Meinhardt / @windyrain0212 / http://avunia.gitlab.io
*/

var picturecount = 8;
var size = 3;
var picturepath = './assets/images/slideshow/';
var extension = 'jpg';

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var nextpicture = null;
var pictures = [];

document.addEventListener('DOMContentLoaded', function () {
  for (i = 0; i < picturecount; i++) {
    current = pad(i, size);
    createBackgrounds(current);
  }

  changeBackground();
}, false);

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}

function createBackgrounds(num) {
  pictures[num] = new Image();
  pictures[num] = picturepath + num + '.' + extension;
  Array.prototype.forEach.call(document.getElementsByClassName('jissBackground container'), function (entry) {
    var ele = document.createElement('div');
    ele.setAttribute('class', 'jissBackground image' + num);
    ele.setAttribute('style', 'background-image: url(\'' + pictures[num] + '\');');
    entry.appendChild(ele);
  });
}

function changeBackground() {
  // Just so it doesn't error on page load.
  if (nextpicture !== null) {
    // Hide current picture
    Array.prototype.forEach.call(document.getElementsByClassName('jissBackground image' + pad(nextpicture, size)), function (entry) {
      entry.className = entry.className.replace(/(?:^|\s)jissShown(?!\S)/g, '');
    });
  }

  prevpicture = nextpicture;
  // Set new picture to load
  nextpicture = Math.round(Math.random() * (picturecount - 1));
  // Check new value so it doesn't display the same image again
  if (nextpicture == prevpicture) {
    if (nextpicture < (picturecount - 1)) {
      nextpicture += 1;
    } else if (nextpicture > 0) {
      nextpicture -= 1;
    }
  }
  // Show new picture
  Array.prototype.forEach.call(document.getElementsByClassName('jissBackground image' + pad(nextpicture, size)), function (entry) {
    entry.className += ' jissShown';
  });

  // Loop.
  setTimeout("changeBackground()", 10000);
}
