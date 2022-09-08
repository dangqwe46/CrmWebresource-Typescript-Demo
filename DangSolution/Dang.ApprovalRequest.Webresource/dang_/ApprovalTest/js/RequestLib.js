/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var Dang;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entities/Request/RequestForm.ts":
/*!*********************************************!*\
  !*** ./src/entities/Request/RequestForm.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestForm\": () => (/* binding */ RequestForm)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass RequestForm {\r\n    static On_Load(executionContext) {\r\n        var _a;\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const formContext = executionContext.getFormContext();\r\n            const name = formContext.getAttribute(\"dang_name\" /* dang_approvalrequestAttributes.dang_Name */);\r\n            Xrm.Navigation.openAlertDialog({\r\n                text: (_a = name === null || name === void 0 ? void 0 : name.getValue()) !== null && _a !== void 0 ? _a : \"default\",\r\n                title: \"Onload dialog\",\r\n                confirmButtonLabel: \"Oke\",\r\n            });\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvUmVxdWVzdC9SZXF1ZXN0Rm9ybS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRU8sTUFBTSxXQUFXO0lBQ3RCLE1BQU0sQ0FBTyxPQUFPLENBQUMsZ0JBQXlDOzs7WUFDNUQsTUFBTSxXQUFXLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdEQsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDLFlBQVksNERBRXBDLENBQUM7WUFDRixHQUFHLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDN0IsSUFBSSxFQUFFLFVBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxRQUFRLEVBQUUsbUNBQUksU0FBUztnQkFDbkMsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLGtCQUFrQixFQUFFLEtBQUs7YUFDMUIsQ0FBQyxDQUFDOztLQUNKO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EYW5nLkFwcHJvdmFsVGVzdC8uL3NyYy9lbnRpdGllcy9SZXF1ZXN0L1JlcXVlc3RGb3JtLnRzP2RkODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGFuZ19hcHByb3ZhbHJlcXVlc3RBdHRyaWJ1dGVzIH0gZnJvbSBcIi4uLy4uL2RhdGF2ZXJzZS1nZW4vZW50aXRpZXMvZGFuZ19hcHByb3ZhbHJlcXVlc3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0Rm9ybSB7XHJcbiAgc3RhdGljIGFzeW5jIE9uX0xvYWQoZXhlY3V0aW9uQ29udGV4dDogWHJtLkV2ZW50cy5FdmVudENvbnRleHQpIHtcclxuICAgIGNvbnN0IGZvcm1Db250ZXh0ID0gZXhlY3V0aW9uQ29udGV4dC5nZXRGb3JtQ29udGV4dCgpO1xyXG4gICAgY29uc3QgbmFtZSA9IGZvcm1Db250ZXh0LmdldEF0dHJpYnV0ZTxYcm0uQXR0cmlidXRlcy5TdHJpbmdBdHRyaWJ1dGU+KFxyXG4gICAgICBkYW5nX2FwcHJvdmFscmVxdWVzdEF0dHJpYnV0ZXMuZGFuZ19OYW1lXHJcbiAgICApO1xyXG4gICAgWHJtLk5hdmlnYXRpb24ub3BlbkFsZXJ0RGlhbG9nKHtcclxuICAgICAgdGV4dDogbmFtZT8uZ2V0VmFsdWUoKSA/PyBcImRlZmF1bHRcIixcclxuICAgICAgdGl0bGU6IFwiT25sb2FkIGRpYWxvZ1wiLFxyXG4gICAgICBjb25maXJtQnV0dG9uTGFiZWw6IFwiT2tlXCIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/entities/Request/RequestForm.ts\n");

/***/ }),

/***/ "./src/entities/Request/RequestRibbon.ts":
/*!***********************************************!*\
  !*** ./src/entities/Request/RequestRibbon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestRibbon\": () => (/* binding */ RequestRibbon)\n/* harmony export */ });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass RequestRibbon {\r\n    static ApproveClickCommand(formContext) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            console.log(\"Approved\");\r\n        });\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvUmVxdWVzdC9SZXF1ZXN0UmliYm9uLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLGFBQWE7SUFDeEIsTUFBTSxDQUFPLG1CQUFtQixDQUFDLFdBQWdCOztZQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFCLENBQUM7S0FBQTtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGFuZy5BcHByb3ZhbFRlc3QvLi9zcmMvZW50aXRpZXMvUmVxdWVzdC9SZXF1ZXN0UmliYm9uLnRzPzEwYWMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFJlcXVlc3RSaWJib24ge1xyXG4gIHN0YXRpYyBhc3luYyBBcHByb3ZlQ2xpY2tDb21tYW5kKGZvcm1Db250ZXh0OiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXBwcm92ZWRcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/entities/Request/RequestRibbon.ts\n");

/***/ }),

/***/ "./src/entries/RequestLib.ts":
/*!***********************************!*\
  !*** ./src/entries/RequestLib.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RequestForm\": () => (/* reexport safe */ _entities_Request_RequestForm__WEBPACK_IMPORTED_MODULE_1__.RequestForm),\n/* harmony export */   \"RequestRibbon\": () => (/* reexport safe */ _entities_Request_RequestRibbon__WEBPACK_IMPORTED_MODULE_0__.RequestRibbon)\n/* harmony export */ });\n/* harmony import */ var _entities_Request_RequestRibbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities/Request/RequestRibbon */ \"./src/entities/Request/RequestRibbon.ts\");\n/* harmony import */ var _entities_Request_RequestForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities/Request/RequestForm */ \"./src/entities/Request/RequestForm.ts\");\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50cmllcy9SZXF1ZXN0TGliLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0U7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL0RhbmcuQXBwcm92YWxUZXN0Ly4vc3JjL2VudHJpZXMvUmVxdWVzdExpYi50cz8yODYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IFJlcXVlc3RSaWJib24gfSBmcm9tIFwiLi4vZW50aXRpZXMvUmVxdWVzdC9SZXF1ZXN0UmliYm9uXCI7XHJcbmV4cG9ydCB7IFJlcXVlc3RGb3JtIH0gZnJvbSBcIi4uL2VudGl0aWVzL1JlcXVlc3QvUmVxdWVzdEZvcm1cIjtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/entries/RequestLib.ts\n");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/entries/RequestLib.ts");
/******/ 	(Dang = typeof Dang === "undefined" ? {} : Dang).ApprovalTest = __webpack_exports__;
/******/ 	
/******/ })()
;