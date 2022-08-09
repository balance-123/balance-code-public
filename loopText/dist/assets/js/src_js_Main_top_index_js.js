"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([["src_js_Main_top_index_js"],{

/***/ "./src/js/Events/update.js":
/*!*********************************!*\
  !*** ./src/js/Events/update.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Update)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Perfomance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Perfomance */ "./src/js/Perfomance/index.js");


// import Stats from "stats.js";


var Update = /*#__PURE__*/function () {
  function Update() {
    var _this = this;

    var isStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Update);

    this.events = [];

    if (isStats) {
      // this.stats = new Stats();
      __webpack_require__.e(/*! import() */ "node_modules_stats_js_build_stats_min_js").then(__webpack_require__.t.bind(__webpack_require__, /*! stats.js */ "./node_modules/stats.js/build/stats.min.js", 23)).then(function (e) {
        _this.stats = new e["default"]();

        _this.stats.showPanel(0);

        document.body.appendChild(_this.stats.dom);
      });
    }

    this.isStop = false;
    this.frame;
    this._amountTime = 0; // this.perfomance = new Perfomance();

    this.update();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Update, [{
    key: "on",
    value: function on() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};
      this.events.push(cb);
    }
  }, {
    key: "update",
    value: function update() {
      var d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var diff = d - this._amountTime;

      if (this.isStop) {
        window.cancelAnimationFrame(this.frame);
        this._amountTime = 0;
        return;
      }

      if (this.stats) this.stats.begin();
      var l = this.events.length;

      for (var index = 0; index < l; index++) {
        this.events[index](diff);
      }

      if (this.stats) this.stats.end();
      this._amountTime = d; // this.perfomance.update(diff);

      this.frame = window.requestAnimationFrame(this.update.bind(this));
    }
  }]);

  return Update;
}();



/***/ }),

/***/ "./src/js/Main/top/canvas.js":
/*!***********************************!*\
  !*** ./src/js/Main/top/canvas.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Canvas)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




var MARGIN = 17;
var HEIGHT = 28;

var pixelRatio = window.devicePixelRatio;

var Canvas = /*#__PURE__*/function () {
  function Canvas() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Canvas);

    this.isLoaded = false;
    this.setup();
    this.setEvents();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Canvas, [{
    key: "setup",
    value: function () {
      var _setup = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee() {
        var _this = this;

        var path, imgPromise, _loop, index, imgs;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.canvas = document.querySelector("canvas");
                this.ctx = this.canvas.getContext("2d");
                this.imgs = [];
                this.speed = {
                  value: 0.5
                };
                this.tl = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline();
                path = "./assets/resource/0";
                imgPromise = [];
                this.imgWidth = 0;

                _loop = function _loop(index) {
                  var p = new Promise(function (resolve) {
                    var img = new Image();
                    img.src = path + index + ".png";

                    img.onload = function () {
                      var w = img.naturalWidth / img.naturalHeight * 28 * pixelRatio + 17 * pixelRatio;
                      _this.imgWidth += w;
                      resolve(img);
                    };
                  });
                  imgPromise.push(p);
                };

                for (index = 1; index <= 8; index++) {
                  _loop(index);
                }

                _context.next = 12;
                return Promise.all(imgPromise);

              case 12:
                imgs = _context.sent;
                this.imgs = imgs;
                this.v = 0;
                this.onResize();
                this.isLoaded = true;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setup() {
        return _setup.apply(this, arguments);
      }

      return setup;
    }()
  }, {
    key: "setEvents",
    value: function setEvents() {
      window.addEventListener("resize", this.onResize.bind(this));
      this.canvas.addEventListener("mouseenter", this.onHover.bind(this));
      this.canvas.addEventListener("mouseleave", this.onHoverOut.bind(this));
    }
  }, {
    key: "onHover",
    value: function onHover() {
      if (this.tl) this.tl.kill();
      this.tl = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline();
      console.log("hover!");
      this.tl.to(this.speed, 2, {
        value: 3,
        ease: "expo.out"
      });
    }
  }, {
    key: "onHoverOut",
    value: function onHoverOut() {
      if (this.tl) this.tl.kill();
      this.tl = gsap__WEBPACK_IMPORTED_MODULE_4__["default"].timeline();
      this.tl.to(this.speed, 2, {
        value: 0.5,
        ease: "expo.out"
      });
    }
  }, {
    key: "update",
    value: function update(diff) {
      var frameRate = Math.min(diff / (1 / 60 * 1000), 1);
      if (!this.isLoaded) return;
      this.ctx.clearRect(-300 * pixelRatio, 0, this.canvas.width + 300 * pixelRatio, this.canvas.height);
      this.v -= this.speed.value * pixelRatio * frameRate;
      this.v = Math.abs(this.v) % this.imgWidth * -1;
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.fillStyle = "#bababa";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.drawImg(0, this.v);
    }
  }, {
    key: "drawImg",
    value: function drawImg() {
      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var img = this.imgs[index % this.imgs.length];
      if (!img) return;
      var imgWidth = img.naturalWidth / img.naturalHeight * HEIGHT;

      var _x = x + imgWidth * pixelRatio + MARGIN * pixelRatio;

      if (_x >= 0 || x >= window.innerWidth * pixelRatio) {
        //   this.drawImg(index + 1, _x);
        var y = (this.canvas.height - HEIGHT * pixelRatio) / 2;
        this.ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, x, y, imgWidth * pixelRatio, HEIGHT * pixelRatio);
      }

      if (x < window.innerWidth * pixelRatio) this.drawImg(index % this.imgs.length + 1, _x);
    }
  }, {
    key: "onResize",
    value: function onResize() {
      this.canvas.width = window.innerWidth * pixelRatio;
      this.canvas.height = 75 * pixelRatio;
    }
  }]);

  return Canvas;
}();



