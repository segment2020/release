/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AlignmentBlockTune"] = factory();
	else
		root["AlignmentBlockTune"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Build styles\n */\n__webpack_require__(/*! ./index.css */ \"./src/index.css\").toString();\n\nvar _require = __webpack_require__(/*! ./util */ \"./src/util.js\"),\n    make = _require.make;\n\nvar AlignmentBlockTune = /*#__PURE__*/function () {\n  /**\n   *\n   * @param api\n   * @param data 既に設定されているデータ\n   * @param settings tuneに設定項目\n   * @param block tuneに設定されてるblock\n   */\n  function AlignmentBlockTune(_ref) {\n    var api = _ref.api,\n        data = _ref.data,\n        settings = _ref.settings,\n        block = _ref.block;\n\n    _classCallCheck(this, AlignmentBlockTune);\n\n    this.api = api;\n    this.block = block;\n    /**\n     config:{\n        default: \"left\",\n        blocks: {\n          header: 'center',\n          list: 'right'\n        }\n      },\n     */\n\n    this.settings = settings;\n    this.data = data || {\n      alignment: this.getAlignment()\n    };\n    this.alignmentSettings = [{\n      name: 'left',\n      icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"50mm\\\" height=\\\"50mm\\\" viewBox=\\\"0 0 5000 5000\\\" shape-rendering=\\\"geometricPrecision\\\" text-rendering=\\\"geometricPrecision\\\" image-rendering=\\\"optimizeQuality\\\" fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\"><defs><style>.fil0{fill:#2f2b2c}</style></defs><g id=\\\"Слой_x0020_1\\\"><g id=\\\"_1715404005872\\\"><path class=\\\"fil0\\\" d=\\\"M2459 2734l4 626v65c0 15-7 12-14 4-75-88-149-175-223-263-17-19-48-30-65-17l-1 1c-18 14 4 44 19 62l53 66 1 1v1l163 200c15 19 56 74 104 74s89-55 104-74l163-200v-1l1-1 53-66c15-18 37-48 19-62l-1-1c-17-13-48-2-65 17-74 88-148 175-223 263-7 8-14 11-14-4v-65l4-626 1012-1h47l2-1h9l2-1h4l2-1h3l2-1h2l2-1h2l1-1h2l1-1 2-1h1l2-1 1-1 2-1 1-1 1-1 1-1 2-1 1-1 1-1 1-1 1-1 1-2v-1l1-1 1-2v-1l1-2v-2l1-1v-2l1-2v-6-5c1-25-1-30-33-32H1376c-32 2-34 7-33 32v11l1 2v2l1 1v2l1 2v1l1 2 1 1 1 1v2l1 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 1 1 1 2 1h1l2 1 1 1h2l1 1h2l2 1h2l2 1h3l2 1h4l2 1h9l2 1h47l1012 1zM2459 2266l4-626v-65c0-15-7-12-14-4-75 88-149 175-223 263-17 19-48 30-65 17l-1-1c-18-14 4-44 19-62l53-66 1-1v-1l163-200c15-19 56-74 104-74s89 55 104 74l163 200v1l1 1 53 66c15 18 37 48 19 62l-1 1c-17 13-48 2-65-17-74-88-148-175-223-263-7-8-14-11-14 4v65l4 626 1012 1h47l2 1h9l2 1h4l2 1h3l2 1h2l2 1h2l1 1h2l1 1 2 1h1l2 1 1 1 2 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 1 1 2v1l1 1 1 2v1l1 2v2l1 1v2l1 2v11c1 25-1 30-33 32H1376c-32-2-34-7-33-32v-11l1-2v-2l1-1v-2l1-2v-1l1-2 1-1 1-1v-2l1-1 1-1 1-1 1-1 2-1 1-1 1-1 1-1 2-1 1-1 2-1h1l2-1 1-1h2l1-1h2l2-1h2l2-1h3l2-1h4l2-1h9l2-1h47l1012-1z\\\"/></g></g></svg>\"\n    }, {\n      name: 'center',\n      icon: \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"50mm\\\" height=\\\"50mm\\\" viewBox=\\\"0 0 5000 5000\\\" shape-rendering=\\\"geometricPrecision\\\" text-rendering=\\\"geometricPrecision\\\" image-rendering=\\\"optimizeQuality\\\" fill-rule=\\\"evenodd\\\" clip-rule=\\\"evenodd\\\"><defs><style>.fil0{fill:#2f2b2c}</style></defs><g id=\\\"Слой_x0020_1\\\"><g id=\\\"_1680868231600\\\"><path class=\\\"fil0\\\" d=\\\"M2459 1397l4 626v64c0 15-7 13-14 4-75-87-149-174-223-262-17-19-48-31-65-17l-1 1c-18 14 4 44 19 62l53 65 1 1v1l163 201c15 19 56 73 104 73s89-54 104-73l163-201v-1l1-1 53-65c15-18 37-48 19-62l-1-1c-17-14-48-2-65 17-74 88-148 175-223 262-7 9-14 11-14-4v-64l4-626 1012-1h45l2-1h9l2-1h6l2-1h2l1-1h4l2-1h2l1-1 2-1h1l2-1 1-1h2l1-1 2-1 1-1 1-1 1-1 2-1 1-1 1-1 1-1 1-2 1-1v-1l1-2 1-1v-2l1-1v-2l1-1v-2l1-2v-6-5c1-25-1-30-33-32H1376c-32 2-34 7-33 32v11l1 2v2l1 1v2l1 1v2l1 1 1 2 1 1v1l1 2 1 1 1 1 1 1 2 1 1 1 1 1 1 1 2 1 1 1h2l1 1 2 1h1l2 1 1 1h2l2 1h4l1 1h2l2 1h6l2 1h9l2 1h45l1012 1zM2459 3603l4-626v-64c0-15-7-13-14-4-75 87-149 174-223 262-17 19-48 31-65 17l-1-1c-18-14 4-44 19-62l53-65 1-1v-1l163-201c15-19 56-73 104-73s89 54 104 73l163 201v1l1 1 53 65c15 18 37 48 19 62l-1 1c-17 14-48 2-65-17-74-88-148-175-223-262-7-9-14-11-14 4v64l4 626 1012 1h45l2 1h9l2 1h6l2 1h2l1 1h4l2 1h2l1 1 2 1h1l2 1 1 1h2l1 1 2 1 1 1 1 1 1 1 2 1 1 1 1 1 1 1 1 2 1 1v1l1 2 1 1v2l1 1v2l1 1v2l1 2v11c1 25-1 31-33 32H1376c-32-1-34-7-33-32v-11l1-2v-2l1-1v-2l1-1v-2l1-1 1-2 1-1v-1l1-2 1-1 1-1 1-1 2-1 1-1 1-1 1-1 2-1 1-1h2l1-1 2-1h1l2-1 1-1h2l2-1h4l1-1h2l2-1h6l2-1h9l2-1h45l1012-1z\\\"/></g></g></svg>\"\n    }];\n    this._CSS = {\n      alignment: {\n        left: 'ce-standart-block',\n        center: 'ce-is-collapsed',\n       }\n    };\n  }\n  /**\n   * block自体をwrapしてくれる\n   * constructorで与えられたalignmentを代入しようとすると、holderが確定してなく\n   * renderでやろうとすると、tuneを表示時に処理が走る\n   * @param blockContent\n   */\n\n\n  _createClass(AlignmentBlockTune, [{\n    key: \"getAlignment\",\n    value: function getAlignment() {\n      var _this$settings, _this$settings2;\n\n      if (!!((_this$settings = this.settings) !== null && _this$settings !== void 0 && _this$settings.blocks) && this.settings.blocks.hasOwnProperty(this.block.name)) {\n        return this.settings.blocks[this.block.name];\n      }\n\n      if (!!((_this$settings2 = this.settings) !== null && _this$settings2 !== void 0 && _this$settings2[\"default\"])) {\n        return this.settings[\"default\"];\n      }\n\n      return AlignmentBlockTune.DEFAULT_ALIGNMENT;\n    }\n  }, {\n    key: \"wrap\",\n    value: function wrap(blockContent) {\n      this.wrapper = make(\"div\");\n      this.wrapper.classList.toggle(this._CSS.alignment[this.data.alignment]);\n      this.wrapper.append(blockContent);\n      return this.wrapper;\n    }\n    /**\n     * rendering block tune\n     * @returns {*}\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var wrapper = make(\"div\");\n      this.alignmentSettings.map(function (align) {\n        var button = document.createElement('button');\n        button.classList.add(_this.api.styles.settingsButton);\n        button.innerHTML = align.icon;\n        button.classList.toggle(_this.api.styles.settingsButtonActive, align.name === _this.data.alignment);\n        wrapper.appendChild(button);\n        return button;\n      }).forEach(function (element, index, elements) {\n        element.addEventListener('click', function (e) {\n          e.preventDefault();\n           \n          _this.data = {\n            alignment: _this.alignmentSettings[index].name\n          };\n          elements.forEach(function (el, i) {\n            var name = _this.alignmentSettings[i].name;\n            el.classList.toggle(_this.api.styles.settingsButtonActive, name === _this.data.alignment); //toggle alignment style class for block\n\n            _this.wrapper.classList.toggle(_this._CSS.alignment[name], name === _this.data.alignment);\n          });\n        });\n      });\n      return wrapper;\n    }\n    /**\n     * save\n     * @returns {*}\n     */\n\n  }, {\n    key: \"save\",\n    value: function save() {\n      return this.data;\n    }\n  }], [{\n    key: \"DEFAULT_ALIGNMENT\",\n    get:\n    /**\n     * Default alignment\n     *\n     * @public\n     * @returns {string}\n     */\n    function get() {\n      return 'left';\n    }\n  }, {\n    key: \"isTune\",\n    get: function get() {\n      return true;\n    }\n  }]);\n\n  return AlignmentBlockTune;\n}();\n\nmodule.exports = AlignmentBlockTune;\n\n//# sourceURL=webpack://AlignmentBlockTune/./src/index.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"make\": function() { return /* binding */ make; }\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/**\n * node 作成用\n * @param tagName\n * @param classNames\n * @param attributes\n * @returns {*}\n */\nfunction make(tagName) {\n  var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var el = document.createElement(tagName);\n\n  if (Array.isArray(classNames)) {\n    var _el$classList;\n\n    (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n  } else if (classNames) {\n    el.classList.add(classNames);\n  }\n\n  for (var attrName in attributes) {\n    el[attrName] = attributes[attrName];\n  }\n\n  return el;\n}\n\n//# sourceURL=webpack://AlignmentBlockTune/./src/util.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/index.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/index.css ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".ce-tune-alignment--right {\\n    text-align: right;\\n}\\n.ce-tune-alignment--center {\\n    text-align: center;\\n}\\n.ce-tune-alignment--left {\\n    text-align: left;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://AlignmentBlockTune/./src/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://AlignmentBlockTune/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/index.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://AlignmentBlockTune/./src/index.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://AlignmentBlockTune/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});