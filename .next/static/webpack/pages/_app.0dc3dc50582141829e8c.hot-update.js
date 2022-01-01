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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Tom/Desktop/React/youtube/devaslife/craftzdog-homepage/components/voxel-dog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n  return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\n\nvar VoxelDog = function VoxelDog() {\n  _s();\n\n  var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      renderer = _useState2[0],\n      setRenderer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _camera = _useState3[0],\n      setCamera = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new TH()),\n      target = _useState4[0];\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Box, {\n    ref: refContainer,\n    className: \"voxel-dog\",\n    m: \"auto\",\n    at: ['-20px', '-60px', '-120px'],\n    mb: ['-40px', '-140ps', '-200px'],\n    w: [280, 480, 640],\n    h: [280, 480, 640],\n    position: \"relative\",\n    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Spinner, {\n      size: \"xl\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      ml: \"calc(0px -var(--spinner-size)/2\",\n      mt: \"calc(0px -var(--spinner-size))\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(VoxelDog, \"QPA7mzDlPNV+l8fwcbw/vgzPpJM=\");\n\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\n\nvar _c;\n\n$RefreshReg$(_c, \"VoxelDog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsU0FBU1MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0I7QUFDcEIsU0FBT0MsSUFBSSxDQUFDQyxJQUFMLENBQVUsSUFBSUQsSUFBSSxDQUFDRSxHQUFMLENBQVNILENBQUMsR0FBRyxDQUFiLEVBQWdCLENBQWhCLENBQWQsQ0FBUDtBQUNIOztBQUVELElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsWUFBWSxHQUFHYiw2Q0FBTSxFQUEzQjs7QUFDQSxrQkFBZ0NGLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQVFnQixPQUFSO0FBQUEsTUFBaUJDLFVBQWpCOztBQUNBLG1CQUFrQ2pCLCtDQUFRLEVBQTFDO0FBQUEsTUFBUWtCLFFBQVI7QUFBQSxNQUFrQkMsV0FBbEI7O0FBQ0EsbUJBQStCbkIsK0NBQVEsRUFBdkM7QUFBQSxNQUFRb0IsT0FBUjtBQUFBLE1BQWlCQyxTQUFqQjs7QUFDQSxtQkFBbUJyQiwrQ0FBUSxDQUFDLElBQUlzQixFQUFKLEVBQUQsQ0FBM0I7QUFBQSxNQUFRQyxNQUFSOztBQUVBLHNCQUFPLDhEQUFDLGtEQUFEO0FBQ1AsT0FBRyxFQUFFUixZQURFO0FBRVAsYUFBUyxFQUFDLFdBRkg7QUFHUCxLQUFDLEVBQUMsTUFISztBQUlQLE1BQUUsRUFBRSxDQUFDLE9BQUQsRUFBVSxPQUFWLEVBQW1CLFFBQW5CLENBSkc7QUFLUCxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVMsUUFBVCxFQUFtQixRQUFuQixDQUxHO0FBTVAsS0FBQyxFQUFFLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBTkk7QUFPUCxLQUFDLEVBQUUsQ0FBQyxHQUFELEVBQUssR0FBTCxFQUFVLEdBQVYsQ0FQSTtBQVFQLFlBQVEsRUFBQyxVQVJGO0FBQUEsY0FVRkMsT0FBTyxpQkFDSiw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBQyxJQURUO0FBRUksY0FBUSxFQUFDLFVBRmI7QUFHSSxVQUFJLEVBQUMsS0FIVDtBQUlJLFNBQUcsRUFBQyxLQUpSO0FBS0ksUUFBRSxFQUFDLGlDQUxQO0FBTUksUUFBRSxFQUFDO0FBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQXFCSCxDQTVCRDs7R0FBTUY7O0tBQUFBO0FBOEJOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvdm94ZWwtZG9nLmpzPzBlMWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQm94LCBTcGlubmVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scydcbmltcG9ydCB7IGxvYWRHTFRGTW9kZWwgfSBmcm9tIFwiLi4vbGliL21vZGVsXCI7XG5cbmZ1bmN0aW9uIGVhc2VPdXRDaXJjKHgpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSBNYXRoLnBvdyh4IC0gMSwgNCkpXG59XG5cbmNvbnN0IFZveGVsRG9nID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlZkNvbnRhaW5lciA9IHVzZVJlZigpXG4gICAgY29uc3QgWyBsb2FkaW5nLCBzZXRMb2FkaW5nIF0gPSB1c2VTdGF0ZSh0cnVlKVxuICAgIGNvbnN0IFsgcmVuZGVyZXIsIHNldFJlbmRlcmVyIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyBfY2FtZXJhLCBzZXRDYW1lcmEgXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbIHRhcmdldCBdID0gdXNlU3RhdGUobmV3IFRIKVxuXG4gICAgcmV0dXJuIDxCb3ggXG4gICAgcmVmPXtyZWZDb250YWluZXJ9XG4gICAgY2xhc3NOYW1lPSd2b3hlbC1kb2cnXG4gICAgbT1cImF1dG9cIlxuICAgIGF0PXtbJy0yMHB4JywgJy02MHB4JywgJy0xMjBweCddfVxuICAgIG1iPXtbJy00MHB4JywnLTE0MHBzJywgJy0yMDBweCddfVxuICAgIHc9e1syODAsNDgwLCA2NDBdfVxuICAgIGg9e1syODAsNDgwLCA2NDBdfVxuICAgIHBvc2l0aW9uPVwicmVsYXRpdmVcIlxuICAgID5cbiAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPFNwaW5uZXJcbiAgICAgICAgICAgICAgICBzaXplPVwieGxcIlxuICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgICAgIGxlZnQ9XCI1MCVcIlxuICAgICAgICAgICAgICAgIHRvcD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgbWw9XCJjYWxjKDBweCAtdmFyKC0tc3Bpbm5lci1zaXplKS8yXCJcbiAgICAgICAgICAgICAgICBtdD1cImNhbGMoMHB4IC12YXIoLS1zcGlubmVyLXNpemUpKVwiXG4gICAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgIDwvQm94PlxufVxuXG5leHBvcnQgZGVmYXVsdCBWb3hlbERvZyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZUNhbGxiYWNrIiwiQm94IiwiU3Bpbm5lciIsIlRIUkVFIiwiT3JiaXRDb250cm9scyIsImxvYWRHTFRGTW9kZWwiLCJlYXNlT3V0Q2lyYyIsIngiLCJNYXRoIiwic3FydCIsInBvdyIsIlZveGVsRG9nIiwicmVmQ29udGFpbmVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJyZW5kZXJlciIsInNldFJlbmRlcmVyIiwiX2NhbWVyYSIsInNldENhbWVyYSIsIlRIIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});