/***/ }),

/***/ "./src/js/Main/top/cssLoop.js":
/*!************************************!*\
  !*** ./src/js/Main/top/cssLoop.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssLoop": () => (/* binding */ cssLoop)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");


var cssLoop = function cssLoop() {
  var wrap = document.querySelector(".css-loop");
  var items = wrap.querySelectorAll(".loop_item");
  var w = 0;
  items.forEach(function (item, i) {
    if (i >= 8) return;
    w += item.clientWidth + 17;
  });
  var v = {
    t: w / (0.5 * 60)
  };
  wrap.style.setProperty("--width", w * -1 + "px"); // wrap.style.setProperty("--width-hoverd", w * -1 + "px");

  wrap.style.setProperty("--duration", v.t + "s");
  wrap.style.setProperty("--duration-hoverd", v.t / 3 + "s");

  var _document$getAnimatio = document.getAnimations().filter(function (_ref) {
    var animationName = _ref.animationName;
    return animationName == "animation";
  }),
      _document$getAnimatio2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_document$getAnimatio, 1),
      animation = _document$getAnimatio2[0];

  wrap.addEventListener("mouseenter", function (e) {
    // animation.currentTime = 0;
    // const per =
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(animation, 2, {
      playbackRate: 6,
      ease: "expo.out"
    });
  });
  wrap.addEventListener("mouseleave", function (e) {
    gsap__WEBPACK_IMPORTED_MODULE_1__["default"].to(animation, 2, {
      playbackRate: 1,
      ease: "expo.out"
    }); // animation.currentTime = 0;
    // const per = animation.currentTime % (v.t * 1000);
    // animation.currentTime = per;
    // gsap.to(wrap, 2, {
    //   "--duration": w / (0.5 * 60) + "s",
    //   ease: "expo.out",
    // });
    // // gsap.to(v, 2, {
    // //   t: w / (0.5 * 60),
    // //   ease: "expo.out",
    // //   onUpdate() {
    // //     wrap.style.setProperty("--duration", v.t + "s");
    // //   },
    // // });
  });
  document.addEventListener("animationend", function () {
    console.log("end");
  });
};

/***/ }),

/***/ "./src/js/Main/top/index.js":
/*!**********************************!*\
  !*** ./src/js/Main/top/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _original__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./original */ "./src/js/Main/top/original.js");
/* harmony import */ var _Events_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Events/update */ "./src/js/Events/update.js");
/* harmony import */ var _cssLoop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssLoop */ "./src/js/Main/top/cssLoop.js");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvas */ "./src/js/Main/top/canvas.js");
/* harmony import */ var lil_gui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lil-gui */ "./node_modules/lil-gui/dist/lil-gui.esm.js");





var min = 10000;
var max = 0;
var config = {
  originalUpdate: true,
  canvasUpdate: true,
  reset: function reset() {
    min = 10000;
    max = 0;
  }
};
var performanceDom = document.getElementById("js-perfomance");
var gui = new lil_gui__WEBPACK_IMPORTED_MODULE_4__["default"]();
gui.add(config, "originalUpdate").onChange(function (value) {
  document.querySelector(".original").style.pointerEvents = value ? "auto" : "none";
});
gui.add(config, "canvasUpdate").onChange(function (value) {
  document.querySelector(".canvas-loop").style.pointerEvents = value ? "auto" : "none";
});
gui.add(config, "reset");
var updater = new _Events_update__WEBPACK_IMPORTED_MODULE_1__["default"]();
(0,_cssLoop__WEBPACK_IMPORTED_MODULE_2__.cssLoop)();
var original = new _original__WEBPACK_IMPORTED_MODULE_0__["default"]();
var canvas = new _canvas__WEBPACK_IMPORTED_MODULE_3__["default"]();
updater.on(function (diff) {
  if (config.originalUpdate) original.update(diff);
  if (config.canvasUpdate) canvas.update(diff); // performanceDom.textContent = `${diff}`;
});

/***/ }),

