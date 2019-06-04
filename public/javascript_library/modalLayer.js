var ModalLayer = function() {
  var _this = this;
  this._src;
  this.el;
  this.content;
  this.bg;
  this.w = 0;
  this.h = 0;
  this.w1 = 0;
  this.h1 = 0;
  this.w2 = 0;
  this.h2 = 0;
  this.load_done_p = false;
  this.load_done_l = false;
  this.mobile = false;
  this.p_url;
  this.l_url;
  this.EVENT_TAG = '.modalLayer';
  this.load_done = false;
  this.SCREEN_CHANGE = 'scrren_change';
  this.PROTRAIT = 0;
  this.LANDSCAPE = 90;
  this.orientation = this.PROTRAIT;


  this.setOrientation = function(v) {
    if (this.orientation != v) {
      this.orientation = v;
      $(window).trigger(_this.SCREEN_CHANGE, v);
      console.log('this.orientation: ' + v);
    }
  }
  this.init = function(iframe, bg, w, h, w2, h2, p_url, l_url, mobile = false, bg_color = '#000000', link) {
    this.p_url = p_url;
    this.l_url = l_url;
    this.w = w;
    this.h = h;
    this.w1 = w;
    this.h1 = h;
    this.w2 = w2;
    this.h2 = h2;
    this.link = link;
    this.mobile = mobile;
    this.el = $('#' + iframe);
    this.el.css('position', 'absolute');
    this.bg = $('#' + bg);
    this.setBgCSS(this.bg, bg_color);
    if (!this.mobile) {
      if ($(window).innerHeight() > $(window).innerWidth()) {
        this.w = _this.w1;
        this.h = _this.h1;
      } else {
        this.w = _this.w2;
        this.h = _this.h2;
      }
    }

  }
  this.setBgCSS = function(bg, bg_color) {
    bg.css('display', 'none');
    bg.css('position', 'fixed');
    bg.css('top', '0px');
    bg.css('left', '0px');
    bg.css('width', '100%');
    bg.css('height', '100%');
    bg.css('z-index', '1000000');
    bg.css('background-color', bg_color);
    bg.css('overflow', 'hidden');
  }

  this.makeLayer = function(_src) {
    this.removeEvent();
    this.setEvent();
    this._src = _src;
    this.load_done_p = false;
    this.load_done_l = false;
    this.layerCenter();

    // this.bg.fadeIn();
  }
  this.layerCenter = function() {
    // var temp = this.el;
    // temp.css('overflow', 'hidden');
    this.load_done = false;

    this.el.attr('src', '');
    this.el.attr('src', this._src);
    this.el.width(0);
    this.el.height(0);

    if (this.bg) {
      this.bg.fadeIn(); //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
    } else {
      this.el.fadeIn();
    }

  }
  this.setEvent = function() {
    this.el.bind('load' + _this.EVENT_TAG, function(e) {
      console.log('load done iframe window.orientation:' + parent.window.orientation);
      _this.content = _this.el.get(0).contentWindow;
      _this.load_done_p = true;
      _this.load_done_l = true;
      if(_this.link != undefined){
        _this.content.postMessage(_this.link, '*');
        console.log('start postMessage');
      }
      if (_this.mobile) {
        if (window.orientation == 0) {
          console.log('세로');
          // _this.load_done_p = true;
          _this.w = _this.w1;
          _this.h = _this.h1;
        } else {
          console.log('가로');
          // _this.load_done_l = true;
          _this.w = _this.w2;
          _this.h = _this.h2;
        }
      } else {
        if ($(window).innerHeight() > $(window).innerWidth()) {
          _this.w = _this.w1;
          _this.h = _this.h1;
        } else {
          _this.w = _this.w2;
          _this.h = _this.h2;
        }
      }
      $(window).bind('focus' + _this.EVENT_TAG, function(e) {
        setTimeout(function() {
          if (_this.content != null) {
            setTimeout(function() {
              $(_this.content).focus();
            }, 200);
            // _this.content.game.onfocus = true;
          }
        }, 200);
      });
      $(window).bind('blur' + _this.EVENT_TAG, function(e) {
        if (_this.content != null) {
          // _this.content.game.onfocus = false;
            $(_this.content).blur();
        }
      });
      _this.load_done = true;
      // alert(_this.content.$('body').text());
      _this.resize();
    });
    if (!_this.mobile) {
      // $(window).bind('orientationchange' + _this.EVENT_TAG, function(e) {
      //   alert('window.orientation:' + window.orientation);
      //   if (window.orientation == 0) {
      //     if (_this.p_url != _this.l_url) {
      //       _this.w = _this.w1;
      //       _this.h = _this.h1;
      //       _this.makeLayer(_this.p_url);
      //     }
      //   } else {
      //     if (_this.p_url != _this.l_url) {
      //       _this.w = _this.w2;
      //       _this.h = _this.h2;
      //       _this.makeLayer(_this.l_url);
      //     }
      //   }
      // }, false);
      // $(window).bind('popstate' + _this.EVENT_TAG, function(e) {
      //   var state = e.originalEvent.state;
      //   if (state !== null) {
      //     _this.closeGame();
      //   }
      // }, false);
      $(window).bind('keyup' + _this.EVENT_TAG, function(e) {
        // alert('e.keyCode:' + e.keyCode);
        if (e.keyCode == 27) {
          _this.closeGame();
        }
      });
    }
    $(window).bind(_this.SCREEN_CHANGE, function(e, v) {
      if (_this.PROTRAIT == v) {
        if (_this.p_url != _this.l_url) {
          _this.w = _this.w1;
          _this.h = _this.h1;
          _this.makeLayer(_this.p_url);
        }
      } else {
        if (_this.p_url != _this.l_url) {
          _this.w = _this.w2;
          _this.h = _this.h2;
          _this.makeLayer(_this.l_url);
        }
      }
    });
    // }
    $(window).bind('resize' + _this.EVENT_TAG, function(e) {
      // alert('window.orientation:' + window.orientation);
      if (_this.load_done_p || _this.load_done_l) {
        if (!_this.mobile) {
          if ($(window).innerHeight() > $(window).innerWidth()) {
            _this.setOrientation(_this.PROTRAIT);
            // if (_this.p_url != _this.l_url) {
            //   if (_this.load_done_p) {
            //     _this.w = _this.w1;
            //     _this.h = _this.h1;
            //     _this.makeLayer(_this.p_url);
            //   }
            // }
          } else {
            _this.setOrientation(_this.LANDSCAPE);
            // if (_this.p_url != _this.l_url) {
            //   if (_this.load_done_l) {
            //     _this.w = _this.w2;
            //     _this.h = _this.h2;
            //     _this.makeLayer(_this.l_url);
            //   }
            // }
          }
        } else {
          _this.setOrientation(window.orientation);
        }
        _this.resize();
      }
    });
  }

  this.removeEvent = function() {
    if (!this.mobile) {
      // $(window).unbind('orientationchange' + _this.EVENT_TAG);
      // $(window).unbind('popstate' + _this.EVENT_TAG);
      $(window).unbind('keyup' + _this.EVENT_TAG);
    }
    $(window).unbind(_this.SCREEN_CHANGE);
    $(window).unbind('resize' + _this.EVENT_TAG);
    this.el.unbind('load' + _this.EVENT_TAG);

    this.content = null;

    // if (this.load_done) {
    //   $(window).unbind('focus' + _this.EVENT_TAG);
    //   $(window).unbind('blur' + _this.EVENT_TAG);
    // }
      $(window).unbind('focus' + _this.EVENT_TAG);
      $(window).unbind('blur' + _this.EVENT_TAG);
  }
  this.makeModal = function() {
    if (this.mobile) {
      //mobile
      if (window.orientation == 0) {
        // alert('세로.');
        this.makeLayer(this.p_url);
      } else {
        this.makeLayer(this.l_url);
      }
    } else {
      //pc
      if ($(window).innerHeight() > $(window).innerWidth()) {
        this.orientation = this.PROTRAIT;
        this.makeLayer(this.p_url);
      } else {
        this.orientation = this.LANDSCAPE;
        this.makeLayer(this.l_url);
      }
    }
  }
  this.resize = function() {
    var w = this.h / this.w;
    var h = $(window).innerHeight() / $(window).innerWidth();
    if (this.mobile) {
      if (w < h) {
        var s_r = $(window).innerWidth() / this.w;
        this.center(s_r);
      } else {
        var s_r = $(window).innerHeight() / this.h;
        this.center(s_r);
      }
    } else {
      if ($(window).innerWidth() > this.w && $(window).innerHeight() > this.h) {
        // this.el.width(this.w);
        // this.el.height(this.h);
        this.center(1.0);
        var s_r = 1.0;
      } else {
        if (w < h) {
          s_r = $(window).innerWidth() / this.w;
          this.center(s_r);
        } else {
          s_r = $(window).innerHeight() / this.h;
          this.center(s_r);
        }
      }
    }

    if (this.content != null) {
      this.content.resize(s_r);
    }
  }
  this.center = function(scale) {
    this.el.css('width', this.w * scale + 'px');
    this.el.css('height', this.h * scale + 'px');
    this.el.css('top', $(window).innerHeight() / 2 + 'px');
    this.el.css('left', $(window).innerWidth() / 2 + 'px');
    this.el.css('margin-left', '-' + this.el.outerWidth() / 2 + 'px');
    this.el.css('margin-top', '-' + this.el.outerHeight() / 2 + 'px');

    if (this.content != null) {
      this.content.resize(scale);
    }
  }
  this.setLink = function(link){
      if (this.content != null) {
        this.content.setLink(link);
      }
  }
  this.closeGame = function() {
    console.log('closeGame');
    //        $('#frame_body').get(0).contentWindow.bgmStop();
    this.removeEvent();

    this.el.attr('src', '');
    if (this.bg) {
      this.bg.fadeOut();
    } else {
      this.el.fadeOut();
    }
    //            e.preventDefault();
  }
}
