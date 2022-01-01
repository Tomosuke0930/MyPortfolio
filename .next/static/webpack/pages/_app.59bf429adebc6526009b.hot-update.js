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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Tom/Desktop/React/youtube/devaslife/craftzdog-homepage/components/voxel-dog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n  return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\n\nvar VoxelDog = function VoxelDog() {\n  _s();\n\n  var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      renderer = _useState2[0],\n      setRenderer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _camera = _useState3[0],\n      setCamera = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)),\n      target = _useState4[0];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(newTHREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))),\n      initialCameraPosition = _useState5[0];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()),\n      scene = _useState6[0];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _controls = _useState7[0],\n      setControls = _useState7[1];\n  /* eslint-disable react-hooks/exhaustive-deps */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var container = refContainer.current;\n\n    if (container && !renderer) {\n      var scW = container.clientWidth;\n      var scH = container.clientHeight;\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    ref: refContainer,\n    className: \"voxel-dog\",\n    m: \"auto\",\n    at: ['-20px', '-60px', '-120px'],\n    mb: ['-40px', '-140ps', '-200px'],\n    w: [280, 480, 640],\n    h: [280, 480, 640],\n    position: \"relative\",\n    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n      size: \"xl\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      ml: \"calc(0px -var(--spinner-size)/2\",\n      mt: \"calc(0px -var(--spinner-size))\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(VoxelDog, \"VKBGdi1UDDFWDkygjmPWxA+LhaY=\");\n\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\n\nvar _c;\n\n$RefreshReg$(_c, \"VoxelDog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MGUxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIFNwaW5uZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9sYXlvdXRcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJ3RocmVlL2V4YW1wbGVzL2pzbS9jb250cm9scy9PcmJpdENvbnRyb2xzJ1xuaW1wb3J0IHsgbG9hZEdMVEZNb2RlbCB9IGZyb20gXCIuLi9saWIvbW9kZWxcIjtcblxuZnVuY3Rpb24gZWFzZU91dENpcmMoeCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIE1hdGgucG93KHggLSAxLCA0KSlcbn1cblxuY29uc3QgVm94ZWxEb2cgPSAoKSA9PiB7XG4gICAgY29uc3QgcmVmQ29udGFpbmVyID0gdXNlUmVmKClcbiAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKHRydWUpXG4gICAgY29uc3QgWyByZW5kZXJlciwgc2V0UmVuZGVyZXIgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIF9jYW1lcmEsIHNldENhbWVyYSBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgdGFyZ2V0IF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuVmVjdG9yMygtMC41LCAxLjIsIDApKVxuICAgIGNvbnN0IFsgaW5pdGlhbENhbWVyYVBvc2l0aW9uIF0gPSB1c2VTdGF0ZShcbiAgICAgICAgbmV3VEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbIHNjZW5lIF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbIF9jb250cm9scywgc2V0Q29udHJvbHMgXSA9IHVzZVN0YXRlKClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXIgXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuICAgICAgICB9XG4gICAgfSxbXSlcbiAgICBcbiAgICByZXR1cm4gPEJveCBcbiAgICByZWY9e3JlZkNvbnRhaW5lcn1cbiAgICBjbGFzc05hbWU9J3ZveGVsLWRvZydcbiAgICBtPVwiYXV0b1wiXG4gICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XG4gICAgbWI9e1snLTQwcHgnLCctMTQwcHMnLCAnLTIwMHB4J119XG4gICAgdz17WzI4MCw0ODAsIDY0MF19XG4gICAgaD17WzI4MCw0ODAsIDY0MF19XG4gICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC12YXIoLS1zcGlubmVyLXNpemUpLzJcIlxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLXZhcigtLXNwaW5uZXItc2l6ZSkpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgPC9Cb3g+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsIm5ld1RIUkVFIiwic2luIiwiUEkiLCJjb3MiLCJpbml0aWFsQ2FtZXJhUG9zaXRpb24iLCJTY2VuZSIsInNjZW5lIiwiX2NvbnRyb2xzIiwic2V0Q29udHJvbHMiLCJjb250YWluZXIiLCJjdXJyZW50Iiwic2NXIiwiY2xpZW50V2lkdGgiLCJzY0giLCJjbGllbnRIZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});