/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************!*\
  !*** multi ./src/edith.js ***!
  \****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\editor\src\edith.js */1);


/***/ }),
/* 1 */
/*!**********************!*\
  !*** ./src/edith.js ***!
  \**********************/
/*! exports provided:  */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons__ = __webpack_require__(/*! ./buttons */ 2);\n\n// Editor holder div\nconst edith = document.getElementById(\"edith\");\n\n// Text formatting via commandexec wrapper\nconst run = (command, prop = null) => Array.isArray(command) ? document.execCommand(command[0], false, command[1]) : document.execCommand(command, false, prop);\n\n// Text format actions. Each subarray is a section of a menu\nconst menu = document.createElement(\"DIV\");\nmenu.className = \"edith-menu\";\n\n// Acton buttons blocks builder\n__WEBPACK_IMPORTED_MODULE_0__buttons__[\"a\" /* buttons */].forEach(a => {\n    const section = document.createElement(\"DIV\");\n    section.className = \"edith-section\";\n    a.forEach(b => {\n        const button = document.createElement(\"DIV\");\n        button.className = \"edith-button\";\n        button.innerHTML = b.caption;\n        button.title = b.tooltip;\n        button.onmousedown = e => {\n            e.preventDefault();\n            run(b.command);\n        };\n        section.appendChild(button);\n    });\n    menu.appendChild(section);\n});\nedith.appendChild(menu);\n\n// Main input field\nconst inputField = document.createElement(\"DIV\");\ninputField.className = \"edith-content\";\ninputField.contentEditable = true;\nedith.appendChild(inputField);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZWRpdGguanM/YjZlYyJdLCJuYW1lcyI6WyJlZGl0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJydW4iLCJjb21tYW5kIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImV4ZWNDb21tYW5kIiwibWVudSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJidXR0b25zIiwiZm9yRWFjaCIsImEiLCJzZWN0aW9uIiwiYiIsImJ1dHRvbiIsImlubmVySFRNTCIsImNhcHRpb24iLCJ0aXRsZSIsInRvb2x0aXAiLCJvbm1vdXNlZG93biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5wdXRGaWVsZCIsImNvbnRlbnRFZGl0YWJsZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsUUFBUUMsU0FBU0MsY0FBVCxDQUF3QixPQUF4QixDQUFkOztBQUVBO0FBQ0EsTUFBTUMsTUFBTSxDQUFDQyxPQUFELEVBQVVDLE9BQU8sSUFBakIsS0FBMEJDLE1BQU1DLE9BQU4sQ0FBY0gsT0FBZCxJQUNsQ0gsU0FBU08sV0FBVCxDQUFxQkosUUFBUSxDQUFSLENBQXJCLEVBQWlDLEtBQWpDLEVBQXdDQSxRQUFRLENBQVIsQ0FBeEMsQ0FEa0MsR0FFbENILFNBQVNPLFdBQVQsQ0FBcUJKLE9BQXJCLEVBQThCLEtBQTlCLEVBQXFDQyxJQUFyQyxDQUZKOztBQUlBO0FBQ0EsTUFBTUksT0FBT1IsU0FBU1MsYUFBVCxDQUF1QixLQUF2QixDQUFiO0FBQ0FELEtBQUtFLFNBQUwsR0FBaUIsWUFBakI7O0FBR0E7QUFDQSx5REFBQUMsQ0FBUUMsT0FBUixDQUFnQkMsS0FBSztBQUNqQixVQUFNQyxVQUFVZCxTQUFTUyxhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FLLFlBQVFKLFNBQVIsR0FBb0IsZUFBcEI7QUFDQUcsTUFBRUQsT0FBRixDQUFVRyxLQUFLO0FBQ1gsY0FBTUMsU0FBU2hCLFNBQVNTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBTyxlQUFPTixTQUFQLEdBQW1CLGNBQW5CO0FBQ0FNLGVBQU9DLFNBQVAsR0FBbUJGLEVBQUVHLE9BQXJCO0FBQ0FGLGVBQU9HLEtBQVAsR0FBZUosRUFBRUssT0FBakI7QUFDQUosZUFBT0ssV0FBUCxHQUFxQkMsS0FBSztBQUN0QkEsY0FBRUMsY0FBRjtBQUNBckIsZ0JBQUlhLEVBQUVaLE9BQU47QUFDSCxTQUhEO0FBSUFXLGdCQUFRVSxXQUFSLENBQW9CUixNQUFwQjtBQUNILEtBVkQ7QUFXQVIsU0FBS2dCLFdBQUwsQ0FBaUJWLE9BQWpCO0FBQ0gsQ0FmRDtBQWdCQWYsTUFBTXlCLFdBQU4sQ0FBa0JoQixJQUFsQjs7QUFFQTtBQUNBLE1BQU1pQixhQUFhekIsU0FBU1MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBZ0IsV0FBV2YsU0FBWCxHQUF1QixlQUF2QjtBQUNBZSxXQUFXQyxlQUFYLEdBQTZCLElBQTdCO0FBQ0EzQixNQUFNeUIsV0FBTixDQUFrQkMsVUFBbEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YnV0dG9uc30gZnJvbSAnLi9idXR0b25zJztcclxuLy8gRWRpdG9yIGhvbGRlciBkaXZcclxuY29uc3QgZWRpdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRoXCIpO1xyXG5cclxuLy8gVGV4dCBmb3JtYXR0aW5nIHZpYSBjb21tYW5kZXhlYyB3cmFwcGVyXHJcbmNvbnN0IHJ1biA9IChjb21tYW5kLCBwcm9wID0gbnVsbCkgPT4gQXJyYXkuaXNBcnJheShjb21tYW5kKSA/XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChjb21tYW5kWzBdLCBmYWxzZSwgY29tbWFuZFsxXSkgOlxyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoY29tbWFuZCwgZmFsc2UsIHByb3ApO1xyXG5cclxuLy8gVGV4dCBmb3JtYXQgYWN0aW9ucy4gRWFjaCBzdWJhcnJheSBpcyBhIHNlY3Rpb24gb2YgYSBtZW51XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5tZW51LmNsYXNzTmFtZSA9IFwiZWRpdGgtbWVudVwiOyBcclxuXHJcblxyXG4vLyBBY3RvbiBidXR0b25zIGJsb2NrcyBidWlsZGVyXHJcbmJ1dHRvbnMuZm9yRWFjaChhID0+IHtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgc2VjdGlvbi5jbGFzc05hbWUgPSBcImVkaXRoLXNlY3Rpb25cIjtcclxuICAgIGEuZm9yRWFjaChiID0+IHtcclxuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSBcImVkaXRoLWJ1dHRvblwiO1xyXG4gICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBiLmNhcHRpb247XHJcbiAgICAgICAgYnV0dG9uLnRpdGxlID0gYi50b29sdGlwO1xyXG4gICAgICAgIGJ1dHRvbi5vbm1vdXNlZG93biA9IGUgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHJ1bihiLmNvbW1hbmQpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChidXR0b24pO1xyXG4gICAgfSk7XHJcbiAgICBtZW51LmFwcGVuZENoaWxkKHNlY3Rpb24pO1xyXG59KTtcclxuZWRpdGguYXBwZW5kQ2hpbGQobWVudSk7XHJcblxyXG4vLyBNYWluIGlucHV0IGZpZWxkXHJcbmNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiRElWXCIpO1xyXG5pbnB1dEZpZWxkLmNsYXNzTmFtZSA9IFwiZWRpdGgtY29udGVudFwiO1xyXG5pbnB1dEZpZWxkLmNvbnRlbnRFZGl0YWJsZSA9IHRydWU7XHJcbmVkaXRoLmFwcGVuZENoaWxkKGlucHV0RmllbGQpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lZGl0aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/*! exports provided: buttons */
/*! exports used: buttons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("const buttons = [[{\n    command: ['formatBlock', '<P>'],\n    caption: '<p>A</p>',\n    tooltip: 'Normal'\n}, {\n    command: 'bold',\n    caption: '<b>B</b>',\n    tooltip: 'Bold'\n}, {\n    command: 'italic',\n    caption: '<i>I</i>',\n    tooltip: 'Italic'\n}, {\n    command: 'underline',\n    caption: '<u>U</u>',\n    tooltip: 'Underline'\n}, {\n    command: 'strikeThrough',\n    caption: '<strike>S</strike>',\n    tooltip: 'Strike Through'\n}], [{\n    command: ['formatBlock', '<PRE>'],\n    caption: '<b>&lt;&nbsp;&gt;</b>',\n    tooltip: 'Code'\n}, {\n    command: ['formatBlock', '<BLOCKQUOTE>'],\n    caption: '<b>&#8220;&#8221;</b>',\n    tooltip: 'Quote'\n}], [{\n    command: ['formatBlock', '<H1>'],\n    caption: '<p>H1</p>',\n    tooltip: 'H1'\n}, {\n    command: ['formatBlock', '<H2>'],\n    caption: '<p>H2</p>',\n    tooltip: 'H2'\n}, {\n    command: ['formatBlock', '<H3>'],\n    caption: '<p>H3</p>',\n    tooltip: 'H3'\n}, {\n    command: ['formatBlock', '<H4>'],\n    caption: '<p>H4</p>',\n    tooltip: 'H4'\n}]];\n/* harmony export (immutable) */ __webpack_exports__[\"a\"] = buttons;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYnV0dG9ucy5qcz83ZWQ5Il0sIm5hbWVzIjpbImJ1dHRvbnMiLCJjb21tYW5kIiwiY2FwdGlvbiIsInRvb2x0aXAiXSwibWFwcGluZ3MiOiJBQUFPLE1BQU1BLFVBQVUsQ0FDbkIsQ0FBQztBQUNPQyxhQUFTLENBQUMsYUFBRCxFQUFnQixLQUFoQixDQURoQjtBQUVPQyxhQUFTLFVBRmhCO0FBR09DLGFBQVM7QUFIaEIsQ0FBRCxFQUtJO0FBQ0lGLGFBQVMsTUFEYjtBQUVJQyxhQUFTLFVBRmI7QUFHSUMsYUFBUztBQUhiLENBTEosRUFVSTtBQUNJRixhQUFTLFFBRGI7QUFFSUMsYUFBUyxVQUZiO0FBR0lDLGFBQVM7QUFIYixDQVZKLEVBY087QUFDQ0YsYUFBUyxXQURWO0FBRUNDLGFBQVMsVUFGVjtBQUdDQyxhQUFTO0FBSFYsQ0FkUCxFQW1CSTtBQUNJRixhQUFTLGVBRGI7QUFFSUMsYUFBUyxvQkFGYjtBQUdJQyxhQUFTO0FBSGIsQ0FuQkosQ0FEbUIsRUEwQm5CLENBQUM7QUFDT0YsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FEaEI7QUFFT0MsYUFBUyx1QkFGaEI7QUFHT0MsYUFBUztBQUhoQixDQUFELEVBS0k7QUFDSUYsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsQ0FEYjtBQUVJQyxhQUFTLHVCQUZiO0FBR0lDLGFBQVM7QUFIYixDQUxKLENBMUJtQixFQXFDbkIsQ0FBQztBQUNPRixhQUFTLENBQUMsYUFBRCxFQUFnQixNQUFoQixDQURoQjtBQUVPQyxhQUFTLFdBRmhCO0FBR09DLGFBQVM7QUFIaEIsQ0FBRCxFQUtJO0FBQ0lGLGFBQVMsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBRGI7QUFFSUMsYUFBUyxXQUZiO0FBR0lDLGFBQVM7QUFIYixDQUxKLEVBVUk7QUFDSUYsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsTUFBaEIsQ0FEYjtBQUVJQyxhQUFTLFdBRmI7QUFHSUMsYUFBUztBQUhiLENBVkosRUFlSTtBQUNJRixhQUFTLENBQUMsYUFBRCxFQUFnQixNQUFoQixDQURiO0FBRUlDLGFBQVMsV0FGYjtBQUdJQyxhQUFTO0FBSGIsQ0FmSixDQXJDbUIsQ0FBaEIsQyIsImZpbGUiOiIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGJ1dHRvbnMgPSBbXHJcbiAgICBbe1xyXG4gICAgICAgICAgICBjb21tYW5kOiBbJ2Zvcm1hdEJsb2NrJywgJzxQPiddLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPHA+QTwvcD4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnTm9ybWFsJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tYW5kOiAnYm9sZCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8Yj5CPC9iPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdCb2xkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tYW5kOiAnaXRhbGljJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxpPkk8L2k+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0l0YWxpYydcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6ICd1bmRlcmxpbmUnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPHU+VTwvdT4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnVW5kZXJsaW5lJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tYW5kOiAnc3RyaWtlVGhyb3VnaCcsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8c3RyaWtlPlM8L3N0cmlrZT4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnU3RyaWtlIFRocm91Z2gnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFt7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IFsnZm9ybWF0QmxvY2snLCAnPFBSRT4nXSxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxiPiZsdDsmbmJzcDsmZ3Q7PC9iPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdDb2RlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tYW5kOiBbJ2Zvcm1hdEJsb2NrJywgJzxCTE9DS1FVT1RFPiddLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPGI+JiM4MjIwOyYjODIyMTs8L2I+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ1F1b3RlJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBbe1xyXG4gICAgICAgICAgICBjb21tYW5kOiBbJ2Zvcm1hdEJsb2NrJywgJzxIMT4nXSxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxwPkgxPC9wPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdIMSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29tbWFuZDogWydmb3JtYXRCbG9jaycsICc8SDI+J10sXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8cD5IMjwvcD4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnSDInXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IFsnZm9ybWF0QmxvY2snLCAnPEgzPiddLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPHA+SDM8L3A+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0gzJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tYW5kOiBbJ2Zvcm1hdEJsb2NrJywgJzxIND4nXSxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxwPkg0PC9wPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdINCdcclxuICAgICAgICB9XHJcbiAgICBdXHJcbl07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2J1dHRvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ })
/******/ ]);