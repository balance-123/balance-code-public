"use strict";
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([["src_js_Main_gpgpu_index_js"],{

/***/ "./src/js/Events/resize.js":
/*!*********************************!*\
  !*** ./src/js/Events/resize.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Resize)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Resize = /*#__PURE__*/function () {
  function Resize() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Resize);

    this.events = [];
    this.timer;
    this.handler = this.onResize.bind(this);
    window.addEventListener("resize", this.handler);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Resize, [{
    key: "on",
    value: function on() {
      var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (e) {};
      this.events.push(cb);
    }
  }, {
    key: "onResize",
    value: function onResize(e) {
      var _this = this;

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.events.forEach(function (cb) {
          cb(e);
        });
      }, 100);
    }
  }]);

  return Resize;
}();



/***/ }),

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
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stats.js */ "./node_modules/stats.js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_2__);




var Update = /*#__PURE__*/function () {
  function Update() {
    var isStats = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Update);

    this.events = [];

    if (isStats) {
      this.stats = new (stats_js__WEBPACK_IMPORTED_MODULE_2___default())();
      this.stats.showPanel(0);
      document.body.appendChild(this.stats.dom);
    }

    this.isStop = false;
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
      if (this.isStop) {
        window.requestAnimationFrame(this.update.bind(this));
        return;
      }

      this.stats.begin();
      var l = this.events.length;

      for (var index = 0; index < l; index++) {
        this.events[index]();
      }

      this.stats.end();
      window.requestAnimationFrame(this.update.bind(this));
    }
  }]);

  return Update;
}();



/***/ }),

/***/ "./src/js/Main/gpgpu/index.js":
/*!************************************!*\
  !*** ./src/js/Main/gpgpu/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Events_resize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Events/resize */ "./src/js/Events/resize.js");
/* harmony import */ var _Events_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Events/update */ "./src/js/Events/update.js");
/* harmony import */ var _THREE_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/THREE/renderer */ "./src/js/THREE/renderer.js");
/* harmony import */ var _THREE_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/THREE/camera */ "./src/js/THREE/camera.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _particle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./particle */ "./src/js/Main/gpgpu/particle/index.js");
 // import Scroll from "@/Events/scroll";





 //events

var resizer = new _Events_resize__WEBPACK_IMPORTED_MODULE_0__["default"]();
var updater = new _Events_update__WEBPACK_IMPORTED_MODULE_1__["default"](); //gl

var renderer = new _THREE_renderer__WEBPACK_IMPORTED_MODULE_2__["default"]({
  canvas: document.querySelector("canvas"),
  alpha: true,
  antialias: true
});
var camera = new _THREE_camera__WEBPACK_IMPORTED_MODULE_3__["default"]();
var scene = new three__WEBPACK_IMPORTED_MODULE_5__.Scene();
var particle = new _particle__WEBPACK_IMPORTED_MODULE_4__["default"](scene, renderer, camera);

var init = function init() {
  console.log(particle); //resize

  renderer.onResize(window.innerWidth, window.innerHeight);
  camera.onResize(window.innerWidth, window.innerHeight);
};

var events = function events() {
  resizer.on(function () {
    renderer.onResize(window.innerWidth, window.innerHeight);
    camera.onResize(window.innerWidth, window.innerHeight);
  });
  updater.on(function () {
    particle.update();
    renderer.render(scene, camera);
  });
};

init();
events();

/***/ }),

/***/ "./src/js/Main/gpgpu/particle/index.js":
/*!*********************************************!*\
  !*** ./src/js/Main/gpgpu/particle/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Particle)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var three_examples_jsm_misc_GPUComputationRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/misc/GPUComputationRenderer.js */ "./node_modules/three/examples/jsm/misc/GPUComputationRenderer.js");
/* harmony import */ var _computeShaderPosition_glsl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./computeShaderPosition.glsl */ "./src/js/Main/gpgpu/particle/computeShaderPosition.glsl");
/* harmony import */ var _computeShaderVelocity_glsl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./computeShaderVelocity.glsl */ "./src/js/Main/gpgpu/particle/computeShaderVelocity.glsl");
/* harmony import */ var _vert_glsl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vert.glsl */ "./src/js/Main/gpgpu/particle/vert.glsl");
/* harmony import */ var _frag_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./frag.glsl */ "./src/js/Main/gpgpu/particle/frag.glsl");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");





// import frag from "./shader.frag";
// console.log(frag);

var WIDTH = Math.pow(2, 9);
var NUM = WIDTH * WIDTH;




console.log(_vert_glsl__WEBPACK_IMPORTED_MODULE_8__["default"]);


