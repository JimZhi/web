"use strict";
(self["webpackChunk_2_1_source_map"] = self["webpackChunk_2_1_source_map"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/lib/axios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _react_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./react/App */ "./src/react/App.jsx");
/* harmony import */ var _ts_math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ts/math */ "./src/ts/math.ts");





var message = "Hello World";
console.log(message);
var foo = function foo() {
  console.log("foo function exec~");
};
foo();
var nickName = 'coder123luffytyui';
console.log(nickName.includes('luffy'));

// console.log(counter)

var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.querySelector("#root"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_App__WEBPACK_IMPORTED_MODULE_2__["default"], null));
console.log((0,_ts_math__WEBPACK_IMPORTED_MODULE_3__.sum)(20, 30));
console.log((0,_ts_math__WEBPACK_IMPORTED_MODULE_3__.sum)("aaa", "bbb"));

// 请求数据
// http://localhost:9000/users/list
axios__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/users/list').then(function (res) {
  console.log(res.data);
});

/***/ }),

/***/ "./src/react/App.jsx":
/*!***************************!*\
  !*** ./src/react/App.jsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var App = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(function (props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "App"));
});
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/ts/math.ts":
/*!************************!*\
  !*** ./src/ts/math.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatPrice": function() { return /* binding */ formatPrice; },
/* harmony export */   "sum": function() { return /* binding */ sum; }
/* harmony export */ });
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(20, 100));
function formatPrice(priceString) {
  if (priceString.includes('$')) {
    return 'xxxx';
  } else {
    return 'yyyy';
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_react-dom_client_js"], function() { return __webpack_exec__("./src/main.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-bundle.js.map