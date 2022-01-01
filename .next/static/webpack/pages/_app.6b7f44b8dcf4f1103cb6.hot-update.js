"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/voxel-dog.js":
/*!*********************************!*\
  !*** ./components/voxel-dog.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Tom/Desktop/React/youtube/devaslife/craftzdog-homepage/components/voxel-dog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n  return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\n\nvar VoxelDog = function VoxelDog() {\n  _s();\n\n  var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      renderer = _useState2[0],\n      setRenderer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _camera = _useState3[0],\n      setCamera = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)),\n      target = _useState4[0];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newTHREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))),\n      initialCameraPosition = _useState5[0];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()),\n      scene = _useState6[0];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _controls = _useState7[0],\n      setControls = _useState7[1];\n  /* eslint-disable react-hooks/exhaustive-deps */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var container = refContainer.current;\n\n    if (container && !renderer) {\n      var scW = container.clientWidth;\n      var scH = container.clientHeight;\n\n      var _renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n        antialias: true,\n        alpha: true\n      });\n\n      _renderer.setPixelRatio(window.devicePixelRatio);\n\n      _renderer.setSize(scW, scH);\n\n      _renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n      container.appendChild(_renderer.domElemdent);\n      setRenderer(_renderer);\n      var scale = scH * 0.005 + 4.8;\n      var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n      camera.position.copy(initialCameraPosition);\n      camera.lookAt(target);\n      setCamera(camera);\n      var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n      scene.add(ambientLight);\n      var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, _renderer.domElement);\n      controls.autoRotate = true;\n      controls.target = target;\n      setControls(controls);\n      (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, '/dog.glb', {\n        receiveShadow: false,\n        castShadow: false\n      }).then(function () {\n        animate();\n        setLoading(false);\n      });\n      var req = null;\n      var frame = 0;\n\n      var animate = function animate() {\n        req = requestAnimationFrame(animate);\n        frame = frame <= 100 ? frame + 1 : frame;\n\n        if (frame <= 100) {\n          var p = initialCameraPosition;\n          var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n          camera.position.y = 10;\n          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n          camera.lookAt(target);\n        }\n      };\n\n      return;\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    ref: refContainer,\n    className: \"voxel-dog\",\n    m: \"auto\",\n    at: ['-20px', '-60px', '-120px'],\n    mb: ['-40px', '-140ps', '-200px'],\n    w: [280, 480, 640],\n    h: [280, 480, 640],\n    position: \"relative\",\n    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n      size: \"xl\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      ml: \"calc(0px -var(--spinner-size)/2\",\n      mt: \"calc(0px -var(--spinner-size))\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(VoxelDog, \"VKBGdi1UDDFWDkygjmPWxA+LhaY=\");\n\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\n\nvar _c;\n\n$RefreshReg$(_c, \"VoxelDog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SlI7QUFLSSxRQUFFLEVBQUMsaUNBTFA7QUFNSSxRQUFFLEVBQUM7QUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBcUJILENBNUdEOztHQUFNRjs7S0FBQUE7QUE4R04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92b3hlbC1kb2cuanM/MGUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWIvbW9kZWxcIjtcbmltcG9ydCB7IFRoIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgWyByZW5kZXJlciwgc2V0UmVuZGVyZXIgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIF9jYW1lcmEsIHNldENhbWVyYSBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgdGFyZ2V0IF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICAgIGNvbnN0IFsgaW5pdGlhbENhbWVyYVBvc2l0aW9uIF0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3VEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbIHNjZW5lIF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbIF9jb250cm9scywgc2V0Q29udHJvbHMgXSA9IHVzZVN0YXRlKClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXIgXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csc2NIKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZGVudClcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsMSlcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMgKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2RvZy5nbGInLCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXG5cbiAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gXG4gICAgICAgICAgICAgICAgICAgIHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IFxuICAgICAgICAgICAgICAgICAgICBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgIH0sW10pXG4gICAgXG4gICAgcmV0dXJuIDxCb3ggXG4gICAgcmVmPXtyZWZDb250YWluZXJ9XG4gICAgY2xhc3NOYW1lPSd2b3hlbC1kb2cnXG4gICAgbT1cImF1dG9cIlxuICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxuICAgIG1iPXtbJy00MHB4JywnLTE0MHBzJywgJy0yMDBweCddfVxuICAgIHc9e1syODAsNDgwLCA2NDBdfVxuICAgIGg9e1syODAsNDgwLCA2NDBdfVxuICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgID5cbiAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtdmFyKC0tc3Bpbm5lci1zaXplKS8yXCJcbiAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4IC12YXIoLS1zcGlubmVyLXNpemUpKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgIDwvQm94PlxufVxuXG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJUaCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsIm5ld1RIUkVFIiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWRlbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiZG9tRWxlbWVudCIsImF1dG9Sb3RhdGUiLCJyZWNlaXZlU2hhZG93IiwiY2FzdFNoYWRvdyIsInRoZW4iLCJhbmltYXRlIiwicmVxIiwiZnJhbWUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwIiwicm90U3BlZWQiLCJ5IiwieiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});