var Particle = /*#__PURE__*/function () {
  function Particle(scene, renderer, camera) {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Particle);

    this.gpuCompute = new three_examples_jsm_misc_GPUComputationRenderer_js__WEBPACK_IMPORTED_MODULE_5__.GPUComputationRenderer(WIDTH, WIDTH, renderer);
    this.camera = camera;
    this.scene = scene;
    this.calPositionWorker = new Worker("../assets/js/calPosition.js");

    this.callBackWebWorker = function (data) {};

    this.calPositionWorker.addEventListener("message", function (_ref) {
      var data = _ref.data;

      _this.callBackWebWorker(data);
    }, false);
    this.isSteped = false;
    this.setup();
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Particle, [{
    key: "setup",
    value: function () {
      var _setup = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
        var dtPosition, dtVelocity;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dtPosition = this.gpuCompute.createTexture();
                dtVelocity = this.gpuCompute.createTexture();
                _context.next = 4;
                return this.fillTextures(dtPosition, dtVelocity);

              case 4:
                this.velocityVariable = this.gpuCompute.addVariable("textureVelocity", _computeShaderVelocity_glsl__WEBPACK_IMPORTED_MODULE_7__["default"], dtVelocity);
                this.positionVariable = this.gpuCompute.addVariable("texturePosition", _computeShaderPosition_glsl__WEBPACK_IMPORTED_MODULE_6__["default"], dtPosition);
                this.gpuCompute.setVariableDependencies(this.velocityVariable, [this.positionVariable, this.velocityVariable]);
                this.gpuCompute.setVariableDependencies(this.positionVariable, [this.positionVariable, this.velocityVariable]);
                this.gpuCompute.init();
                this.initMesh(); // const geometry = new THREE.BufferGeometry();
                // const positions = new Float32Array(NUM * 3);
                // let i = 0;
                // for (let index = 0; index < NUM; index++) {
                //   positions[i++] = 0;
                //   positions[i++] = 0;
                //   positions[i++] = 0;
                // }
                // const uvs = new Float32Array(NUM * 2);
                // i = 0;
                // for (let j = 0; j < WIDTH; j++) {
                //   for (var u = 0; u < WIDTH; u++) {
                //     uvs[i++] = u / (WIDTH - 1);
                //     uvs[i++] = j / (WIDTH - 1);
                //   }
                // }
                // geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
                // geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
                // this.uniforms = {
                //   texturePosition: { value: null },
                //   textureVelocity: { value: null },
                //   cameraConstant: { value: this.cameraConstant },
                //   u_Texture: {
                //     value: new THREE.TextureLoader().load("../assets/img/01.jpeg"),
                //   },
                // };
                // const material = new THREE.ShaderMaterial({
                //   uniforms: this.uniforms,
                //   vertexShader: vert,
                //   fragmentShader: frag,
                // });
                // material.extensions.drawBuffers = true;
                // this.obj = new THREE.Points(geometry, material);
                // this.obj.matrixAutoUpdate = false;
                // this.obj.updateMatrix();
                // this.obj.frustumCulled = false;
                // this.scene.add(this.obj);

                this.isSteped = true;

              case 11:
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
    key: "fillTextures",
    value: function () {
      var _fillTextures = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(texturePosition, textureVelocity) {
        var _this2 = this;

        var posArray, velArray, p;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                posArray = texturePosition.image.data;
                velArray = textureVelocity.image.data;
                this.calPositionWorker.postMessage({
                  posArray: posArray,
                  velArray: velArray
                });
                p = new Promise(function (resolve) {
                  _this2.callBackWebWorker = function (data) {
                    var _data = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data, 2),
                        _posArray = _data[0],
                        _velArray = _data[1];

                    texturePosition.image.data = _posArray;
                    textureVelocity.image.data = _velArray;
                    resolve();
                  };
                });
                _context2.next = 6;
                return p;

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fillTextures(_x, _x2) {
        return _fillTextures.apply(this, arguments);
      }

      return fillTextures;
    }()
  }, {
    key: "initMesh",
    value: function initMesh() {
      var size = Math.min(window.innerWidth, window.innerHeight);
      this.uniforms = {
        texturePosition: {
          value: null
        },
        textureVelocity: {
          value: null
        },
        cameraConstant: {
          value: this.cameraConstant
        },
        u_Texture: {
          value: new three__WEBPACK_IMPORTED_MODULE_10__.TextureLoader().load("../assets/img/01.jpeg")
        },
        resolution: {
          type: "v4",
          value: new three__WEBPACK_IMPORTED_MODULE_10__.Vector4()
        }
      };
      var geometry = new three__WEBPACK_IMPORTED_MODULE_10__.PlaneGeometry(size, size, WIDTH * 0.5, WIDTH * 0.5);
      this.uniforms.resolution.value.x = size;
      this.uniforms.resolution.value.y = size;
      this.uniforms.resolution.value.z = 1024;
      this.uniforms.resolution.value.w = 1024;
      var material = new three__WEBPACK_IMPORTED_MODULE_10__.ShaderMaterial({
        uniforms: this.uniforms,
        fragmentShader: _frag_glsl__WEBPACK_IMPORTED_MODULE_9__["default"],
        vertexShader: _vert_glsl__WEBPACK_IMPORTED_MODULE_8__["default"]
      });
      this.obj = new three__WEBPACK_IMPORTED_MODULE_10__.Mesh(geometry, material);
      this.obj.matrixAutoUpdate = false;
      this.obj.updateMatrix();
      this.obj.frustumCulled = false;
      this.scene.add(this.obj);
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.isSteped) return;
      this.gpuCompute.compute();
      this.uniforms.texturePosition.value = this.gpuCompute.getCurrentRenderTarget(this.positionVariable).texture;
      this.uniforms.textureVelocity.value = this.gpuCompute.getCurrentRenderTarget(this.velocityVariable).texture;
    }
  }, {
    key: "cameraConstant",
    get: function get() {
      return window.innerHeight / (Math.tan(three__WEBPACK_IMPORTED_MODULE_10__.Math.DEG2RAD * 0.5 * this.camera.fov) / this.camera.zoom);
    }
  }]);

  return Particle;
}();



/***/ }),

/***/ "./src/js/THREE/camera.js":
/*!********************************!*\
  !*** ./src/js/THREE/camera.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Camera = /*#__PURE__*/function (_PerspectiveCamera) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Camera, _PerspectiveCamera);

  var _super = _createSuper(Camera);

  function Camera() {
    var near = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var far = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50000;
    var fov = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 75;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Camera);

    return _super.call(this, fov, 1, near, far);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Camera, [{
    key: "onResize",
    value: function onResize(w, h) {
      this.height = h;
      this.aspect = w / h;
      this.position.z = this.positionZ; // this.position.z = 5;

      this.lookAt(new three__WEBPACK_IMPORTED_MODULE_5__.Vector3());
      this.updateProjectionMatrix();
    }
  }, {
    key: "positionZ",
    get: function get() {
      var vFov = this.fov * (Math.PI / 180);
      var z = this.height / (2 * Math.tan(vFov * 0.5));
      return z;
    }
  }]);

  return Camera;
}(three__WEBPACK_IMPORTED_MODULE_5__.PerspectiveCamera);



/***/ }),

/***/ "./src/js/THREE/renderer.js":
/*!**********************************!*\
  !*** ./src/js/THREE/renderer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Renderer)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }



var Renderer = /*#__PURE__*/function (_WebGLRenderer) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Renderer, _WebGLRenderer);

  var _super = _createSuper(Renderer);

  function Renderer(props) {
    var _this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Renderer);

    _this = _super.call(this, props);
    _this.outputEncoding = three__WEBPACK_IMPORTED_MODULE_5__.sRGBEncoding;
    _this.physicallyCorrectLights = true;
    _this.autoClear = true;
    return _this;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Renderer, [{
    key: "onResize",
    value: function onResize(width, height) {
      this.setSize(width, height);
      this.setPixelRatio(window.devicePixelRatio);
    }
  }]);

  return Renderer;
}(three__WEBPACK_IMPORTED_MODULE_5__.WebGLRenderer);



/***/ }),

/***/ "./src/js/Main/gpgpu/particle/computeShaderPosition.glsl":
/*!***************************************************************!*\
  !*** ./src/js/Main/gpgpu/particle/computeShaderPosition.glsl ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n#define delta (1.0 / 60.0)\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  vec4 tmpPos = texture2D(texturePosition, uv);\n  vec3 pos = tmpPos.xyz;\n  vec4 tmpVel = texture2D(textureVelocity, uv);\n  vec3 vel = tmpVel.xyz;\n  pos += vel * delta;\n  gl_FragColor = vec4(pos, 1.0);\n}");

/***/ }),