/***/ "./src/js/Main/top/original.js":
/*!*************************************!*\
  !*** ./src/js/Main/top/original.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Original)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");




var Original = /*#__PURE__*/function () {
  function Original() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Original);

    this.setup();
    this.setEvents();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Original, [{
    key: "setup",
    value: function setup() {
      this.currentPosX = 0;
      this.speed = {
        value: 0.5
      };
      this.v = 0;
      this.wrap = document.querySelector(".original");
      this.inner = this.wrap.querySelector(".original .loop_inner");
      this.resetPoint = this.inner.clientWidth * 0.5;
    }
  }, {
    key: "update",
    value: function update(diff) {
      var frameRate = Math.min(diff / (1 / 60 * 1000), 1);
      this.currentPosX += this.speed.value * frameRate; // this.v += (this.currentPosX - this.v) * 0.05;

      this.v = this.currentPosX;
      this.inner.style.transform = "translate3d(".concat(-this.v, "px, 0px, 1px)");

      if (this.v > this.resetPoint) {
        this.v = 0;
        this.currentPosX = this.currentPosX - this.resetPoint;
      }
    }
  }, {
    key: "onEnter",
    value: function onEnter() {
      // this.speed.value = 3;
      if (this.tl) this.tl.kill();
      this.tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      this.tl.to(this.speed, 2, {
        value: 3,
        ease: "expo.out"
      });
    }
  }, {
    key: "onLeave",
    value: function onLeave() {
      // this.speed.value = 0.5;
      if (this.tl) this.tl.kill();
      this.tl = gsap__WEBPACK_IMPORTED_MODULE_2__["default"].timeline();
      this.tl.to(this.speed, 2, {
        value: 0.5,
        ease: "expo.out"
      });
    }
  }, {
    key: "setEvents",
    value: function setEvents() {
      this.wrap.addEventListener("mouseenter", this.onEnter.bind(this));
      this.wrap.addEventListener("mouseleave", this.onLeave.bind(this));
    }
  }]);

  return Original;
}();



/***/ }),

