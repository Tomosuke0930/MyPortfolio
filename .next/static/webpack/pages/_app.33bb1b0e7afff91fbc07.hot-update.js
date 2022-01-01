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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Tom/Desktop/React/youtube/devaslife/craftzdog-homepage/components/voxel-dog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n  return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\n\nvar VoxelDog = function VoxelDog() {\n  _s();\n\n  var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      renderer = _useState2[0],\n      setRenderer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _camera = _useState3[0],\n      setCamera = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)),\n      target = _useState4[0];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newTHREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))),\n      initialCameraPosition = _useState5[0];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()),\n      scene = _useState6[0];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _controls = _useState7[0],\n      setControls = _useState7[1];\n  /* eslint-disable react-hooks/exhaustive-deps */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var container = refContainer.current;\n\n    if (container && !renderer) {\n      var scW = container.clientWidth;\n      var scH = container.clientHeight;\n\n      var _renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n        antialias: true,\n        alpha: true\n      });\n\n      _renderer.setPixelRatio(window.devicePixelRatio);\n\n      _renderer.setSize(scW, scH);\n\n      _renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n      container.appendChild(_renderer.domElemdent);\n      setRenderer(_renderer);\n      var scale = scH * 0.005 + 4.8;\n      var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n      camera.position.copy(initialCameraPosition);\n      camera.lookAt(target);\n      setCamera(camera);\n      var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n      scene.add(ambientLight);\n      var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, _renderer.domElement);\n      controls.autoRotate = true;\n      controls.target = target;\n      setControls(controls);\n      _lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel;\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    ref: refContainer,\n    className: \"voxel-dog\",\n    m: \"auto\",\n    at: ['-20px', '-60px', '-120px'],\n    mb: ['-40px', '-140ps', '-200px'],\n    w: [280, 480, 640],\n    h: [280, 480, 640],\n    position: \"relative\",\n    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n      size: \"xl\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      ml: \"calc(0px -var(--spinner-size)/2\",\n      mt: \"calc(0px -var(--spinner-size))\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 71,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(VoxelDog, \"VKBGdi1UDDFWDkygjmPWxA+LhaY=\");\n\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\n\nvar _c;\n\n$RefreshReg$(_c, \"VoxelDog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU1GOztLQUFBQTtBQWtGTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz8wZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYi9tb2RlbFwiO1xuaW1wb3J0IHsgVGggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBWb3hlbERvZyA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbIHJlbmRlcmVyLCBzZXRSZW5kZXJlciBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgX2NhbWVyYSwgc2V0Q2FtZXJhIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyB0YXJnZXQgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpXG4gICAgY29uc3QgWyBpbml0aWFsQ2FtZXJhUG9zaXRpb24gXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXdUSFJFRS5WZWN0b3IzKFxuICAgICAgICAgICAgMjAgKiBNYXRoLnNpbigwLjIgKiBNYXRoLlBJKSxcbiAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgMjAgKiBNYXRoLmNvcygwLjIgKiBNYXRoLlBJKVxuICAgICAgICApXG4gICAgKVxuICAgIGNvbnN0IFsgc2NlbmUgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5TY2VuZSgpKVxuICAgIGNvbnN0IFsgX2NvbnRyb2xzLCBzZXRDb250cm9scyBdID0gdXNlU3RhdGUoKVxuXG4gICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzICovXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgeyBjdXJyZW50OiBjb250YWluZXIgfSA9IHJlZkNvbnRhaW5lciBcbiAgICAgICAgaWYoY29udGFpbmVyICYmICFyZW5kZXJlcikge1xuICAgICAgICAgICAgY29uc3Qgc2NXID0gY29udGFpbmVyLmNsaWVudFdpZHRoXG4gICAgICAgICAgICBjb25zdCBzY0ggPSBjb250YWluZXIuY2xpZW50SGVpZ2h0XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuICAgICAgICAgICAgICAgIGFudGlhbGlhczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbHBoYTogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRTaXplKHNjVyxzY0gpXG4gICAgICAgICAgICByZW5kZXJlci5vdXRwdXRFbmNvZGluZyA9IFRIUkVFLnNSR0JFbmNvZGluZ1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1kZW50KVxuICAgICAgICAgICAgc2V0UmVuZGVyZXIocmVuZGVyZXIpXG5cblxuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBzY0ggKiAwLjAwNSArIDQuOFxuICAgICAgICAgICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYShcbiAgICAgICAgICAgICAgICAtc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgc2NhbGUsXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAgICAgNTAwMDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi5jb3B5KGluaXRpYWxDYW1lcmFQb3NpdGlvbilcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQodGFyZ2V0KVxuICAgICAgICAgICAgc2V0Q2FtZXJhKGNhbWVyYSlcblxuICAgICAgICAgICAgY29uc3QgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGNjY2NjYywxKVxuICAgICAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodClcblxuICAgICAgICAgICAgY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyAoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KVxuICAgICAgICAgICAgY29udHJvbHMuYXV0b1JvdGF0ZSA9IHRydWVcbiAgICAgICAgICAgIGNvbnRyb2xzLnRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgc2V0Q29udHJvbHMoY29udHJvbHMpXG5cbiAgICAgICAgICAgIGxvYWRHTFRGTW9kZWxcbiAgICAgICAgfVxuICAgIH0sW10pXG4gICAgXG4gICAgcmV0dXJuIDxCb3ggXG4gICAgcmVmPXtyZWZDb250YWluZXJ9XG4gICAgY2xhc3NOYW1lPSd2b3hlbC1kb2cnXG4gICAgbT1cImF1dG9cIlxuICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxuICAgIG1iPXtbJy00MHB4JywnLTE0MHBzJywgJy0yMDBweCddfVxuICAgIHc9e1syODAsNDgwLCA2NDBdfVxuICAgIGg9e1syODAsNDgwLCA2NDBdfVxuICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgID5cbiAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtdmFyKC0tc3Bpbm5lci1zaXplKS8yXCJcbiAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4IC12YXIoLS1zcGlubmVyLXNpemUpKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgIDwvQm94PlxufVxuXG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJUaCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsIm5ld1RIUkVFIiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRQaXhlbFJhdGlvIiwid2luZG93IiwiZGV2aWNlUGl4ZWxSYXRpbyIsInNldFNpemUiLCJvdXRwdXRFbmNvZGluZyIsInNSR0JFbmNvZGluZyIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWRlbnQiLCJzY2FsZSIsImNhbWVyYSIsIk9ydGhvZ3JhcGhpY0NhbWVyYSIsInBvc2l0aW9uIiwiY29weSIsImxvb2tBdCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImFkZCIsImNvbnRyb2xzIiwiZG9tRWxlbWVudCIsImF1dG9Sb3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});