/***/ "./src/js/Main/gpgpu/particle/computeShaderVelocity.glsl":
/*!***************************************************************!*\
  !*** ./src/js/Main/gpgpu/particle/computeShaderVelocity.glsl ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n//\n// Description : Array and textureless GLSL 2D simplex noise function.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : ijm\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec2 mod289(vec2 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec3 permute(vec3 x) {\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nfloat snoise(vec2 v)\n  {\n  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                     -0.577350269189626,  // -1.0 + 2.0 * C.x\n                      0.024390243902439); // 1.0 / 41.0\n// First corner\n  vec2 i  = floor(v + dot(v, C.yy) );\n  vec2 x0 = v -   i + dot(i, C.xx);\n\n// Other corners\n  vec2 i1;\n  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0\n  //i1.y = 1.0 - i1.x;\n  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n  // x0 = x0 - 0.0 + 0.0 * C.xx ;\n  // x1 = x0 - i1 + 1.0 * C.xx ;\n  // x2 = x0 - 1.0 + 2.0 * C.xx ;\n  vec4 x12 = x0.xyxy + C.xxzz;\n  x12.xy -= i1;\n\n// Permutations\n  i = mod289(i); // Avoid truncation effects in permutation\n  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n    + i.x + vec3(0.0, i1.x, 1.0 ));\n\n  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n  m = m*m ;\n  m = m*m ;\n\n// Gradients: 41 points uniformly over a line, mapped onto a diamond.\n// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)\n\n  vec3 x = 2.0 * fract(p * C.www) - 1.0;\n  vec3 h = abs(x) - 0.5;\n  vec3 ox = floor(x + 0.5);\n  vec3 a0 = x - ox;\n\n// Normalise gradients implicitly by scaling m\n// Approximation of: m *= inversesqrt( a0*a0 + h*h );\n  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n\n// Compute final noise value at P\n  vec3 g;\n  g.x  = a0.x  * x0.x  + h.x  * x0.y;\n  g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n  return 130.0 * dot(m, g);\n}\n\n#include <common>\n\n// timeを渡す\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / resolution.xy;\n  float idParticle = uv.y * resolution.x + uv.x;\n  vec4 tmpVel = texture2D(textureVelocity, uv);\n  vec3 vel = vec3(snoise(uv) * 10.);\n  // vel.y += 0.1 * uv.x;\n  // snoise3(tmpVel.xyz);\n\n  \n\n  gl_FragColor = vec4(vel.xyz, 1.0);\n}");

/***/ }),

/***/ "./src/js/Main/gpgpu/particle/frag.glsl":
/*!**********************************************!*\
  !*** ./src/js/Main/gpgpu/particle/frag.glsl ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n\n// varying vec4 vColor;\nuniform sampler2D u_Texture;\nuniform vec4 resolution;\nvarying vec2 vUv;\nvoid main() {\n\n  vec2 ratio = vec2(\n      max((resolution.x / resolution.y) / (resolution.z / resolution.w), 1.0),\n      max((resolution.y / resolution.x) / (resolution.w / resolution.z), 1.0));\n  vec2 uv = vec2(vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,\n                 vUv.y * ratio.y + (1.0 - ratio.y) * 0.5);\n  gl_FragColor = texture2D(u_Texture, uv);\n}");

/***/ }),

