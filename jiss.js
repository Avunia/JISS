/*
  JISS - Javascript Image Slideshow Script | v2.0 | 2018-10-14
  https://github.com/Avunia/JISS
  (c) Alexander Meinhardt / @_Avunia / https://avunia.net
*/
if( typeof window.document !== 'object' ) {
  throw new Error( 'JISS requires a `window` with a `document` object' );
}
class JISS {
  constructor( options = {
    container: 'slideshow',
    imagesCount: 8,
    imagesExtension: 'jpg',
    interval: 10,
    imagesPath: './assets/img/slideshow/',
    imagesPathPadding: 3,
    prefix: 'JISS',
    random: 'yes',
    ascending: 'yes',
  }) {
    this.container          = options.container ? options.container : 'slideshow';
    this.imagesCount        = options.imagesCount ? options.imagesCount : 8;
    this.imagesExtension    = options.imagesExtension ? options.imagesExtension : 'jpg';
    this.imagesPath         = options.imagesPath ? options.imagesPath : './assets/img/slideshow/';
    this.imagesPathPadding  = options.imagesPathPadding ? options.imagesPathPadding : 3;
    this.images             = [];
    this.interval           = options.interval ? options.interval : 10;
    this.nextImage          = null;
    this.prefix             = options.prefix ? options.prefix : 'JISS';
    this.random             = options.random ? options.random : 'yes';
    this.ascending          = options.ascending ? options.ascending : 'yes';
  };

  start() {
    this.createElements();
    this.cycleImage();
  };


  createElements() {
    for( var i = 0; i < this.imagesCount; i++ ) {
      this.images[i] = this.addElement( i );
    }
  }
  addElement( count ) {
    var padding = this.imagesPathPadding;
    var curimg = new Image();
    var _prefix = this.prefix;
    curimg = this.imagesPath + pad( count, padding ) + '.' + this.imagesExtension;
    
    // create url template and add meta
    Array.prototype.forEach.call(
      document.getElementsByClassName( this.container ),
      function( entry ) {
        var element = document.createElement( 'div' );
        element.setAttribute( 'class', _prefix + 'image' + pad( count, padding ) );
        element.setAttribute( 'style', 'background-image: url(\'' + curimg + '\');' );
        entry.appendChild( element );
    });
    return curimg;
  }
  cycleImage() {
    var padding = this.imagesPathPadding;
    var _prefix = this.prefix;
    if( this.nextImage !== null ) {
      Array.prototype.forEach.call(document.getElementsByClassName(
        this.prefix + 'active ' + this.prefix + 'image' + pad( this.nextImage, padding )),
        function( entry ) {
          entry.className = entry.className.replace(/(?:^|\s)JISSactive(?!\S)/g, '');
      });
    }

    var prevImage = this.nextImage;
    
    if( this.random === "yes" ) {
      this.nextImage = Math.round(Math.random() * (this.imagesCount - 1));
      if( this.nextImage == prevImage ) {
        if( this.nextImage < ( this.imagesCount - 1 ) ) {
          this.nextImage++;
        } else if ( this.nextImage > 0 ) {
          this.nextImage--;
        }
      };
    } else {
      if( this.ascending === "yes" ) {
        if( this.nextImage < ( this.imagesCount - 1 ) ) {
           this.nextImage++;
        } else {
          this.nextImage = 0;
        }
      } else {
        if( this.nextImage > 0 ) {
          this.nextImage--;
       } else {
         this.nextImage = ( this.imagesCount - 1);
       }
      }
    }
    
    Array.prototype.forEach.call(document.getElementsByClassName(
      _prefix+'image' + pad( this.nextImage, padding )),
      function( entry ) {
        entry.className += ' ' + _prefix + 'active';
    })
    var _this = this;
    setTimeout( (function() { _this.cycleImage(); }), (this.interval * 1000) );
  }

}
console.log("JISS v2.0.0 running.");

if (window.NodeList && !NodeList.prototype.forEach) {
  // Array.prototype.forEach implementation
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}