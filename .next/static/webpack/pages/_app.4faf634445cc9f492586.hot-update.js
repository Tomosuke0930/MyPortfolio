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

/***/ "./lib/theme.js":
/*!**********************!*\
  !*** ./lib/theme.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"./node_modules/@chakra-ui/theme-tools/dist/chakra-ui-theme-tools.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar styles = {\n  global: function global(props) {\n    return {\n      body: {\n        bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#f0e7db', '#202023')(props)\n      }\n    };\n  }\n};\nvar components = {\n  Heading: {\n    variants: {\n      'section-title': {\n        textDecoration: 'underline',\n        fontSize: 20,\n        textUnderlineOffset: 6,\n        textDecorationColor: '#525252',\n        textDecorationThickness: 4,\n        marginTop: 3,\n        marginBottom: 4\n      }\n    }\n  },\n  Link: {\n    baseStyle: function baseStyle(props) {\n      return {\n        color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_0__.mode)('#3d7aed', '#ff63c3')(props),\n        textUnderlineOffset: 3\n      };\n    }\n  }\n};\nvar fonts = {\n  heading: \"'M PLUS Rounded 1c'\"\n};\nvar colors = {\n  grassTeal: '#88ccca'\n};\nvar config = {\n  initialColorMode: 'dark',\n  useSysytemColorMode: true\n};\nvar theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({\n  config: config,\n  styles: styles,\n  components: components,\n  fonts: fonts,\n  colors: colors\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (theme);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNRSxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsTUFBTSxFQUFFLGdCQUFBQyxLQUFLO0FBQUEsV0FBSztBQUNkQyxNQUFBQSxJQUFJLEVBQUU7QUFDRkMsUUFBQUEsRUFBRSxFQUFFTCw0REFBSSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBQUosQ0FBMkJHLEtBQTNCO0FBREY7QUFEUSxLQUFMO0FBQUE7QUFERixDQUFmO0FBUUEsSUFBTUcsVUFBVSxHQUFHO0FBQ2ZDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUU7QUFDTix1QkFBaUI7QUFDYkMsUUFBQUEsY0FBYyxFQUFFLFdBREg7QUFFYkMsUUFBQUEsUUFBUSxFQUFFLEVBRkc7QUFHYkMsUUFBQUEsbUJBQW1CLEVBQUUsQ0FIUjtBQUliQyxRQUFBQSxtQkFBbUIsRUFBRSxTQUpSO0FBS2JDLFFBQUFBLHVCQUF1QixFQUFFLENBTFo7QUFNYkMsUUFBQUEsU0FBUyxFQUFFLENBTkU7QUFPYkMsUUFBQUEsWUFBWSxFQUFFO0FBUEQ7QUFEWDtBQURMLEdBRE07QUFjZkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLElBQUFBLFNBQVMsRUFBRSxtQkFBQWQsS0FBSztBQUFBLGFBQUs7QUFDakJlLFFBQUFBLEtBQUssRUFBRWxCLDREQUFJLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FBSixDQUEyQkcsS0FBM0IsQ0FEVTtBQUVqQlEsUUFBQUEsbUJBQW1CLEVBQUU7QUFGSixPQUFMO0FBQUE7QUFEZDtBQWRTLENBQW5CO0FBc0JBLElBQU1RLEtBQUssR0FBRztBQUNWQyxFQUFBQSxPQUFPLEVBQUU7QUFEQyxDQUFkO0FBSUEsSUFBTUMsTUFBTSxHQUFHO0FBQ1hDLEVBQUFBLFNBQVMsRUFBRTtBQURBLENBQWY7QUFJQSxJQUFNQyxNQUFNLEdBQUc7QUFDWEMsRUFBQUEsZ0JBQWdCLEVBQUUsTUFEUDtBQUVYQyxFQUFBQSxtQkFBbUIsRUFBRTtBQUZWLENBQWY7QUFLQSxJQUFNQyxLQUFLLEdBQUczQiw2REFBVyxDQUFDO0FBQUV3QixFQUFBQSxNQUFNLEVBQU5BLE1BQUY7QUFBVXRCLEVBQUFBLE1BQU0sRUFBTkEsTUFBVjtBQUFrQkssRUFBQUEsVUFBVSxFQUFWQSxVQUFsQjtBQUE4QmEsRUFBQUEsS0FBSyxFQUFMQSxLQUE5QjtBQUFxQ0UsRUFBQUEsTUFBTSxFQUFOQTtBQUFyQyxDQUFELENBQXpCO0FBQ0EsK0RBQWVLLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3RoZW1lLmpzPzNkM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIlxuaW1wb3J0IHsgbW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvdGhlbWUtdG9vbHMnXG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBnbG9iYWw6IHByb3BzID0+ICh7XG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIGJnOiBtb2RlKCcjZjBlN2RiJywgJyMyMDIwMjMnKShwcm9wcylcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgSGVhZGluZzoge1xuICAgICAgICB2YXJpYW50czoge1xuICAgICAgICAgICAgJ3NlY3Rpb24tdGl0bGUnOiB7XG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAyMCxcbiAgICAgICAgICAgICAgICB0ZXh0VW5kZXJsaW5lT2Zmc2V0OiA2LFxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uQ29sb3I6ICcjNTI1MjUyJyxcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvblRoaWNrbmVzczogNCxcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDMsXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIExpbms6IHtcbiAgICAgICAgYmFzZVN0eWxlOiBwcm9wcyA9PiAoe1xuICAgICAgICAgICAgY29sb3I6IG1vZGUoJyMzZDdhZWQnLCAnI2ZmNjNjMycpKHByb3BzKSxcbiAgICAgICAgICAgIHRleHRVbmRlcmxpbmVPZmZzZXQ6IDNcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmNvbnN0IGZvbnRzID0ge1xuICAgIGhlYWRpbmc6IFwiJ00gUExVUyBSb3VuZGVkIDFjJ1wiXG59XG5cbmNvbnN0IGNvbG9ycyA9IHtcbiAgICBncmFzc1RlYWw6ICcjODhjY2NhJ1xufVxuXG5jb25zdCBjb25maWcgPSB7XG4gICAgaW5pdGlhbENvbG9yTW9kZTogJ2RhcmsnLFxuICAgIHVzZVN5c3l0ZW1Db2xvck1vZGU6IHRydWVcbn1cblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7IGNvbmZpZywgc3R5bGVzLCBjb21wb25lbnRzLCBmb250cywgY29sb3JzfSlcbmV4cG9ydCBkZWZhdWx0IHRoZW1lIl0sIm5hbWVzIjpbImV4dGVuZFRoZW1lIiwibW9kZSIsInN0eWxlcyIsImdsb2JhbCIsInByb3BzIiwiYm9keSIsImJnIiwiY29tcG9uZW50cyIsIkhlYWRpbmciLCJ2YXJpYW50cyIsInRleHREZWNvcmF0aW9uIiwiZm9udFNpemUiLCJ0ZXh0VW5kZXJsaW5lT2Zmc2V0IiwidGV4dERlY29yYXRpb25Db2xvciIsInRleHREZWNvcmF0aW9uVGhpY2tuZXNzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTGluayIsImJhc2VTdHlsZSIsImNvbG9yIiwiZm9udHMiLCJoZWFkaW5nIiwiY29sb3JzIiwiZ3Jhc3NUZWFsIiwiY29uZmlnIiwiaW5pdGlhbENvbG9yTW9kZSIsInVzZVN5c3l0ZW1Db2xvck1vZGUiLCJ0aGVtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.js\n");

/***/ })

});