/***/ "./src/js/Main/gpgpu/particle/vert.glsl":
/*!**********************************************!*\
  !*** ./src/js/Main/gpgpu/particle/vert.glsl ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#define GLSLIFY 1\n// #pragma glslify : snoise3 = require(glsl - noise / simplex / 3d.glsl)\nuniform sampler2D texturePosition;\nuniform float cameraConstant;\nuniform float density;\n// varying vec4 vColor;\nvarying vec2 vUv;\nuniform float radius;\n\nvoid main() {\n  vec4 posTemp = texture2D(texturePosition, uv);\n  vec3 pos = posTemp.xyz;\n  // // vColor = vec4(1.0, 0.0, 1.0, 1.0);\n\n  // vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\n  // gl_PointSize = 8.;\n\n  // vUv = pos.xy;\n\n  // gl_Position = projectionMatrix * mvPosition;\n\n  vUv = uv;\n  vec4 projected =\n      projectionMatrix * modelViewMatrix * vec4(position + pos, 1.0);\n\n  gl_Position = projected;\n}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWUsNkNBQTZDLDhCQUE4QiwwQkFBMEIsbUJBQW1CLGVBQWUseUxBQXlMLHVIQUF1SCw0Q0FBNEMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQ0F0ZixpRUFBZSxnSUFBZ0ksK0JBQStCLHdCQUF3Qix5QkFBeUIsbUJBQW1CLHVCQUF1QixpQkFBaUIsa0RBQWtELDJCQUEyQiw0Q0FBNEMsNERBQTRELHlCQUF5QixzQkFBc0IscURBQXFELGVBQWUsMkZBQTJGLDhCQUE4QixHQUFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2pzL0V2ZW50cy9yZXNpemUuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9qcy9FdmVudHMvdXBkYXRlLmpzIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvanMvTWFpbi9ncGdwdS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2pzL01haW4vZ3BncHUvcGFydGljbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9qcy9USFJFRS9jYW1lcmEuanMiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9qcy9USFJFRS9yZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9wbGF5Z3JvdW5kLy4vc3JjL2pzL01haW4vZ3BncHUvcGFydGljbGUvY29tcHV0ZVNoYWRlclBvc2l0aW9uLmdsc2wiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9qcy9NYWluL2dwZ3B1L3BhcnRpY2xlL2NvbXB1dGVTaGFkZXJWZWxvY2l0eS5nbHNsIiwid2VicGFjazovL3BsYXlncm91bmQvLi9zcmMvanMvTWFpbi9ncGdwdS9wYXJ0aWNsZS9mcmFnLmdsc2wiLCJ3ZWJwYWNrOi8vcGxheWdyb3VuZC8uL3NyYy9qcy9NYWluL2dwZ3B1L3BhcnRpY2xlL3ZlcnQuZ2xzbCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNpemUge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IFtdO1xuICAgIHRoaXMudGltZXI7XG4gICAgdGhpcy5oYW5kbGVyID0gdGhpcy5vblJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlcik7XG4gIH1cblxuICBvbihjYiA9IChlKSA9PiB7fSkge1xuICAgIHRoaXMuZXZlbnRzLnB1c2goY2IpO1xuICB9XG5cbiAgb25SZXNpemUoZSkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChjYikgPT4ge1xuICAgICAgICBjYihlKTtcbiAgICAgIH0pO1xuICAgIH0sIDEwMCk7XG4gIH1cbn1cbiIsImltcG9ydCBTdGF0cyBmcm9tIFwic3RhdHMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVwZGF0ZSB7XG4gIGNvbnN0cnVjdG9yKGlzU3RhdHMgPSB0cnVlKSB7XG4gICAgdGhpcy5ldmVudHMgPSBbXTtcblxuICAgIGlmIChpc1N0YXRzKSB7XG4gICAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgICB0aGlzLnN0YXRzLnNob3dQYW5lbCgwKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb20pO1xuICAgIH1cbiAgICB0aGlzLmlzU3RvcCA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBvbihjYiA9IChlKSA9PiB7fSkge1xuICAgIHRoaXMuZXZlbnRzLnB1c2goY2IpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLmlzU3RvcCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuICAgIGNvbnN0IGwgPSB0aGlzLmV2ZW50cy5sZW5ndGg7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGw7IGluZGV4KyspIHtcbiAgICAgIHRoaXMuZXZlbnRzW2luZGV4XSgpO1xuICAgIH1cbiAgICB0aGlzLnN0YXRzLmVuZCgpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZXNpemUgZnJvbSBcIkAvRXZlbnRzL3Jlc2l6ZVwiO1xuLy8gaW1wb3J0IFNjcm9sbCBmcm9tIFwiQC9FdmVudHMvc2Nyb2xsXCI7XG5pbXBvcnQgVXBkYXRlIGZyb20gXCJAL0V2ZW50cy91cGRhdGVcIjtcblxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCJAL1RIUkVFL3JlbmRlcmVyXCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIkAvVEhSRUUvY2FtZXJhXCI7XG5cbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInRocmVlXCI7XG5cbmltcG9ydCBQYXJ0aWNsZSBmcm9tIFwiLi9wYXJ0aWNsZVwiO1xuXG4vL2V2ZW50c1xuY29uc3QgcmVzaXplciA9IG5ldyBSZXNpemUoKTtcbmNvbnN0IHVwZGF0ZXIgPSBuZXcgVXBkYXRlKCk7XG4vL2dsXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcih7XG4gIGNhbnZhczogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImNhbnZhc1wiKSxcbiAgYWxwaGE6IHRydWUsXG4gIGFudGlhbGlhczogdHJ1ZSxcbn0pO1xuY29uc3QgY2FtZXJhID0gbmV3IENhbWVyYSgpO1xuY29uc3Qgc2NlbmUgPSBuZXcgU2NlbmUoKTtcblxuY29uc3QgcGFydGljbGUgPSBuZXcgUGFydGljbGUoc2NlbmUsIHJlbmRlcmVyLCBjYW1lcmEpO1xuXG5jb25zdCBpbml0ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhwYXJ0aWNsZSk7XG4gIC8vcmVzaXplXG4gIHJlbmRlcmVyLm9uUmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBjYW1lcmEub25SZXNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG59O1xuXG5jb25zdCBldmVudHMgPSAoKSA9PiB7XG4gIHJlc2l6ZXIub24oKCkgPT4ge1xuICAgIHJlbmRlcmVyLm9uUmVzaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICAgIGNhbWVyYS5vblJlc2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfSk7XG5cbiAgdXBkYXRlci5vbigoKSA9PiB7XG4gICAgcGFydGljbGUudXBkYXRlKCk7XG4gICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICB9KTtcbn07XG5cbmluaXQoKTtcbmV2ZW50cygpO1xuIiwiLy8gaW1wb3J0IGZyYWcgZnJvbSBcIi4vc2hhZGVyLmZyYWdcIjtcblxuLy8gY29uc29sZS5sb2coZnJhZyk7XG5cbmltcG9ydCB7IEdQVUNvbXB1dGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL21pc2MvR1BVQ29tcHV0YXRpb25SZW5kZXJlci5qc1wiO1xuXG5jb25zdCBXSURUSCA9IE1hdGgucG93KDIsIDkpO1xuY29uc3QgTlVNID0gV0lEVEggKiBXSURUSDtcbmltcG9ydCBwb3NpdGlvblNoYWRlciBmcm9tIFwiLi9jb21wdXRlU2hhZGVyUG9zaXRpb24uZ2xzbFwiO1xuaW1wb3J0IHZlbG9jaXR5U2hhZGVyIGZyb20gXCIuL2NvbXB1dGVTaGFkZXJWZWxvY2l0eS5nbHNsXCI7XG5pbXBvcnQgdmVydCBmcm9tIFwiLi92ZXJ0Lmdsc2xcIjtcbmltcG9ydCBmcmFnIGZyb20gXCIuL2ZyYWcuZ2xzbFwiO1xuXG5jb25zb2xlLmxvZyh2ZXJ0KTtcblxuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKHNjZW5lLCByZW5kZXJlciwgY2FtZXJhKSB7XG4gICAgdGhpcy5ncHVDb21wdXRlID0gbmV3IEdQVUNvbXB1dGF0aW9uUmVuZGVyZXIoV0lEVEgsIFdJRFRILCByZW5kZXJlcik7XG4gICAgdGhpcy5jYW1lcmEgPSBjYW1lcmE7XG4gICAgdGhpcy5zY2VuZSA9IHNjZW5lO1xuICAgIHRoaXMuY2FsUG9zaXRpb25Xb3JrZXIgPSBuZXcgV29ya2VyKFwiLi4vYXNzZXRzL2pzL2NhbFBvc2l0aW9uLmpzXCIpO1xuICAgIHRoaXMuY2FsbEJhY2tXZWJXb3JrZXIgPSAoZGF0YSkgPT4ge307XG4gICAgdGhpcy5jYWxQb3NpdGlvbldvcmtlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJtZXNzYWdlXCIsXG4gICAgICAoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5jYWxsQmFja1dlYldvcmtlcihkYXRhKTtcbiAgICAgIH0sXG4gICAgICBmYWxzZVxuICAgICk7XG5cbiAgICB0aGlzLmlzU3RlcGVkID0gZmFsc2U7XG4gICAgdGhpcy5zZXR1cCgpO1xuICB9XG5cbiAgYXN5bmMgc2V0dXAoKSB7XG4gICAgY29uc3QgZHRQb3NpdGlvbiA9IHRoaXMuZ3B1Q29tcHV0ZS5jcmVhdGVUZXh0dXJlKCk7XG4gICAgY29uc3QgZHRWZWxvY2l0eSA9IHRoaXMuZ3B1Q29tcHV0ZS5jcmVhdGVUZXh0dXJlKCk7XG4gICAgYXdhaXQgdGhpcy5maWxsVGV4dHVyZXMoZHRQb3NpdGlvbiwgZHRWZWxvY2l0eSk7XG5cbiAgICB0aGlzLnZlbG9jaXR5VmFyaWFibGUgPSB0aGlzLmdwdUNvbXB1dGUuYWRkVmFyaWFibGUoXG4gICAgICBcInRleHR1cmVWZWxvY2l0eVwiLFxuICAgICAgdmVsb2NpdHlTaGFkZXIsXG4gICAgICBkdFZlbG9jaXR5XG4gICAgKTtcblxuICAgIHRoaXMucG9zaXRpb25WYXJpYWJsZSA9IHRoaXMuZ3B1Q29tcHV0ZS5hZGRWYXJpYWJsZShcbiAgICAgIFwidGV4dHVyZVBvc2l0aW9uXCIsXG4gICAgICBwb3NpdGlvblNoYWRlcixcbiAgICAgIGR0UG9zaXRpb25cbiAgICApO1xuXG4gICAgdGhpcy5ncHVDb21wdXRlLnNldFZhcmlhYmxlRGVwZW5kZW5jaWVzKHRoaXMudmVsb2NpdHlWYXJpYWJsZSwgW1xuICAgICAgdGhpcy5wb3NpdGlvblZhcmlhYmxlLFxuICAgICAgdGhpcy52ZWxvY2l0eVZhcmlhYmxlLFxuICAgIF0pO1xuICAgIHRoaXMuZ3B1Q29tcHV0ZS5zZXRWYXJpYWJsZURlcGVuZGVuY2llcyh0aGlzLnBvc2l0aW9uVmFyaWFibGUsIFtcbiAgICAgIHRoaXMucG9zaXRpb25WYXJpYWJsZSxcbiAgICAgIHRoaXMudmVsb2NpdHlWYXJpYWJsZSxcbiAgICBdKTtcblxuICAgIHRoaXMuZ3B1Q29tcHV0ZS5pbml0KCk7XG5cbiAgICB0aGlzLmluaXRNZXNoKCk7XG5cbiAgICAvLyBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIC8vIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoTlVNICogMyk7XG4gICAgLy8gbGV0IGkgPSAwO1xuICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBOVU07IGluZGV4KyspIHtcbiAgICAvLyAgIHBvc2l0aW9uc1tpKytdID0gMDtcbiAgICAvLyAgIHBvc2l0aW9uc1tpKytdID0gMDtcbiAgICAvLyAgIHBvc2l0aW9uc1tpKytdID0gMDtcbiAgICAvLyB9XG5cbiAgICAvLyBjb25zdCB1dnMgPSBuZXcgRmxvYXQzMkFycmF5KE5VTSAqIDIpO1xuICAgIC8vIGkgPSAwO1xuICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgV0lEVEg7IGorKykge1xuICAgIC8vICAgZm9yICh2YXIgdSA9IDA7IHUgPCBXSURUSDsgdSsrKSB7XG4gICAgLy8gICAgIHV2c1tpKytdID0gdSAvIChXSURUSCAtIDEpO1xuICAgIC8vICAgICB1dnNbaSsrXSA9IGogLyAoV0lEVEggLSAxKTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xuICAgIC8vIGdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInV2XCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXZzLCAyKSk7XG5cbiAgICAvLyB0aGlzLnVuaWZvcm1zID0ge1xuICAgIC8vICAgdGV4dHVyZVBvc2l0aW9uOiB7IHZhbHVlOiBudWxsIH0sXG4gICAgLy8gICB0ZXh0dXJlVmVsb2NpdHk6IHsgdmFsdWU6IG51bGwgfSxcbiAgICAvLyAgIGNhbWVyYUNvbnN0YW50OiB7IHZhbHVlOiB0aGlzLmNhbWVyYUNvbnN0YW50IH0sXG4gICAgLy8gICB1X1RleHR1cmU6IHtcbiAgICAvLyAgICAgdmFsdWU6IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCkubG9hZChcIi4uL2Fzc2V0cy9pbWcvMDEuanBlZ1wiKSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfTtcblxuICAgIC8vIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAvLyAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgIC8vICAgdmVydGV4U2hhZGVyOiB2ZXJ0LFxuICAgIC8vICAgZnJhZ21lbnRTaGFkZXI6IGZyYWcsXG4gICAgLy8gfSk7XG5cbiAgICAvLyBtYXRlcmlhbC5leHRlbnNpb25zLmRyYXdCdWZmZXJzID0gdHJ1ZTtcblxuICAgIC8vIHRoaXMub2JqID0gbmV3IFRIUkVFLlBvaW50cyhnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIC8vIHRoaXMub2JqLm1hdHJpeEF1dG9VcGRhdGUgPSBmYWxzZTtcbiAgICAvLyB0aGlzLm9iai51cGRhdGVNYXRyaXgoKTtcblxuICAgIC8vIHRoaXMub2JqLmZydXN0dW1DdWxsZWQgPSBmYWxzZTtcblxuICAgIC8vIHRoaXMuc2NlbmUuYWRkKHRoaXMub2JqKTtcblxuICAgIHRoaXMuaXNTdGVwZWQgPSB0cnVlO1xuICB9XG5cbiAgYXN5bmMgZmlsbFRleHR1cmVzKHRleHR1cmVQb3NpdGlvbiwgdGV4dHVyZVZlbG9jaXR5KSB7XG4gICAgY29uc3QgcG9zQXJyYXkgPSB0ZXh0dXJlUG9zaXRpb24uaW1hZ2UuZGF0YTtcbiAgICBjb25zdCB2ZWxBcnJheSA9IHRleHR1cmVWZWxvY2l0eS5pbWFnZS5kYXRhO1xuXG4gICAgdGhpcy5jYWxQb3NpdGlvbldvcmtlci5wb3N0TWVzc2FnZSh7XG4gICAgICBwb3NBcnJheSxcbiAgICAgIHZlbEFycmF5LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICB0aGlzLmNhbGxCYWNrV2ViV29ya2VyID0gKGRhdGEpID0+IHtcbiAgICAgICAgY29uc3QgW19wb3NBcnJheSwgX3ZlbEFycmF5XSA9IGRhdGE7XG4gICAgICAgIHRleHR1cmVQb3NpdGlvbi5pbWFnZS5kYXRhID0gX3Bvc0FycmF5O1xuICAgICAgICB0ZXh0dXJlVmVsb2NpdHkuaW1hZ2UuZGF0YSA9IF92ZWxBcnJheTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfTtcbiAgICB9KTtcblxuICAgIGF3YWl0IHA7XG4gIH1cblxuICBpbml0TWVzaCgpIHtcbiAgICBjb25zdCBzaXplID0gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgdGhpcy51bmlmb3JtcyA9IHtcbiAgICAgIHRleHR1cmVQb3NpdGlvbjogeyB2YWx1ZTogbnVsbCB9LFxuICAgICAgdGV4dHVyZVZlbG9jaXR5OiB7IHZhbHVlOiBudWxsIH0sXG4gICAgICBjYW1lcmFDb25zdGFudDogeyB2YWx1ZTogdGhpcy5jYW1lcmFDb25zdGFudCB9LFxuICAgICAgdV9UZXh0dXJlOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoXCIuLi9hc3NldHMvaW1nLzAxLmpwZWdcIiksXG4gICAgICB9LFxuICAgICAgcmVzb2x1dGlvbjogeyB0eXBlOiBcInY0XCIsIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yNCgpIH0sXG4gICAgfTtcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KFxuICAgICAgc2l6ZSxcbiAgICAgIHNpemUsXG4gICAgICBXSURUSCAqIDAuNSxcbiAgICAgIFdJRFRIICogMC41XG4gICAgKTtcblxuICAgIHRoaXMudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS54ID0gc2l6ZTtcbiAgICB0aGlzLnVuaWZvcm1zLnJlc29sdXRpb24udmFsdWUueSA9IHNpemU7XG4gICAgdGhpcy51bmlmb3Jtcy5yZXNvbHV0aW9uLnZhbHVlLnogPSAxMDI0O1xuICAgIHRoaXMudW5pZm9ybXMucmVzb2x1dGlvbi52YWx1ZS53ID0gMTAyNDtcblxuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcbiAgICAgIHVuaWZvcm1zOiB0aGlzLnVuaWZvcm1zLFxuICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWcsXG4gICAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnQsXG4gICAgfSk7XG5cbiAgICB0aGlzLm9iaiA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG5cbiAgICB0aGlzLm9iai5tYXRyaXhBdXRvVXBkYXRlID0gZmFsc2U7XG4gICAgdGhpcy5vYmoudXBkYXRlTWF0cml4KCk7XG5cbiAgICB0aGlzLm9iai5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnNjZW5lLmFkZCh0aGlzLm9iaik7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzU3RlcGVkKSByZXR1cm47XG4gICAgdGhpcy5ncHVDb21wdXRlLmNvbXB1dGUoKTtcbiAgICB0aGlzLnVuaWZvcm1zLnRleHR1cmVQb3NpdGlvbi52YWx1ZSA9XG4gICAgICB0aGlzLmdwdUNvbXB1dGUuZ2V0Q3VycmVudFJlbmRlclRhcmdldCh0aGlzLnBvc2l0aW9uVmFyaWFibGUpLnRleHR1cmU7XG4gICAgdGhpcy51bmlmb3Jtcy50ZXh0dXJlVmVsb2NpdHkudmFsdWUgPVxuICAgICAgdGhpcy5ncHVDb21wdXRlLmdldEN1cnJlbnRSZW5kZXJUYXJnZXQodGhpcy52ZWxvY2l0eVZhcmlhYmxlKS50ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGNhbWVyYUNvbnN0YW50KCkge1xuICAgIHJldHVybiAoXG4gICAgICB3aW5kb3cuaW5uZXJIZWlnaHQgL1xuICAgICAgKE1hdGgudGFuKFRIUkVFLk1hdGguREVHMlJBRCAqIDAuNSAqIHRoaXMuY2FtZXJhLmZvdikgLyB0aGlzLmNhbWVyYS56b29tKVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBlcnNwZWN0aXZlQ2FtZXJhLCBWZWN0b3IzIH0gZnJvbSBcInRocmVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIFBlcnNwZWN0aXZlQ2FtZXJhIHtcbiAgY29uc3RydWN0b3IobmVhciA9IDEsIGZhciA9IDUwMDAwLCBmb3YgPSA3NSkge1xuICAgIHN1cGVyKGZvdiwgMSwgbmVhciwgZmFyKTtcbiAgfVxuXG4gIG9uUmVzaXplKHcsIGgpIHtcbiAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgdGhpcy5hc3BlY3QgPSB3IC8gaDtcbiAgICB0aGlzLnBvc2l0aW9uLnogPSB0aGlzLnBvc2l0aW9uWjtcbiAgICAvLyB0aGlzLnBvc2l0aW9uLnogPSA1O1xuICAgIHRoaXMubG9va0F0KG5ldyBWZWN0b3IzKCkpO1xuXG4gICAgdGhpcy51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gIH1cblxuICBnZXQgcG9zaXRpb25aKCkge1xuICAgIGNvbnN0IHZGb3YgPSB0aGlzLmZvdiAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICBjb25zdCB6ID0gdGhpcy5oZWlnaHQgLyAoMiAqIE1hdGgudGFuKHZGb3YgKiAwLjUpKTtcbiAgICByZXR1cm4gejtcbiAgfVxufVxuIiwiaW1wb3J0IHsgV2ViR0xSZW5kZXJlciwgc1JHQkVuY29kaW5nIH0gZnJvbSBcInRocmVlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlcmVyIGV4dGVuZHMgV2ViR0xSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMub3V0cHV0RW5jb2RpbmcgPSBzUkdCRW5jb2Rpbmc7XG4gICAgdGhpcy5waHlzaWNhbGx5Q29ycmVjdExpZ2h0cyA9IHRydWU7XG4gICAgdGhpcy5hdXRvQ2xlYXIgPSB0cnVlO1xuICB9XG5cbiAgb25SZXNpemUod2lkdGgsIGhlaWdodCkge1xuICAgIHRoaXMuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICB0aGlzLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBcIiNkZWZpbmUgR0xTTElGWSAxXFxuI2RlZmluZSBkZWx0YSAoMS4wIC8gNjAuMClcXG52b2lkIG1haW4oKSB7XFxuICB2ZWMyIHV2ID0gZ2xfRnJhZ0Nvb3JkLnh5IC8gcmVzb2x1dGlvbi54eTtcXG4gIHZlYzQgdG1wUG9zID0gdGV4dHVyZTJEKHRleHR1cmVQb3NpdGlvbiwgdXYpO1xcbiAgdmVjMyBwb3MgPSB0bXBQb3MueHl6O1xcbiAgdmVjNCB0bXBWZWwgPSB0ZXh0dXJlMkQodGV4dHVyZVZlbG9jaXR5LCB1dik7XFxuICB2ZWMzIHZlbCA9IHRtcFZlbC54eXo7XFxuICBwb3MgKz0gdmVsICogZGVsdGE7XFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHBvcywgMS4wKTtcXG59XCI7IiwiZXhwb3J0IGRlZmF1bHQgXCIjZGVmaW5lIEdMU0xJRlkgMVxcbi8vXFxuLy8gRGVzY3JpcHRpb24gOiBBcnJheSBhbmQgdGV4dHVyZWxlc3MgR0xTTCAyRCBzaW1wbGV4IG5vaXNlIGZ1bmN0aW9uLlxcbi8vICAgICAgQXV0aG9yIDogSWFuIE1jRXdhbiwgQXNoaW1hIEFydHMuXFxuLy8gIE1haW50YWluZXIgOiBpam1cXG4vLyAgICAgTGFzdG1vZCA6IDIwMTEwODIyIChpam0pXFxuLy8gICAgIExpY2Vuc2UgOiBDb3B5cmlnaHQgKEMpIDIwMTEgQXNoaW1hIEFydHMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXFxuLy8gICAgICAgICAgICAgICBEaXN0cmlidXRlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMSUNFTlNFIGZpbGUuXFxuLy8gICAgICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vYXNoaW1hL3dlYmdsLW5vaXNlXFxuLy9cXG5cXG52ZWMzIG1vZDI4OSh2ZWMzIHgpIHtcXG4gIHJldHVybiB4IC0gZmxvb3IoeCAqICgxLjAgLyAyODkuMCkpICogMjg5LjA7XFxufVxcblxcbnZlYzIgbW9kMjg5KHZlYzIgeCkge1xcbiAgcmV0dXJuIHggLSBmbG9vcih4ICogKDEuMCAvIDI4OS4wKSkgKiAyODkuMDtcXG59XFxuXFxudmVjMyBwZXJtdXRlKHZlYzMgeCkge1xcbiAgcmV0dXJuIG1vZDI4OSgoKHgqMzQuMCkrMS4wKSp4KTtcXG59XFxuXFxuZmxvYXQgc25vaXNlKHZlYzIgdilcXG4gIHtcXG4gIGNvbnN0IHZlYzQgQyA9IHZlYzQoMC4yMTEzMjQ4NjU0MDUxODcsICAvLyAoMy4wLXNxcnQoMy4wKSkvNi4wXFxuICAgICAgICAgICAgICAgICAgICAgIDAuMzY2MDI1NDAzNzg0NDM5LCAgLy8gMC41KihzcXJ0KDMuMCktMS4wKVxcbiAgICAgICAgICAgICAgICAgICAgIC0wLjU3NzM1MDI2OTE4OTYyNiwgIC8vIC0xLjAgKyAyLjAgKiBDLnhcXG4gICAgICAgICAgICAgICAgICAgICAgMC4wMjQzOTAyNDM5MDI0MzkpOyAvLyAxLjAgLyA0MS4wXFxuLy8gRmlyc3QgY29ybmVyXFxuICB2ZWMyIGkgID0gZmxvb3IodiArIGRvdCh2LCBDLnl5KSApO1xcbiAgdmVjMiB4MCA9IHYgLSAgIGkgKyBkb3QoaSwgQy54eCk7XFxuXFxuLy8gT3RoZXIgY29ybmVyc1xcbiAgdmVjMiBpMTtcXG4gIC8vaTEueCA9IHN0ZXAoIHgwLnksIHgwLnggKTsgLy8geDAueCA+IHgwLnkgPyAxLjAgOiAwLjBcXG4gIC8vaTEueSA9IDEuMCAtIGkxLng7XFxuICBpMSA9ICh4MC54ID4geDAueSkgPyB2ZWMyKDEuMCwgMC4wKSA6IHZlYzIoMC4wLCAxLjApO1xcbiAgLy8geDAgPSB4MCAtIDAuMCArIDAuMCAqIEMueHggO1xcbiAgLy8geDEgPSB4MCAtIGkxICsgMS4wICogQy54eCA7XFxuICAvLyB4MiA9IHgwIC0gMS4wICsgMi4wICogQy54eCA7XFxuICB2ZWM0IHgxMiA9IHgwLnh5eHkgKyBDLnh4eno7XFxuICB4MTIueHkgLT0gaTE7XFxuXFxuLy8gUGVybXV0YXRpb25zXFxuICBpID0gbW9kMjg5KGkpOyAvLyBBdm9pZCB0cnVuY2F0aW9uIGVmZmVjdHMgaW4gcGVybXV0YXRpb25cXG4gIHZlYzMgcCA9IHBlcm11dGUoIHBlcm11dGUoIGkueSArIHZlYzMoMC4wLCBpMS55LCAxLjAgKSlcXG4gICAgKyBpLnggKyB2ZWMzKDAuMCwgaTEueCwgMS4wICkpO1xcblxcbiAgdmVjMyBtID0gbWF4KDAuNSAtIHZlYzMoZG90KHgwLHgwKSwgZG90KHgxMi54eSx4MTIueHkpLCBkb3QoeDEyLnp3LHgxMi56dykpLCAwLjApO1xcbiAgbSA9IG0qbSA7XFxuICBtID0gbSptIDtcXG5cXG4vLyBHcmFkaWVudHM6IDQxIHBvaW50cyB1bmlmb3JtbHkgb3ZlciBhIGxpbmUsIG1hcHBlZCBvbnRvIGEgZGlhbW9uZC5cXG4vLyBUaGUgcmluZyBzaXplIDE3KjE3ID0gMjg5IGlzIGNsb3NlIHRvIGEgbXVsdGlwbGUgb2YgNDEgKDQxKjcgPSAyODcpXFxuXFxuICB2ZWMzIHggPSAyLjAgKiBmcmFjdChwICogQy53d3cpIC0gMS4wO1xcbiAgdmVjMyBoID0gYWJzKHgpIC0gMC41O1xcbiAgdmVjMyBveCA9IGZsb29yKHggKyAwLjUpO1xcbiAgdmVjMyBhMCA9IHggLSBveDtcXG5cXG4vLyBOb3JtYWxpc2UgZ3JhZGllbnRzIGltcGxpY2l0bHkgYnkgc2NhbGluZyBtXFxuLy8gQXBwcm94aW1hdGlvbiBvZjogbSAqPSBpbnZlcnNlc3FydCggYTAqYTAgKyBoKmggKTtcXG4gIG0gKj0gMS43OTI4NDI5MTQwMDE1OSAtIDAuODUzNzM0NzIwOTUzMTQgKiAoIGEwKmEwICsgaCpoICk7XFxuXFxuLy8gQ29tcHV0ZSBmaW5hbCBub2lzZSB2YWx1ZSBhdCBQXFxuICB2ZWMzIGc7XFxuICBnLnggID0gYTAueCAgKiB4MC54ICArIGgueCAgKiB4MC55O1xcbiAgZy55eiA9IGEwLnl6ICogeDEyLnh6ICsgaC55eiAqIHgxMi55dztcXG4gIHJldHVybiAxMzAuMCAqIGRvdChtLCBnKTtcXG59XFxuXFxuI2luY2x1ZGUgPGNvbW1vbj5cXG5cXG4vLyB0aW1l44KS5rih44GZXFxudm9pZCBtYWluKCkge1xcbiAgdmVjMiB1diA9IGdsX0ZyYWdDb29yZC54eSAvIHJlc29sdXRpb24ueHk7XFxuICBmbG9hdCBpZFBhcnRpY2xlID0gdXYueSAqIHJlc29sdXRpb24ueCArIHV2Lng7XFxuICB2ZWM0IHRtcFZlbCA9IHRleHR1cmUyRCh0ZXh0dXJlVmVsb2NpdHksIHV2KTtcXG4gIHZlYzMgdmVsID0gdmVjMyhzbm9pc2UodXYpICogMTAuKTtcXG4gIC8vIHZlbC55ICs9IDAuMSAqIHV2Lng7XFxuICAvLyBzbm9pc2UzKHRtcFZlbC54eXopO1xcblxcbiAgXFxuXFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHZlbC54eXosIDEuMCk7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5cXG4vLyB2YXJ5aW5nIHZlYzQgdkNvbG9yO1xcbnVuaWZvcm0gc2FtcGxlcjJEIHVfVGV4dHVyZTtcXG51bmlmb3JtIHZlYzQgcmVzb2x1dGlvbjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnZvaWQgbWFpbigpIHtcXG5cXG4gIHZlYzIgcmF0aW8gPSB2ZWMyKFxcbiAgICAgIG1heCgocmVzb2x1dGlvbi54IC8gcmVzb2x1dGlvbi55KSAvIChyZXNvbHV0aW9uLnogLyByZXNvbHV0aW9uLncpLCAxLjApLFxcbiAgICAgIG1heCgocmVzb2x1dGlvbi55IC8gcmVzb2x1dGlvbi54KSAvIChyZXNvbHV0aW9uLncgLyByZXNvbHV0aW9uLnopLCAxLjApKTtcXG4gIHZlYzIgdXYgPSB2ZWMyKHZVdi54ICogcmF0aW8ueCArICgxLjAgLSByYXRpby54KSAqIDAuNSxcXG4gICAgICAgICAgICAgICAgIHZVdi55ICogcmF0aW8ueSArICgxLjAgLSByYXRpby55KSAqIDAuNSk7XFxuICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV9UZXh0dXJlLCB1dik7XFxufVwiOyIsImV4cG9ydCBkZWZhdWx0IFwiI2RlZmluZSBHTFNMSUZZIDFcXG4vLyAjcHJhZ21hIGdsc2xpZnkgOiBzbm9pc2UzID0gcmVxdWlyZShnbHNsIC0gbm9pc2UgLyBzaW1wbGV4IC8gM2QuZ2xzbClcXG51bmlmb3JtIHNhbXBsZXIyRCB0ZXh0dXJlUG9zaXRpb247XFxudW5pZm9ybSBmbG9hdCBjYW1lcmFDb25zdGFudDtcXG51bmlmb3JtIGZsb2F0IGRlbnNpdHk7XFxuLy8gdmFyeWluZyB2ZWM0IHZDb2xvcjtcXG52YXJ5aW5nIHZlYzIgdlV2O1xcbnVuaWZvcm0gZmxvYXQgcmFkaXVzO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gIHZlYzQgcG9zVGVtcCA9IHRleHR1cmUyRCh0ZXh0dXJlUG9zaXRpb24sIHV2KTtcXG4gIHZlYzMgcG9zID0gcG9zVGVtcC54eXo7XFxuICAvLyAvLyB2Q29sb3IgPSB2ZWM0KDEuMCwgMC4wLCAxLjAsIDEuMCk7XFxuXFxuICAvLyB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvcywgMS4wKTtcXG4gIC8vIGdsX1BvaW50U2l6ZSA9IDguO1xcblxcbiAgLy8gdlV2ID0gcG9zLnh5O1xcblxcbiAgLy8gZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcXG5cXG4gIHZVdiA9IHV2O1xcbiAgdmVjNCBwcm9qZWN0ZWQgPVxcbiAgICAgIHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uICsgcG9zLCAxLjApO1xcblxcbiAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0ZWQ7XFxufVwiOyJdLCJuYW1lcyI6WyJSZXNpemUiLCJldmVudHMiLCJ0aW1lciIsImhhbmRsZXIiLCJvblJlc2l6ZSIsImJpbmQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY2IiLCJlIiwicHVzaCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJmb3JFYWNoIiwiU3RhdHMiLCJVcGRhdGUiLCJpc1N0YXRzIiwic3RhdHMiLCJzaG93UGFuZWwiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbSIsImlzU3RvcCIsInVwZGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImJlZ2luIiwibCIsImxlbmd0aCIsImluZGV4IiwiZW5kIiwiUmVuZGVyZXIiLCJDYW1lcmEiLCJTY2VuZSIsIlBhcnRpY2xlIiwicmVzaXplciIsInVwZGF0ZXIiLCJyZW5kZXJlciIsImNhbnZhcyIsInF1ZXJ5U2VsZWN0b3IiLCJhbHBoYSIsImFudGlhbGlhcyIsImNhbWVyYSIsInNjZW5lIiwicGFydGljbGUiLCJpbml0IiwiY29uc29sZSIsImxvZyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsIm9uIiwicmVuZGVyIiwiR1BVQ29tcHV0YXRpb25SZW5kZXJlciIsIldJRFRIIiwiTWF0aCIsInBvdyIsIk5VTSIsInBvc2l0aW9uU2hhZGVyIiwidmVsb2NpdHlTaGFkZXIiLCJ2ZXJ0IiwiZnJhZyIsIlRIUkVFIiwiZ3B1Q29tcHV0ZSIsImNhbFBvc2l0aW9uV29ya2VyIiwiV29ya2VyIiwiY2FsbEJhY2tXZWJXb3JrZXIiLCJkYXRhIiwiaXNTdGVwZWQiLCJzZXR1cCIsImR0UG9zaXRpb24iLCJjcmVhdGVUZXh0dXJlIiwiZHRWZWxvY2l0eSIsImZpbGxUZXh0dXJlcyIsInZlbG9jaXR5VmFyaWFibGUiLCJhZGRWYXJpYWJsZSIsInBvc2l0aW9uVmFyaWFibGUiLCJzZXRWYXJpYWJsZURlcGVuZGVuY2llcyIsImluaXRNZXNoIiwidGV4dHVyZVBvc2l0aW9uIiwidGV4dHVyZVZlbG9jaXR5IiwicG9zQXJyYXkiLCJpbWFnZSIsInZlbEFycmF5IiwicG9zdE1lc3NhZ2UiLCJwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJfcG9zQXJyYXkiLCJfdmVsQXJyYXkiLCJzaXplIiwibWluIiwidW5pZm9ybXMiLCJ2YWx1ZSIsImNhbWVyYUNvbnN0YW50IiwidV9UZXh0dXJlIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJyZXNvbHV0aW9uIiwidHlwZSIsIlZlY3RvcjQiLCJnZW9tZXRyeSIsIlBsYW5lR2VvbWV0cnkiLCJ4IiwieSIsInoiLCJ3IiwibWF0ZXJpYWwiLCJTaGFkZXJNYXRlcmlhbCIsImZyYWdtZW50U2hhZGVyIiwidmVydGV4U2hhZGVyIiwib2JqIiwiTWVzaCIsIm1hdHJpeEF1dG9VcGRhdGUiLCJ1cGRhdGVNYXRyaXgiLCJmcnVzdHVtQ3VsbGVkIiwiYWRkIiwiY29tcHV0ZSIsImdldEN1cnJlbnRSZW5kZXJUYXJnZXQiLCJ0ZXh0dXJlIiwidGFuIiwiREVHMlJBRCIsImZvdiIsInpvb20iLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIlZlY3RvcjMiLCJuZWFyIiwiZmFyIiwiaCIsImhlaWdodCIsImFzcGVjdCIsInBvc2l0aW9uIiwicG9zaXRpb25aIiwibG9va0F0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsInZGb3YiLCJQSSIsIldlYkdMUmVuZGVyZXIiLCJzUkdCRW5jb2RpbmciLCJwcm9wcyIsIm91dHB1dEVuY29kaW5nIiwicGh5c2ljYWxseUNvcnJlY3RMaWdodHMiLCJhdXRvQ2xlYXIiLCJ3aWR0aCIsInNldFNpemUiLCJzZXRQaXhlbFJhdGlvIiwiZGV2aWNlUGl4ZWxSYXRpbyJdLCJzb3VyY2VSb290IjoiIn0=