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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Tom/Desktop/React/youtube/devaslife/craftzdog-homepage/components/voxel-dog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n  return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\n\nvar VoxelDog = function VoxelDog() {\n  _s();\n\n  var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      renderer = _useState2[0],\n      setRenderer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _camera = _useState3[0],\n      setCamera = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)),\n      target = _useState4[0];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newTHREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))),\n      initialCameraPosition = _useState5[0];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()),\n      scene = _useState6[0];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _controls = _useState7[0],\n      setControls = _useState7[1];\n  /* eslint-disable react-hooks/exhaustive-deps */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var container = refContainer.current;\n\n    if (container && !renderer) {\n      var scW = container.clientWidth;\n      var scH = container.clientHeight;\n\n      var _renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n        antialias: true,\n        alpha: true\n      });\n\n      _renderer.setPixelRatio(window.devicePixelRatio);\n\n      _renderer.setSize(scW, scH);\n\n      _renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n      container.appendChild(_renderer.domElemdent);\n      setRenderer(_renderer);\n      var scale = scH * 0.005 + 4.8;\n      var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n      camera.position.copy(initialCameraPosition);\n      camera.lookAt(target);\n      setCamera(camera);\n      var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n      scene.add(ambientLight);\n      var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, _renderer.domElement);\n      controls.autoRotate = true;\n      controls.target = target;\n      setControls(controls);\n      (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, '/dog.glb', {\n        receiveShadow: false,\n        castShadow: false\n      }).then(function () {\n        animate();\n        setLoading(false);\n      });\n      var req = null;\n      var frame = 0;\n\n      var animate = function animate() {\n        req = requestAnimationFrame(animate);\n        frame = frame <= 100 ? frame + 1 : frame;\n\n        if (frame <= 100) {\n          var p = initialCameraPosition;\n          var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n          camera.position.y = 10;\n          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n        }\n      };\n\n      return;\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    ref: refContainer,\n    className: \"voxel-dog\",\n    m: \"auto\",\n    at: ['-20px', '-60px', '-120px'],\n    mb: ['-40px', '-140ps', '-200px'],\n    w: [280, 480, 640],\n    h: [280, 480, 640],\n    position: \"relative\",\n    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n      size: \"xl\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      ml: \"calc(0px -var(--spinner-size)/2\",\n      mt: \"calc(0px -var(--spinner-size))\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(VoxelDog, \"VKBGdi1UDDFWDkygjmPWxA+LhaY=\");\n\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\n\nvar _c;\n\n$RefreshReg$(_c, \"VoxelDog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFxQkgsQ0F6R0Q7O0dBQU1GOztLQUFBQTtBQTJHTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz8wZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYi9tb2RlbFwiO1xuaW1wb3J0IHsgVGggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBWb3hlbERvZyA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbIHJlbmRlcmVyLCBzZXRSZW5kZXJlciBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgX2NhbWVyYSwgc2V0Q2FtZXJhIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyB0YXJnZXQgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpXG4gICAgY29uc3QgWyBpbml0aWFsQ2FtZXJhUG9zaXRpb24gXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXdUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuICAgIGNvbnN0IFsgc2NlbmUgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICAgIGNvbnN0IFsgX2NvbnRyb2xzLCBzZXRDb250cm9scyBdID0gdXNlU3RhdGUoKVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lciBcbiAgICAgICAgaWYoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1kZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgNTAwMDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywxKVxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyAoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWwoc2NlbmUsICcvZG9nLmdsYicsIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlU2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjYXN0U2hhZG93OiBmYWxzZSxcbiAgICAgICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGUoKVxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBsZXQgcmVxID0gbnVsbFxuICAgICAgICAgICAgbGV0IGZyYW1lID0gMFxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICByZXEgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcblxuICAgICAgICAgICAgICAgIGZyYW1lID0gZnJhbWUgPD0gMTAwID8gZnJhbWUgKyAxIDogZnJhbWVcblxuICAgICAgICAgICAgICAgIGlmKGZyYW1lIDw9IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gaW5pdGlhbENhbWVyYVBvc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdFNwZWVkID0gLWVhc2VPdXRDaXJjKGZyYW1lIC8gMTIwKSAqIE1hdGguUEkgKiAyMFxuXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gMTBcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBwLnggKiBNYXRoLmNvcyhyb3RTcGVlZCkgKyBwLnogKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnogPSBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSxbXSlcbiAgICBcbiAgICByZXR1cm4gPEJveCBcbiAgICByZWY9e3JlZkNvbnRhaW5lcn1cbiAgICBjbGFzc05hbWU9J3ZveGVsLWRvZydcbiAgICBtPVwiYXV0b1wiXG4gICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XG4gICAgbWI9e1snLTQwcHgnLCctMTQwcHMnLCAnLTIwMHB4J119XG4gICAgdz17WzI4MCw0ODAsIDY0MF19XG4gICAgaD17WzI4MCw0ODAsIDY0MF19XG4gICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC12YXIoLS1zcGlubmVyLXNpemUpLzJcIlxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLXZhcigtLXNwaW5uZXItc2l6ZSkpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgPC9Cb3g+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsIlRoIiwiZWFzZU91dENpcmMiLCJ4IiwiTWF0aCIsInNxcnQiLCJwb3ciLCJWb3hlbERvZyIsInJlZkNvbnRhaW5lciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicmVuZGVyZXIiLCJzZXRSZW5kZXJlciIsIl9jYW1lcmEiLCJzZXRDYW1lcmEiLCJWZWN0b3IzIiwidGFyZ2V0IiwibmV3VEhSRUUiLCJzaW4iLCJQSSIsImNvcyIsImluaXRpYWxDYW1lcmFQb3NpdGlvbiIsIlNjZW5lIiwic2NlbmUiLCJfY29udHJvbHMiLCJzZXRDb250cm9scyIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzY1ciLCJjbGllbnRXaWR0aCIsInNjSCIsImNsaWVudEhlaWdodCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJhbHBoYSIsInNldFBpeGVsUmF0aW8iLCJ3aW5kb3ciLCJkZXZpY2VQaXhlbFJhdGlvIiwic2V0U2l6ZSIsIm91dHB1dEVuY29kaW5nIiwic1JHQkVuY29kaW5nIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZGVudCIsInNjYWxlIiwiY2FtZXJhIiwiT3J0aG9ncmFwaGljQ2FtZXJhIiwicG9zaXRpb24iLCJjb3B5IiwibG9va0F0IiwiYW1iaWVudExpZ2h0IiwiQW1iaWVudExpZ2h0IiwiYWRkIiwiY29udHJvbHMiLCJkb21FbGVtZW50IiwiYXV0b1JvdGF0ZSIsInJlY2VpdmVTaGFkb3ciLCJjYXN0U2hhZG93IiwidGhlbiIsImFuaW1hdGUiLCJyZXEiLCJmcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInAiLCJyb3RTcGVlZCIsInkiLCJ6Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});