/***/ "./src/js/Perfomance/index.js":
/*!************************************!*\
  !*** ./src/js/Perfomance/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Perfomance)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var width = 100;
var height = 80;

var Perfomance = /*#__PURE__*/function () {
  function Perfomance() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Perfomance);

    this.setup();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Perfomance, [{
    key: "setup",
    value: function setup() {
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.canvas.width = width * window.devicePixelRatio;
      this.canvas.height = height * window.devicePixelRatio;
      this.canvas.style.width = width + "px";
      this.canvas.style.height = height + "px";
      this.canvas.style.position = "fixed";
      this.canvas.style.bottom = "0px";
      this.canvas.style.right = "0px";
      this.canvas.style.backgroundColor = "rgba(0,0,0,0.8)";
      document.body.appendChild(this.canvas);
      this.frame = 0;
      this._frame = -1;
    }
  }, {
    key: "update",
    value: function update(d) {
      this.frame = d;
      if (d == 0) return;
      ++this._frame;
      var frame = this._frame % this.canvas.width;
      var frameRate = 1 / (d / (1 / 60 * 1000)); //

      if (this._frame % this.canvas.width == 0) this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = "rgba(2,247,38,0.5)";
      this.ctx.fillRect(frame, this.canvas.height, 1, -this.canvas.height * 0.5 * frameRate); // this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return Perfomance;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCaUMsZUFBbEIsR0FBb0MsaUJBQXBDO0FBRUF6SCxNQUFBQSxRQUFRLENBQUNDLElBQVQsQ0FBY0MsV0FBZCxDQUEwQixLQUFLNEIsTUFBL0I7QUFFQSxXQUFLekIsS0FBTCxHQUFhLENBQWI7QUFDQSxXQUFLcUgsTUFBTCxHQUFjLENBQUMsQ0FBZjtBQUNEOzs7V0FFRCxnQkFBT2hILENBQVAsRUFBVTtBQUNSLFdBQUtMLEtBQUwsR0FBYUssQ0FBYjtBQUVBLFVBQUlBLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDWixRQUFFLEtBQUtnSCxNQUFQO0FBQ0EsVUFBTXJILEtBQUssR0FBRyxLQUFLcUgsTUFBTCxHQUFjLEtBQUs1RixNQUFMLENBQVlxQyxLQUF4QztBQUNBLFVBQU1KLFNBQVMsR0FBRyxLQUFLckQsQ0FBQyxJQUFLLElBQUksRUFBTCxHQUFXLElBQWYsQ0FBTixDQUFsQixDQU5RLENBT1I7O0FBQ0EsVUFBSSxLQUFLZ0gsTUFBTCxHQUFjLEtBQUs1RixNQUFMLENBQVlxQyxLQUExQixJQUFtQyxDQUF2QyxFQUNFLEtBQUtuQyxHQUFMLENBQVNrQyxTQUFULENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQUtwQyxNQUFMLENBQVlxQyxLQUFyQyxFQUE0QyxLQUFLckMsTUFBTCxDQUFZc0MsTUFBeEQ7QUFDRixXQUFLcEMsR0FBTCxDQUFTdUMsU0FBVCxHQUFxQixvQkFBckI7QUFDQSxXQUFLdkMsR0FBTCxDQUFTd0MsUUFBVCxDQUNFbkUsS0FERixFQUVFLEtBQUt5QixNQUFMLENBQVlzQyxNQUZkLEVBR0UsQ0FIRixFQUlFLENBQUMsS0FBS3RDLE1BQUwsQ0FBWXNDLE1BQWIsR0FBc0IsR0FBdEIsR0FBNEJMLFNBSjlCLEVBWFEsQ0FrQlI7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvanMvRXZlbnRzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2pzL01haW4vdG9wL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2pzL01haW4vdG9wL2Nzc0xvb3AuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9qcy9NYWluL3RvcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2pzL01haW4vdG9wL29yaWdpbmFsLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvanMvUGVyZm9tYW5jZS9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgU3RhdHMgZnJvbSBcInN0YXRzLmpzXCI7XG5pbXBvcnQgUGVyZm9tYW5jZSBmcm9tIFwiLi4vUGVyZm9tYW5jZVwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBkYXRlIHtcbiAgY29uc3RydWN0b3IoaXNTdGF0cyA9IHRydWUpIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuXG4gICAgaWYgKGlzU3RhdHMpIHtcbiAgICAgIC8vIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgIGltcG9ydChcInN0YXRzLmpzXCIpLnRoZW4oKGUpID0+IHtcbiAgICAgICAgdGhpcy5zdGF0cyA9IG5ldyBlLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zdGF0cy5zaG93UGFuZWwoMCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb20pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuaXNTdG9wID0gZmFsc2U7XG4gICAgdGhpcy5mcmFtZTtcbiAgICB0aGlzLl9hbW91bnRUaW1lID0gMDtcblxuICAgIC8vIHRoaXMucGVyZm9tYW5jZSA9IG5ldyBQZXJmb21hbmNlKCk7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIG9uKGNiID0gKGUpID0+IHt9KSB7XG4gICAgdGhpcy5ldmVudHMucHVzaChjYik7XG4gIH1cblxuICB1cGRhdGUoZCA9IDApIHtcbiAgICBjb25zdCBkaWZmID0gZCAtIHRoaXMuX2Ftb3VudFRpbWU7XG4gICAgaWYgKHRoaXMuaXNTdG9wKSB7XG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5mcmFtZSk7XG4gICAgICB0aGlzLl9hbW91bnRUaW1lID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdHMpIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICBjb25zdCBsID0gdGhpcy5ldmVudHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsOyBpbmRleCsrKSB7XG4gICAgICB0aGlzLmV2ZW50c1tpbmRleF0oZGlmZik7XG4gICAgfVxuICAgIGlmICh0aGlzLnN0YXRzKSB0aGlzLnN0YXRzLmVuZCgpO1xuICAgIHRoaXMuX2Ftb3VudFRpbWUgPSBkO1xuICAgIC8vIHRoaXMucGVyZm9tYW5jZS51cGRhdGUoZGlmZik7XG4gICAgdGhpcy5mcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cbn1cbiIsImNvbnN0IE1BUkdJTiA9IDE3O1xuY29uc3QgSEVJR0hUID0gMjg7XG5pbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuXG5jb25zdCBwaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc2V0RXZlbnRzKCk7XG4gIH1cblxuICBhc3luYyBzZXR1cCgpIHtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJjYW52YXNcIik7XG4gICAgdGhpcy5jdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbiAgICB0aGlzLmltZ3MgPSBbXTtcbiAgICB0aGlzLnNwZWVkID0ge1xuICAgICAgdmFsdWU6IDAuNSxcbiAgICB9O1xuXG4gICAgdGhpcy50bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICAgIGNvbnN0IHBhdGggPSBcIi4vYXNzZXRzL3Jlc291cmNlLzBcIjtcbiAgICBjb25zdCBpbWdQcm9taXNlID0gW107XG4gICAgdGhpcy5pbWdXaWR0aCA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSAxOyBpbmRleCA8PSA4OyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBwID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBwYXRoICsgaW5kZXggKyBcIi5wbmdcIjtcbiAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCB3ID1cbiAgICAgICAgICAgIChpbWcubmF0dXJhbFdpZHRoIC8gaW1nLm5hdHVyYWxIZWlnaHQpICogMjggKiBwaXhlbFJhdGlvICtcbiAgICAgICAgICAgIDE3ICogcGl4ZWxSYXRpbztcbiAgICAgICAgICB0aGlzLmltZ1dpZHRoICs9IHc7XG4gICAgICAgICAgcmVzb2x2ZShpbWcpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICBpbWdQcm9taXNlLnB1c2gocCk7XG4gICAgfVxuXG4gICAgY29uc3QgaW1ncyA9IGF3YWl0IFByb21pc2UuYWxsKGltZ1Byb21pc2UpO1xuICAgIHRoaXMuaW1ncyA9IGltZ3M7XG5cbiAgICB0aGlzLnYgPSAwO1xuXG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuXG4gICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG4gIH1cblxuICBzZXRFdmVudHMoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uSG92ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgdGhpcy5vbkhvdmVyT3V0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgb25Ib3ZlcigpIHtcbiAgICBpZiAodGhpcy50bCkgdGhpcy50bC5raWxsKCk7XG5cbiAgICB0aGlzLnRsID0gZ3NhcC50aW1lbGluZSgpO1xuICAgIGNvbnNvbGUubG9nKFwiaG92ZXIhXCIpO1xuICAgIHRoaXMudGwudG8odGhpcy5zcGVlZCwgMiwge1xuICAgICAgdmFsdWU6IDMsXG4gICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgfSk7XG4gIH1cblxuICBvbkhvdmVyT3V0KCkge1xuICAgIGlmICh0aGlzLnRsKSB0aGlzLnRsLmtpbGwoKTtcblxuICAgIHRoaXMudGwgPSBnc2FwLnRpbWVsaW5lKCk7XG4gICAgdGhpcy50bC50byh0aGlzLnNwZWVkLCAyLCB7XG4gICAgICB2YWx1ZTogMC41LFxuICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgIH0pO1xuICB9XG5cbiAgdXBkYXRlKGRpZmYpIHtcbiAgICBjb25zdCBmcmFtZVJhdGUgPSBNYXRoLm1pbihkaWZmIC8gKCgxIC8gNjApICogMTAwMCksIDEpO1xuICAgIGlmICghdGhpcy5pc0xvYWRlZCkgcmV0dXJuO1xuICAgIHRoaXMuY3R4LmNsZWFyUmVjdChcbiAgICAgIC0zMDAgKiBwaXhlbFJhdGlvLFxuICAgICAgMCxcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoICsgMzAwICogcGl4ZWxSYXRpbyxcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodFxuICAgICk7XG5cbiAgICB0aGlzLnYgLT0gdGhpcy5zcGVlZC52YWx1ZSAqIHBpeGVsUmF0aW8gKiBmcmFtZVJhdGU7XG5cbiAgICB0aGlzLnYgPSAoTWF0aC5hYnModGhpcy52KSAlIHRoaXMuaW1nV2lkdGgpICogLTE7XG4gICAgdGhpcy5kcmF3KCk7XG4gIH1cblxuICBkcmF3KCkge1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiI2JhYmFiYVwiO1xuICAgIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgdGhpcy5kcmF3SW1nKDAsIHRoaXMudik7XG4gIH1cblxuICBkcmF3SW1nKGluZGV4ID0gMCwgeCA9IDApIHtcbiAgICBjb25zdCBpbWcgPSB0aGlzLmltZ3NbaW5kZXggJSB0aGlzLmltZ3MubGVuZ3RoXTtcbiAgICBpZiAoIWltZykgcmV0dXJuO1xuICAgIGNvbnN0IGltZ1dpZHRoID0gKGltZy5uYXR1cmFsV2lkdGggLyBpbWcubmF0dXJhbEhlaWdodCkgKiBIRUlHSFQ7XG5cbiAgICBjb25zdCBfeCA9IHggKyBpbWdXaWR0aCAqIHBpeGVsUmF0aW8gKyBNQVJHSU4gKiBwaXhlbFJhdGlvO1xuXG4gICAgaWYgKF94ID49IDAgfHwgeCA+PSB3aW5kb3cuaW5uZXJXaWR0aCAqIHBpeGVsUmF0aW8pIHtcbiAgICAgIC8vICAgdGhpcy5kcmF3SW1nKGluZGV4ICsgMSwgX3gpO1xuXG4gICAgICBjb25zdCB5ID0gKHRoaXMuY2FudmFzLmhlaWdodCAtIEhFSUdIVCAqIHBpeGVsUmF0aW8pIC8gMjtcbiAgICAgIHRoaXMuY3R4LmRyYXdJbWFnZShcbiAgICAgICAgaW1nLFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICBpbWcubmF0dXJhbFdpZHRoLFxuICAgICAgICBpbWcubmF0dXJhbEhlaWdodCxcbiAgICAgICAgeCxcbiAgICAgICAgeSxcbiAgICAgICAgaW1nV2lkdGggKiBwaXhlbFJhdGlvLFxuICAgICAgICBIRUlHSFQgKiBwaXhlbFJhdGlvXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh4IDwgd2luZG93LmlubmVyV2lkdGggKiBwaXhlbFJhdGlvKVxuICAgICAgdGhpcy5kcmF3SW1nKChpbmRleCAlIHRoaXMuaW1ncy5sZW5ndGgpICsgMSwgX3gpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHBpeGVsUmF0aW87XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNzUgKiBwaXhlbFJhdGlvO1xuICB9XG59XG4iLCJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuZXhwb3J0IGNvbnN0IGNzc0xvb3AgPSAoKSA9PiB7XG4gIGNvbnN0IHdyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNzcy1sb29wXCIpO1xuXG4gIGNvbnN0IGl0ZW1zID0gd3JhcC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxvb3BfaXRlbVwiKTtcblxuICBsZXQgdyA9IDA7XG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGlmIChpID49IDgpIHJldHVybjtcbiAgICB3ICs9IGl0ZW0uY2xpZW50V2lkdGggKyAxNztcbiAgfSk7XG4gIGNvbnN0IHYgPSB7XG4gICAgdDogdyAvICgwLjUgKiA2MCksXG4gIH07XG4gIHdyYXAuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpZHRoXCIsIHcgKiAtMSArIFwicHhcIik7XG4gIC8vIHdyYXAuc3R5bGUuc2V0UHJvcGVydHkoXCItLXdpZHRoLWhvdmVyZFwiLCB3ICogLTEgKyBcInB4XCIpO1xuICB3cmFwLnN0eWxlLnNldFByb3BlcnR5KFwiLS1kdXJhdGlvblwiLCB2LnQgKyBcInNcIik7XG4gIHdyYXAuc3R5bGUuc2V0UHJvcGVydHkoXCItLWR1cmF0aW9uLWhvdmVyZFwiLCB2LnQgLyAzICsgXCJzXCIpO1xuICBjb25zdCBbYW5pbWF0aW9uXSA9IGRvY3VtZW50XG4gICAgLmdldEFuaW1hdGlvbnMoKVxuICAgIC5maWx0ZXIoKHsgYW5pbWF0aW9uTmFtZSB9KSA9PiBhbmltYXRpb25OYW1lID09IFwiYW5pbWF0aW9uXCIpO1xuICB3cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIChlKSA9PiB7XG4gICAgLy8gYW5pbWF0aW9uLmN1cnJlbnRUaW1lID0gMDtcbiAgICAvLyBjb25zdCBwZXIgPVxuICAgIGdzYXAudG8oYW5pbWF0aW9uLCAyLCB7XG4gICAgICBwbGF5YmFja1JhdGU6IDYsXG4gICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHdyYXAuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKGUpID0+IHtcbiAgICBnc2FwLnRvKGFuaW1hdGlvbiwgMiwge1xuICAgICAgcGxheWJhY2tSYXRlOiAxLFxuICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgIH0pO1xuICAgIC8vIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IDA7XG4gICAgLy8gY29uc3QgcGVyID0gYW5pbWF0aW9uLmN1cnJlbnRUaW1lICUgKHYudCAqIDEwMDApO1xuICAgIC8vIGFuaW1hdGlvbi5jdXJyZW50VGltZSA9IHBlcjtcbiAgICAvLyBnc2FwLnRvKHdyYXAsIDIsIHtcbiAgICAvLyAgIFwiLS1kdXJhdGlvblwiOiB3IC8gKDAuNSAqIDYwKSArIFwic1wiLFxuICAgIC8vICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgIC8vIH0pO1xuICAgIC8vIC8vIGdzYXAudG8odiwgMiwge1xuICAgIC8vIC8vICAgdDogdyAvICgwLjUgKiA2MCksXG4gICAgLy8gLy8gICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgLy8gLy8gICBvblVwZGF0ZSgpIHtcbiAgICAvLyAvLyAgICAgd3JhcC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZHVyYXRpb25cIiwgdi50ICsgXCJzXCIpO1xuICAgIC8vIC8vICAgfSxcbiAgICAvLyAvLyB9KTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImFuaW1hdGlvbmVuZFwiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJlbmRcIik7XG4gIH0pO1xufTtcbiIsImltcG9ydCBPcmlnaW5hbCBmcm9tIFwiLi9vcmlnaW5hbFwiO1xuaW1wb3J0IFVwZGF0ZSBmcm9tIFwiLi4vLi4vRXZlbnRzL3VwZGF0ZVwiO1xuaW1wb3J0IHsgY3NzTG9vcCB9IGZyb20gXCIuL2Nzc0xvb3BcIjtcblxuaW1wb3J0IENhbnZhcyBmcm9tIFwiLi9jYW52YXNcIjtcblxuaW1wb3J0IEdVSSBmcm9tIFwibGlsLWd1aVwiO1xuXG5sZXQgbWluID0gMTAwMDA7XG5sZXQgbWF4ID0gMDtcblxuY29uc3QgY29uZmlnID0ge1xuICBvcmlnaW5hbFVwZGF0ZTogdHJ1ZSxcbiAgY2FudmFzVXBkYXRlOiB0cnVlLFxuICByZXNldCgpIHtcbiAgICBtaW4gPSAxMDAwMDtcbiAgICBtYXggPSAwO1xuICB9LFxufTtcblxuY29uc3QgcGVyZm9ybWFuY2VEb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzLXBlcmZvbWFuY2VcIik7XG5cbmNvbnN0IGd1aSA9IG5ldyBHVUkoKTtcblxuZ3VpLmFkZChjb25maWcsIFwib3JpZ2luYWxVcGRhdGVcIikub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpZ2luYWxcIikuc3R5bGUucG9pbnRlckV2ZW50cyA9IHZhbHVlXG4gICAgPyBcImF1dG9cIlxuICAgIDogXCJub25lXCI7XG59KTtcbmd1aS5hZGQoY29uZmlnLCBcImNhbnZhc1VwZGF0ZVwiKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW52YXMtbG9vcFwiKS5zdHlsZS5wb2ludGVyRXZlbnRzID0gdmFsdWVcbiAgICA/IFwiYXV0b1wiXG4gICAgOiBcIm5vbmVcIjtcbn0pO1xuZ3VpLmFkZChjb25maWcsIFwicmVzZXRcIik7XG5jb25zdCB1cGRhdGVyID0gbmV3IFVwZGF0ZSgpO1xuY3NzTG9vcCgpO1xuY29uc3Qgb3JpZ2luYWwgPSBuZXcgT3JpZ2luYWwoKTtcbmNvbnN0IGNhbnZhcyA9IG5ldyBDYW52YXMoKTtcblxudXBkYXRlci5vbigoZGlmZikgPT4ge1xuICBpZiAoY29uZmlnLm9yaWdpbmFsVXBkYXRlKSBvcmlnaW5hbC51cGRhdGUoZGlmZik7XG4gIGlmIChjb25maWcuY2FudmFzVXBkYXRlKSBjYW52YXMudXBkYXRlKGRpZmYpO1xuXG4gIC8vIHBlcmZvcm1hbmNlRG9tLnRleHRDb250ZW50ID0gYCR7ZGlmZn1gO1xufSk7XG4iLCJpbXBvcnQgZ3NhcCBmcm9tIFwiZ3NhcFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3JpZ2luYWwge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zZXRFdmVudHMoKTtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuY3VycmVudFBvc1ggPSAwO1xuICAgIHRoaXMuc3BlZWQgPSB7IHZhbHVlOiAwLjUgfTtcbiAgICB0aGlzLnYgPSAwO1xuICAgIHRoaXMud3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3JpZ2luYWxcIik7XG4gICAgdGhpcy5pbm5lciA9IHRoaXMud3JhcC5xdWVyeVNlbGVjdG9yKFwiLm9yaWdpbmFsIC5sb29wX2lubmVyXCIpO1xuICAgIHRoaXMucmVzZXRQb2ludCA9IHRoaXMuaW5uZXIuY2xpZW50V2lkdGggKiAwLjU7XG4gIH1cblxuICB1cGRhdGUoZGlmZikge1xuICAgIGNvbnN0IGZyYW1lUmF0ZSA9IE1hdGgubWluKGRpZmYgLyAoKDEgLyA2MCkgKiAxMDAwKSwgMSk7XG4gICAgdGhpcy5jdXJyZW50UG9zWCArPSB0aGlzLnNwZWVkLnZhbHVlICogZnJhbWVSYXRlO1xuICAgIC8vIHRoaXMudiArPSAodGhpcy5jdXJyZW50UG9zWCAtIHRoaXMudikgKiAwLjA1O1xuICAgIHRoaXMudiA9IHRoaXMuY3VycmVudFBvc1g7XG4gICAgdGhpcy5pbm5lci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHstdGhpcy52fXB4LCAwcHgsIDFweClgO1xuICAgIGlmICh0aGlzLnYgPiB0aGlzLnJlc2V0UG9pbnQpIHtcbiAgICAgIHRoaXMudiA9IDA7XG4gICAgICB0aGlzLmN1cnJlbnRQb3NYID0gdGhpcy5jdXJyZW50UG9zWCAtIHRoaXMucmVzZXRQb2ludDtcbiAgICB9XG4gIH1cblxuICBvbkVudGVyKCkge1xuICAgIC8vIHRoaXMuc3BlZWQudmFsdWUgPSAzO1xuXG4gICAgaWYgKHRoaXMudGwpIHRoaXMudGwua2lsbCgpO1xuXG4gICAgdGhpcy50bCA9IGdzYXAudGltZWxpbmUoKTtcblxuICAgIHRoaXMudGwudG8odGhpcy5zcGVlZCwgMiwge1xuICAgICAgdmFsdWU6IDMsXG4gICAgICBlYXNlOiBcImV4cG8ub3V0XCIsXG4gICAgfSk7XG4gIH1cblxuICBvbkxlYXZlKCkge1xuICAgIC8vIHRoaXMuc3BlZWQudmFsdWUgPSAwLjU7XG5cbiAgICBpZiAodGhpcy50bCkgdGhpcy50bC5raWxsKCk7XG5cbiAgICB0aGlzLnRsID0gZ3NhcC50aW1lbGluZSgpO1xuXG4gICAgdGhpcy50bC50byh0aGlzLnNwZWVkLCAyLCB7XG4gICAgICB2YWx1ZTogMC41LFxuICAgICAgZWFzZTogXCJleHBvLm91dFwiLFxuICAgIH0pO1xuICB9XG5cbiAgc2V0RXZlbnRzKCkge1xuICAgIHRoaXMud3JhcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCB0aGlzLm9uRW50ZXIuYmluZCh0aGlzKSk7XG4gICAgdGhpcy53cmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIHRoaXMub25MZWF2ZS5iaW5kKHRoaXMpKTtcbiAgfVxufVxuIiwiY29uc3Qgd2lkdGggPSAxMDA7XG5jb25zdCBoZWlnaHQgPSA4MDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGVyZm9tYW5jZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogd2luZG93LmRldmljZVBpeGVsUmF0aW87XG5cbiAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgXCJweFwiO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xuICAgIHRoaXMuY2FudmFzLnN0eWxlLnJpZ2h0ID0gXCIwcHhcIjtcbiAgICB0aGlzLmNhbnZhcy5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwwLDAsMC44KVwiO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbiAgICB0aGlzLmZyYW1lID0gMDtcbiAgICB0aGlzLl9mcmFtZSA9IC0xO1xuICB9XG5cbiAgdXBkYXRlKGQpIHtcbiAgICB0aGlzLmZyYW1lID0gZDtcblxuICAgIGlmIChkID09IDApIHJldHVybjtcbiAgICArK3RoaXMuX2ZyYW1lO1xuICAgIGNvbnN0IGZyYW1lID0gdGhpcy5fZnJhbWUgJSB0aGlzLmNhbnZhcy53aWR0aDtcbiAgICBjb25zdCBmcmFtZVJhdGUgPSAxIC8gKGQgLyAoKDEgLyA2MCkgKiAxMDAwKSk7XG4gICAgLy9cbiAgICBpZiAodGhpcy5fZnJhbWUgJSB0aGlzLmNhbnZhcy53aWR0aCA9PSAwKVxuICAgICAgdGhpcy5jdHguY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwicmdiYSgyLDI0NywzOCwwLjUpXCI7XG4gICAgdGhpcy5jdHguZmlsbFJlY3QoXG4gICAgICBmcmFtZSxcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCxcbiAgICAgIDEsXG4gICAgICAtdGhpcy5jYW52YXMuaGVpZ2h0ICogMC41ICogZnJhbWVSYXRlXG4gICAgKTtcblxuICAgIC8vIHRoaXMuY3R4LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUGVyZm9tYW5jZSIsIlVwZGF0ZSIsImlzU3RhdHMiLCJldmVudHMiLCJ0aGVuIiwiZSIsInN0YXRzIiwic2hvd1BhbmVsIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJkb20iLCJpc1N0b3AiLCJmcmFtZSIsIl9hbW91bnRUaW1lIiwidXBkYXRlIiwiY2IiLCJwdXNoIiwiZCIsImRpZmYiLCJ3aW5kb3ciLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImJlZ2luIiwibCIsImxlbmd0aCIsImluZGV4IiwiZW5kIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYmluZCIsIk1BUkdJTiIsIkhFSUdIVCIsImdzYXAiLCJwaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyIsIkNhbnZhcyIsImlzTG9hZGVkIiwic2V0dXAiLCJzZXRFdmVudHMiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiY3R4IiwiZ2V0Q29udGV4dCIsImltZ3MiLCJzcGVlZCIsInZhbHVlIiwidGwiLCJ0aW1lbGluZSIsInBhdGgiLCJpbWdQcm9taXNlIiwiaW1nV2lkdGgiLCJwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpbWciLCJJbWFnZSIsInNyYyIsIm9ubG9hZCIsInciLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwiYWxsIiwidiIsIm9uUmVzaXplIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uSG92ZXIiLCJvbkhvdmVyT3V0Iiwia2lsbCIsImNvbnNvbGUiLCJsb2ciLCJ0byIsImVhc2UiLCJmcmFtZVJhdGUiLCJNYXRoIiwibWluIiwiY2xlYXJSZWN0Iiwid2lkdGgiLCJoZWlnaHQiLCJhYnMiLCJkcmF3IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJkcmF3SW1nIiwieCIsIl94IiwiaW5uZXJXaWR0aCIsInkiLCJkcmF3SW1hZ2UiLCJjc3NMb29wIiwid3JhcCIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwiaSIsImNsaWVudFdpZHRoIiwidCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJnZXRBbmltYXRpb25zIiwiZmlsdGVyIiwiYW5pbWF0aW9uTmFtZSIsImFuaW1hdGlvbiIsInBsYXliYWNrUmF0ZSIsIk9yaWdpbmFsIiwiR1VJIiwibWF4IiwiY29uZmlnIiwib3JpZ2luYWxVcGRhdGUiLCJjYW52YXNVcGRhdGUiLCJyZXNldCIsInBlcmZvcm1hbmNlRG9tIiwiZ2V0RWxlbWVudEJ5SWQiLCJndWkiLCJhZGQiLCJvbkNoYW5nZSIsInBvaW50ZXJFdmVudHMiLCJ1cGRhdGVyIiwib3JpZ2luYWwiLCJvbiIsImN1cnJlbnRQb3NYIiwiaW5uZXIiLCJyZXNldFBvaW50IiwidHJhbnNmb3JtIiwib25FbnRlciIsIm9uTGVhdmUiLCJjcmVhdGVFbGVtZW50IiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsImJhY2tncm91bmRDb2xvciIsIl9mcmFtZSJdLCJzb3VyY2VSb290IjoiIn0=