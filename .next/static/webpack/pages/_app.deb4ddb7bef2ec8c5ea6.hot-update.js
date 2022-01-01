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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var _lib_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/model */ \"./lib/model.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/Tom/Desktop/React/youtube/devaslife/craftzdog-homepage/components/voxel-dog.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction easeOutCirc(x) {\n  return Math.sqrt(1 - Math.pow(x - 1, 4));\n}\n\nvar VoxelDog = function VoxelDog() {\n  _s();\n\n  var refContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      renderer = _useState2[0],\n      setRenderer = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _camera = _useState3[0],\n      setCamera = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(-0.5, 1.2, 0)),\n      target = _useState4[0];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 20 * Math.cos(0.2 * Math.PI))),\n      initialCameraPosition = _useState5[0];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(new three__WEBPACK_IMPORTED_MODULE_4__.Scene()),\n      scene = _useState6[0];\n\n  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),\n      _controls = _useState7[0],\n      setControls = _useState7[1];\n  /* eslint-disable react-hooks/exhaustive-deps */\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var container = refContainer.current;\n\n    if (container && !renderer) {\n      var scW = container.clientWidth;\n      var scH = container.clientHeight;\n\n      var _renderer = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({\n        antialias: true,\n        alpha: true\n      });\n\n      _renderer.setPixelRatio(window.devicePixelRatio);\n\n      _renderer.setSize(scW, scH);\n\n      _renderer.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;\n      container.appendChild(_renderer.domElemdent);\n      setRenderer(_renderer);\n      var scale = scH * 0.005 + 4.8;\n      var camera = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);\n      camera.position.copy(initialCameraPosition);\n      camera.lookAt(target);\n      setCamera(camera);\n      var ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xcccccc, 1);\n      scene.add(ambientLight);\n      var controls = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, _renderer.domElement);\n      controls.autoRotate = true;\n      controls.target = target;\n      setControls(controls);\n      (0,_lib_model__WEBPACK_IMPORTED_MODULE_2__.loadGLTFModel)(scene, '/dog.glb', {\n        receiveShadow: false,\n        castShadow: false\n      }).then(function () {\n        animate();\n        setLoading(false);\n      });\n      var req = null;\n      var frame = 0;\n\n      var animate = function animate() {\n        req = requestAnimationFrame(animate);\n        frame = frame <= 100 ? frame + 1 : frame;\n\n        if (frame <= 100) {\n          var p = initialCameraPosition;\n          var rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;\n          camera.position.y = 10;\n          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);\n          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);\n          camera.lookAt(target);\n        } else {\n          controls.update();\n        }\n\n        _renderer.render(scene, camera);\n      };\n\n      return;\n    }\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    ref: refContainer,\n    className: \"voxel-dog\",\n    m: \"auto\",\n    at: ['-20px', '-60px', '-120px'],\n    mb: ['-40px', '-140ps', '-200px'],\n    w: [280, 480, 640],\n    h: [280, 480, 640],\n    position: \"relative\",\n    children: loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n      size: \"xl\",\n      position: \"absolute\",\n      left: \"50%\",\n      top: \"50%\",\n      ml: \"calc(0px -var(--spinner-size)/2\",\n      mt: \"calc(0px -var(--spinner-size))\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 12\n  }, _this);\n};\n\n_s(VoxelDog, \"PLe/QSCM6kYQfX2AxEXaMdLLLuI=\");\n\n_c = VoxelDog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VoxelDog);\n\nvar _c;\n\n$RefreshReg$(_c, \"VoxelDog\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLFNBQVNTLFdBQVQsQ0FBcUJDLENBQXJCLEVBQXdCO0FBQ3BCLFNBQU9DLElBQUksQ0FBQ0MsSUFBTCxDQUFVLElBQUlELElBQUksQ0FBQ0UsR0FBTCxDQUFTSCxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFoQixDQUFkLENBQVA7QUFDSDs7QUFFRCxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLFlBQVksR0FBR2IsNkNBQU0sRUFBM0I7O0FBQ0Esa0JBQWdDRiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFRZ0IsT0FBUjtBQUFBLE1BQWlCQyxVQUFqQjs7QUFDQSxtQkFBa0NqQiwrQ0FBUSxFQUExQztBQUFBLE1BQVFrQixRQUFSO0FBQUEsTUFBa0JDLFdBQWxCOztBQUNBLG1CQUErQm5CLCtDQUFRLEVBQXZDO0FBQUEsTUFBUW9CLE9BQVI7QUFBQSxNQUFpQkMsU0FBakI7O0FBQ0EsbUJBQW1CckIsK0NBQVEsQ0FBQyxJQUFJTSwwQ0FBSixDQUFrQixDQUFDLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLENBQTdCLENBQUQsQ0FBM0I7QUFBQSxNQUFRaUIsTUFBUjs7QUFDQSxtQkFBa0N2QiwrQ0FBUSxDQUN0QyxJQUFJTSwwQ0FBSixDQUNJLEtBQUtLLElBQUksQ0FBQ2EsR0FBTCxDQUFTLE1BQU1iLElBQUksQ0FBQ2MsRUFBcEIsQ0FEVCxFQUVJLEVBRkosRUFHSSxLQUFLZCxJQUFJLENBQUNlLEdBQUwsQ0FBUyxNQUFNZixJQUFJLENBQUNjLEVBQXBCLENBSFQsQ0FEc0MsQ0FBMUM7QUFBQSxNQUFRRSxxQkFBUjs7QUFPQSxtQkFBa0IzQiwrQ0FBUSxDQUFDLElBQUlNLHdDQUFKLEVBQUQsQ0FBMUI7QUFBQSxNQUFRdUIsS0FBUjs7QUFDQSxtQkFBbUM3QiwrQ0FBUSxFQUEzQztBQUFBLE1BQVE4QixTQUFSO0FBQUEsTUFBbUJDLFdBQW5CO0FBRUE7OztBQUNBOUIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBaUIrQixTQUFqQixHQUErQmpCLFlBQS9CLENBQVFrQixPQUFSOztBQUNBLFFBQUdELFNBQVMsSUFBSSxDQUFDZCxRQUFqQixFQUEyQjtBQUN2QixVQUFNZ0IsR0FBRyxHQUFHRixTQUFTLENBQUNHLFdBQXRCO0FBQ0EsVUFBTUMsR0FBRyxHQUFHSixTQUFTLENBQUNLLFlBQXRCOztBQUVBLFVBQU1uQixTQUFRLEdBQUcsSUFBSVosZ0RBQUosQ0FBd0I7QUFDckNpQyxRQUFBQSxTQUFTLEVBQUUsSUFEMEI7QUFFckNDLFFBQUFBLEtBQUssRUFBRTtBQUY4QixPQUF4QixDQUFqQjs7QUFJQXRCLE1BQUFBLFNBQVEsQ0FBQ3VCLGFBQVQsQ0FBdUJDLE1BQU0sQ0FBQ0MsZ0JBQTlCOztBQUNBekIsTUFBQUEsU0FBUSxDQUFDMEIsT0FBVCxDQUFpQlYsR0FBakIsRUFBcUJFLEdBQXJCOztBQUNBbEIsTUFBQUEsU0FBUSxDQUFDMkIsY0FBVCxHQUEwQnZDLCtDQUExQjtBQUNBMEIsTUFBQUEsU0FBUyxDQUFDZSxXQUFWLENBQXNCN0IsU0FBUSxDQUFDOEIsV0FBL0I7QUFDQTdCLE1BQUFBLFdBQVcsQ0FBQ0QsU0FBRCxDQUFYO0FBR0EsVUFBTStCLEtBQUssR0FBR2IsR0FBRyxHQUFHLEtBQU4sR0FBYyxHQUE1QjtBQUNBLFVBQU1jLE1BQU0sR0FBRyxJQUFJNUMscURBQUosQ0FDWCxDQUFDMkMsS0FEVSxFQUVYQSxLQUZXLEVBR1hBLEtBSFcsRUFJWCxDQUFDQSxLQUpVLEVBS1gsSUFMVyxFQU1YLEtBTlcsQ0FBZjtBQVFBQyxNQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCMUIscUJBQXJCO0FBQ0F1QixNQUFBQSxNQUFNLENBQUNJLE1BQVAsQ0FBYy9CLE1BQWQ7QUFDQUYsTUFBQUEsU0FBUyxDQUFDNkIsTUFBRCxDQUFUO0FBRUEsVUFBTUssWUFBWSxHQUFHLElBQUlqRCwrQ0FBSixDQUF1QixRQUF2QixFQUFnQyxDQUFoQyxDQUFyQjtBQUNBdUIsTUFBQUEsS0FBSyxDQUFDNEIsR0FBTixDQUFVRixZQUFWO0FBRUEsVUFBTUcsUUFBUSxHQUFHLElBQUluRCxvRkFBSixDQUFtQjJDLE1BQW5CLEVBQTJCaEMsU0FBUSxDQUFDeUMsVUFBcEMsQ0FBakI7QUFDQUQsTUFBQUEsUUFBUSxDQUFDRSxVQUFULEdBQXNCLElBQXRCO0FBQ0FGLE1BQUFBLFFBQVEsQ0FBQ25DLE1BQVQsR0FBa0JBLE1BQWxCO0FBQ0FRLE1BQUFBLFdBQVcsQ0FBQzJCLFFBQUQsQ0FBWDtBQUVBbEQsTUFBQUEseURBQWEsQ0FBQ3FCLEtBQUQsRUFBUSxVQUFSLEVBQW9CO0FBQzdCZ0MsUUFBQUEsYUFBYSxFQUFFLEtBRGM7QUFFN0JDLFFBQUFBLFVBQVUsRUFBRTtBQUZpQixPQUFwQixDQUFiLENBR0dDLElBSEgsQ0FHUSxZQUFNO0FBQ1ZDLFFBQUFBLE9BQU87QUFDUC9DLFFBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFDSCxPQU5EO0FBUUEsVUFBSWdELEdBQUcsR0FBRyxJQUFWO0FBQ0EsVUFBSUMsS0FBSyxHQUFHLENBQVo7O0FBQ0EsVUFBTUYsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMsUUFBQUEsR0FBRyxHQUFHRSxxQkFBcUIsQ0FBQ0gsT0FBRCxDQUEzQjtBQUVBRSxRQUFBQSxLQUFLLEdBQUdBLEtBQUssSUFBSSxHQUFULEdBQWVBLEtBQUssR0FBRyxDQUF2QixHQUEyQkEsS0FBbkM7O0FBRUEsWUFBR0EsS0FBSyxJQUFJLEdBQVosRUFBaUI7QUFDYixjQUFNRSxDQUFDLEdBQUd6QyxxQkFBVjtBQUNBLGNBQU0wQyxRQUFRLEdBQUcsQ0FBQzVELFdBQVcsQ0FBQ3lELEtBQUssR0FBRyxHQUFULENBQVosR0FBNEJ2RCxJQUFJLENBQUNjLEVBQWpDLEdBQXNDLEVBQXZEO0FBRUF5QixVQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JrQixDQUFoQixHQUFvQixFQUFwQjtBQUNBcEIsVUFBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCMUMsQ0FBaEIsR0FDQTBELENBQUMsQ0FBQzFELENBQUYsR0FBTUMsSUFBSSxDQUFDZSxHQUFMLENBQVMyQyxRQUFULENBQU4sR0FBMkJELENBQUMsQ0FBQ0csQ0FBRixHQUFNNUQsSUFBSSxDQUFDYSxHQUFMLENBQVM2QyxRQUFULENBRGpDO0FBRUFuQixVQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JtQixDQUFoQixHQUNBSCxDQUFDLENBQUNHLENBQUYsR0FBTTVELElBQUksQ0FBQ2UsR0FBTCxDQUFTMkMsUUFBVCxDQUFOLEdBQTJCRCxDQUFDLENBQUMxRCxDQUFGLEdBQU1DLElBQUksQ0FBQ2EsR0FBTCxDQUFTNkMsUUFBVCxDQURqQztBQUVBbkIsVUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWMvQixNQUFkO0FBQ0gsU0FWRCxNQVVPO0FBQ0htQyxVQUFBQSxRQUFRLENBQUNjLE1BQVQ7QUFDSDs7QUFDRHRELFFBQUFBLFNBQVEsQ0FBQ3VELE1BQVQsQ0FBZ0I1QyxLQUFoQixFQUF1QnFCLE1BQXZCO0FBQ0gsT0FuQkQ7O0FBcUJBO0FBQ0g7QUFDSixHQXZFUSxFQXVFUCxFQXZFTyxDQUFUO0FBeUVBLHNCQUFPLDhEQUFDLGtEQUFEO0FBQ1AsT0FBRyxFQUFFbkMsWUFERTtBQUVQLGFBQVMsRUFBQyxXQUZIO0FBR1AsS0FBQyxFQUFDLE1BSEs7QUFJUCxNQUFFLEVBQUUsQ0FBQyxPQUFELEVBQVUsT0FBVixFQUFtQixRQUFuQixDQUpHO0FBS1AsTUFBRSxFQUFFLENBQUMsT0FBRCxFQUFTLFFBQVQsRUFBbUIsUUFBbkIsQ0FMRztBQU1QLEtBQUMsRUFBRSxDQUFDLEdBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixDQU5JO0FBT1AsS0FBQyxFQUFFLENBQUMsR0FBRCxFQUFLLEdBQUwsRUFBVSxHQUFWLENBUEk7QUFRUCxZQUFRLEVBQUMsVUFSRjtBQUFBLGNBVUZDLE9BQU8saUJBQ0osOERBQUMsc0RBQUQ7QUFDSSxVQUFJLEVBQUMsSUFEVDtBQUVJLGNBQVEsRUFBQyxVQUZiO0FBR0ksVUFBSSxFQUFDLEtBSFQ7QUFJSSxTQUFHLEVBQUMsS0FKUjtBQUtJLFFBQUUsRUFBQyxpQ0FMUDtBQU1JLFFBQUUsRUFBQztBQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFxQkgsQ0EvR0Q7O0dBQU1GOztLQUFBQTtBQWlITiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3ZveGVsLWRvZy5qcz8wZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgU3Bpbm5lciB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xuaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMnXG5pbXBvcnQgeyBsb2FkR0xURk1vZGVsIH0gZnJvbSBcIi4uL2xpYi9tb2RlbFwiO1xuXG5mdW5jdGlvbiBlYXNlT3V0Q2lyYyh4KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3coeCAtIDEsIDQpKVxufVxuXG5jb25zdCBWb3hlbERvZyA9ICgpID0+IHtcbiAgICBjb25zdCByZWZDb250YWluZXIgPSB1c2VSZWYoKVxuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbIHJlbmRlcmVyLCBzZXRSZW5kZXJlciBdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFsgX2NhbWVyYSwgc2V0Q2FtZXJhIF0gPSB1c2VTdGF0ZSgpXG4gICAgY29uc3QgWyB0YXJnZXQgXSA9IHVzZVN0YXRlKG5ldyBUSFJFRS5WZWN0b3IzKC0wLjUsIDEuMiwgMCkpXG4gICAgY29uc3QgWyBpbml0aWFsQ2FtZXJhUG9zaXRpb24gXSA9IHVzZVN0YXRlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgICAgIDIwICogTWF0aC5zaW4oMC4yICogTWF0aC5QSSksXG4gICAgICAgICAgICAxMCxcbiAgICAgICAgICAgIDIwICogTWF0aC5jb3MoMC4yICogTWF0aC5QSSlcbiAgICAgICAgKVxuICAgIClcbiAgICBjb25zdCBbIHNjZW5lIF0gPSB1c2VTdGF0ZShuZXcgVEhSRUUuU2NlbmUoKSlcbiAgICBjb25zdCBbIF9jb250cm9scywgc2V0Q29udHJvbHMgXSA9IHVzZVN0YXRlKClcblxuICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwcyAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgY3VycmVudDogY29udGFpbmVyIH0gPSByZWZDb250YWluZXIgXG4gICAgICAgIGlmKGNvbnRhaW5lciAmJiAhcmVuZGVyZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNjVyA9IGNvbnRhaW5lci5jbGllbnRXaWR0aFxuICAgICAgICAgICAgY29uc3Qgc2NIID0gY29udGFpbmVyLmNsaWVudEhlaWdodFxuXG4gICAgICAgICAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcbiAgICAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWUsXG4gICAgICAgICAgICAgICAgYWxwaGE6IHRydWVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZW5kZXJlci5zZXRQaXhlbFJhdGlvKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvKVxuICAgICAgICAgICAgcmVuZGVyZXIuc2V0U2l6ZShzY1csc2NIKVxuICAgICAgICAgICAgcmVuZGVyZXIub3V0cHV0RW5jb2RpbmcgPSBUSFJFRS5zUkdCRW5jb2RpbmdcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZGVudClcbiAgICAgICAgICAgIHNldFJlbmRlcmVyKHJlbmRlcmVyKVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHNjYWxlID0gc2NIICogMC4wMDUgKyA0LjhcbiAgICAgICAgICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoXG4gICAgICAgICAgICAgICAgLXNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIHNjYWxlLFxuICAgICAgICAgICAgICAgIC1zY2FsZSxcbiAgICAgICAgICAgICAgICAwLjAxLFxuICAgICAgICAgICAgICAgIDUwMDAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24uY29weShpbml0aWFsQ2FtZXJhUG9zaXRpb24pXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHRhcmdldClcbiAgICAgICAgICAgIHNldENhbWVyYShjYW1lcmEpXG5cbiAgICAgICAgICAgIGNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhjY2NjY2MsMSlcbiAgICAgICAgICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpXG5cbiAgICAgICAgICAgIGNvbnN0IGNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHMgKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudClcbiAgICAgICAgICAgIGNvbnRyb2xzLmF1dG9Sb3RhdGUgPSB0cnVlXG4gICAgICAgICAgICBjb250cm9scy50YXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgIHNldENvbnRyb2xzKGNvbnRyb2xzKVxuXG4gICAgICAgICAgICBsb2FkR0xURk1vZGVsKHNjZW5lLCAnL2RvZy5nbGInLCB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZVNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2FzdFNoYWRvdzogZmFsc2UsXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBhbmltYXRlKClcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbGV0IHJlcSA9IG51bGxcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IDBcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVxID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpXG5cbiAgICAgICAgICAgICAgICBmcmFtZSA9IGZyYW1lIDw9IDEwMCA/IGZyYW1lICsgMSA6IGZyYW1lXG5cbiAgICAgICAgICAgICAgICBpZihmcmFtZSA8PSAxMDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IGluaXRpYWxDYW1lcmFQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3RTcGVlZCA9IC1lYXNlT3V0Q2lyYyhmcmFtZSAvIDEyMCkgKiBNYXRoLlBJICogMjBcblxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSA9IDEwXG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gXG4gICAgICAgICAgICAgICAgICAgIHAueCAqIE1hdGguY29zKHJvdFNwZWVkKSArIHAueiAqIE1hdGguc2luKHJvdFNwZWVkKVxuICAgICAgICAgICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueiA9IFxuICAgICAgICAgICAgICAgICAgICBwLnogKiBNYXRoLmNvcyhyb3RTcGVlZCkgLSBwLnggKiBNYXRoLnNpbihyb3RTcGVlZClcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdCh0YXJnZXQpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbHMudXBkYXRlKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgfSxbXSlcbiAgICBcbiAgICByZXR1cm4gPEJveCBcbiAgICByZWY9e3JlZkNvbnRhaW5lcn1cbiAgICBjbGFzc05hbWU9J3ZveGVsLWRvZydcbiAgICBtPVwiYXV0b1wiXG4gICAgYXQ9e1snLTIwcHgnLCAnLTYwcHgnLCAnLTEyMHB4J119XG4gICAgbWI9e1snLTQwcHgnLCctMTQwcHMnLCAnLTIwMHB4J119XG4gICAgdz17WzI4MCw0ODAsIDY0MF19XG4gICAgaD17WzI4MCw0ODAsIDY0MF19XG4gICAgcG9zaXRpb249XCJyZWxhdGl2ZVwiXG4gICAgPlxuICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICA8U3Bpbm5lclxuICAgICAgICAgICAgICAgIHNpemU9XCJ4bFwiXG4gICAgICAgICAgICAgICAgcG9zaXRpb249XCJhYnNvbHV0ZVwiXG4gICAgICAgICAgICAgICAgbGVmdD1cIjUwJVwiXG4gICAgICAgICAgICAgICAgdG9wPVwiNTAlXCJcbiAgICAgICAgICAgICAgICBtbD1cImNhbGMoMHB4IC12YXIoLS1zcGlubmVyLXNpemUpLzJcIlxuICAgICAgICAgICAgICAgIG10PVwiY2FsYygwcHggLXZhcigtLXNwaW5uZXItc2l6ZSkpXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgPC9Cb3g+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZveGVsRG9nIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJCb3giLCJTcGlubmVyIiwiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwibG9hZEdMVEZNb2RlbCIsImVhc2VPdXRDaXJjIiwieCIsIk1hdGgiLCJzcXJ0IiwicG93IiwiVm94ZWxEb2ciLCJyZWZDb250YWluZXIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlbmRlcmVyIiwic2V0UmVuZGVyZXIiLCJfY2FtZXJhIiwic2V0Q2FtZXJhIiwiVmVjdG9yMyIsInRhcmdldCIsInNpbiIsIlBJIiwiY29zIiwiaW5pdGlhbENhbWVyYVBvc2l0aW9uIiwiU2NlbmUiLCJzY2VuZSIsIl9jb250cm9scyIsInNldENvbnRyb2xzIiwiY29udGFpbmVyIiwiY3VycmVudCIsInNjVyIsImNsaWVudFdpZHRoIiwic2NIIiwiY2xpZW50SGVpZ2h0IiwiV2ViR0xSZW5kZXJlciIsImFudGlhbGlhcyIsImFscGhhIiwic2V0UGl4ZWxSYXRpbyIsIndpbmRvdyIsImRldmljZVBpeGVsUmF0aW8iLCJzZXRTaXplIiwib3V0cHV0RW5jb2RpbmciLCJzUkdCRW5jb2RpbmciLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1kZW50Iiwic2NhbGUiLCJjYW1lcmEiLCJPcnRob2dyYXBoaWNDYW1lcmEiLCJwb3NpdGlvbiIsImNvcHkiLCJsb29rQXQiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJhZGQiLCJjb250cm9scyIsImRvbUVsZW1lbnQiLCJhdXRvUm90YXRlIiwicmVjZWl2ZVNoYWRvdyIsImNhc3RTaGFkb3ciLCJ0aGVuIiwiYW5pbWF0ZSIsInJlcSIsImZyYW1lIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicCIsInJvdFNwZWVkIiwieSIsInoiLCJ1cGRhdGUiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/voxel-dog.js\n");

/***/ })

});