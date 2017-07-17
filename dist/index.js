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
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("// Editor holder div\nconst edith = document.getElementById(\"edith\");\n\n// Text formatting via commandexec wrapper\nconst run = (command, prop = null) => Array.isArray(command) ? document.execCommand(command[0], false, command[1]) : document.execCommand(command, false, prop);\n\n// Text format actions. Each subarray is a section of a menu\nconst menu = document.createElement(\"DIV\");\nmenu.className = \"edith-menu\";\nconst buttons = [[{\n    command: ['formatBlock', '<P>'],\n    caption: '<p>A</p>',\n    tooltip: 'Normal'\n}, {\n    command: 'bold',\n    caption: '<b>B</b>',\n    tooltip: 'Bold'\n}, {\n    command: 'italic',\n    caption: '<i>I</i>',\n    tooltip: 'Italic'\n}, {\n    command: 'underline',\n    caption: '<u>U</u>',\n    tooltip: 'Underline'\n}, {\n    command: 'strikeThrough',\n    caption: '<strike>S</strike>',\n    tooltip: 'Strike Through'\n}], [{\n    command: ['formatBlock', '<PRE>'],\n    caption: '<b>&lt;&nbsp;&gt;</b>',\n    tooltip: 'Code'\n}, {\n    command: ['formatBlock', '<BLOCKQUOTE>'],\n    caption: '<b>&#8220;&#8221;</b>',\n    tooltip: 'Quote'\n}], [{\n    command: ['formatBlock', '<H1>'],\n    caption: '<p>H1</p>',\n    tooltip: 'H1'\n}, {\n    command: ['formatBlock', '<H2>'],\n    caption: '<p>H2</p>',\n    tooltip: 'H2'\n}, {\n    command: ['formatBlock', '<H3>'],\n    caption: '<p>H3</p>',\n    tooltip: 'H3'\n}, {\n    command: ['formatBlock', '<H4>'],\n    caption: '<p>H4</p>',\n    tooltip: 'H4'\n}]];\n\n// Acton buttons blocks builder\nbuttons.forEach(a => {\n    const section = document.createElement(\"DIV\");\n    section.className = \"edith-section\";\n    a.forEach(b => {\n        const button = document.createElement(\"DIV\");\n        button.className = \"edith-button\";\n        button.innerHTML = b.caption;\n        button.title = b.tooltip;\n        button.onmousedown = e => {\n            e.preventDefault();\n            run(b.command);\n        };\n        section.appendChild(button);\n    });\n    menu.appendChild(section);\n});\nedith.appendChild(menu);\n\n// Main input field\nconst inputField = document.createElement(\"DIV\");\ninputField.className = \"edith-content\";\ninputField.contentEditable = true;\nedith.appendChild(inputField);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZWRpdGguanM/YjZlYyJdLCJuYW1lcyI6WyJlZGl0aCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJydW4iLCJjb21tYW5kIiwicHJvcCIsIkFycmF5IiwiaXNBcnJheSIsImV4ZWNDb21tYW5kIiwibWVudSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJidXR0b25zIiwiY2FwdGlvbiIsInRvb2x0aXAiLCJmb3JFYWNoIiwiYSIsInNlY3Rpb24iLCJiIiwiYnV0dG9uIiwiaW5uZXJIVE1MIiwidGl0bGUiLCJvbm1vdXNlZG93biIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFwcGVuZENoaWxkIiwiaW5wdXRGaWVsZCIsImNvbnRlbnRFZGl0YWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxNQUFNQSxRQUFRQyxTQUFTQyxjQUFULENBQXdCLE9BQXhCLENBQWQ7O0FBRUE7QUFDQSxNQUFNQyxNQUFNLENBQUNDLE9BQUQsRUFBVUMsT0FBTyxJQUFqQixLQUEwQkMsTUFBTUMsT0FBTixDQUFjSCxPQUFkLElBQ2xDSCxTQUFTTyxXQUFULENBQXFCSixRQUFRLENBQVIsQ0FBckIsRUFBaUMsS0FBakMsRUFBd0NBLFFBQVEsQ0FBUixDQUF4QyxDQURrQyxHQUVsQ0gsU0FBU08sV0FBVCxDQUFxQkosT0FBckIsRUFBOEIsS0FBOUIsRUFBcUNDLElBQXJDLENBRko7O0FBSUE7QUFDQSxNQUFNSSxPQUFPUixTQUFTUyxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQUQsS0FBS0UsU0FBTCxHQUFpQixZQUFqQjtBQUNBLE1BQU1DLFVBQVUsQ0FDWixDQUFDO0FBQ09SLGFBQVMsQ0FBQyxhQUFELEVBQWdCLEtBQWhCLENBRGhCO0FBRU9TLGFBQVMsVUFGaEI7QUFHT0MsYUFBUztBQUhoQixDQUFELEVBS0k7QUFDSVYsYUFBUyxNQURiO0FBRUlTLGFBQVMsVUFGYjtBQUdJQyxhQUFTO0FBSGIsQ0FMSixFQVVJO0FBQ0lWLGFBQVMsUUFEYjtBQUVJUyxhQUFTLFVBRmI7QUFHSUMsYUFBUztBQUhiLENBVkosRUFjTztBQUNDVixhQUFTLFdBRFY7QUFFQ1MsYUFBUyxVQUZWO0FBR0NDLGFBQVM7QUFIVixDQWRQLEVBbUJJO0FBQ0lWLGFBQVMsZUFEYjtBQUVJUyxhQUFTLG9CQUZiO0FBR0lDLGFBQVM7QUFIYixDQW5CSixDQURZLEVBMEJaLENBQUM7QUFDT1YsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsT0FBaEIsQ0FEaEI7QUFFT1MsYUFBUyx1QkFGaEI7QUFHT0MsYUFBUztBQUhoQixDQUFELEVBS0k7QUFDSVYsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsY0FBaEIsQ0FEYjtBQUVJUyxhQUFTLHVCQUZiO0FBR0lDLGFBQVM7QUFIYixDQUxKLENBMUJZLEVBcUNaLENBQUM7QUFDT1YsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsTUFBaEIsQ0FEaEI7QUFFT1MsYUFBUyxXQUZoQjtBQUdPQyxhQUFTO0FBSGhCLENBQUQsRUFLSTtBQUNJVixhQUFTLENBQUMsYUFBRCxFQUFnQixNQUFoQixDQURiO0FBRUlTLGFBQVMsV0FGYjtBQUdJQyxhQUFTO0FBSGIsQ0FMSixFQVVJO0FBQ0lWLGFBQVMsQ0FBQyxhQUFELEVBQWdCLE1BQWhCLENBRGI7QUFFSVMsYUFBUyxXQUZiO0FBR0lDLGFBQVM7QUFIYixDQVZKLEVBZUk7QUFDSVYsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsTUFBaEIsQ0FEYjtBQUVJUyxhQUFTLFdBRmI7QUFHSUMsYUFBUztBQUhiLENBZkosQ0FyQ1ksQ0FBaEI7O0FBNERBO0FBQ0FGLFFBQVFHLE9BQVIsQ0FBZ0JDLEtBQUs7QUFDakIsVUFBTUMsVUFBVWhCLFNBQVNTLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQU8sWUFBUU4sU0FBUixHQUFvQixlQUFwQjtBQUNBSyxNQUFFRCxPQUFGLENBQVVHLEtBQUs7QUFDWCxjQUFNQyxTQUFTbEIsU0FBU1MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0FTLGVBQU9SLFNBQVAsR0FBbUIsY0FBbkI7QUFDQVEsZUFBT0MsU0FBUCxHQUFtQkYsRUFBRUwsT0FBckI7QUFDQU0sZUFBT0UsS0FBUCxHQUFlSCxFQUFFSixPQUFqQjtBQUNBSyxlQUFPRyxXQUFQLEdBQXFCQyxLQUFLO0FBQ3RCQSxjQUFFQyxjQUFGO0FBQ0FyQixnQkFBSWUsRUFBRWQsT0FBTjtBQUNILFNBSEQ7QUFJQWEsZ0JBQVFRLFdBQVIsQ0FBb0JOLE1BQXBCO0FBQ0gsS0FWRDtBQVdBVixTQUFLZ0IsV0FBTCxDQUFpQlIsT0FBakI7QUFDSCxDQWZEO0FBZ0JBakIsTUFBTXlCLFdBQU4sQ0FBa0JoQixJQUFsQjs7QUFFQTtBQUNBLE1BQU1pQixhQUFhekIsU0FBU1MsYUFBVCxDQUF1QixLQUF2QixDQUFuQjtBQUNBZ0IsV0FBV2YsU0FBWCxHQUF1QixlQUF2QjtBQUNBZSxXQUFXQyxlQUFYLEdBQTZCLElBQTdCO0FBQ0EzQixNQUFNeUIsV0FBTixDQUFrQkMsVUFBbEIiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEVkaXRvciBob2xkZXIgZGl2XHJcbmNvbnN0IGVkaXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlZGl0aFwiKTtcclxuXHJcbi8vIFRleHQgZm9ybWF0dGluZyB2aWEgY29tbWFuZGV4ZWMgd3JhcHBlclxyXG5jb25zdCBydW4gPSAoY29tbWFuZCwgcHJvcCA9IG51bGwpID0+IEFycmF5LmlzQXJyYXkoY29tbWFuZCkgP1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoY29tbWFuZFswXSwgZmFsc2UsIGNvbW1hbmRbMV0pIDpcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKGNvbW1hbmQsIGZhbHNlLCBwcm9wKTtcclxuXHJcbi8vIFRleHQgZm9ybWF0IGFjdGlvbnMuIEVhY2ggc3ViYXJyYXkgaXMgYSBzZWN0aW9uIG9mIGEgbWVudVxyXG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIkRJVlwiKTtcclxubWVudS5jbGFzc05hbWUgPSBcImVkaXRoLW1lbnVcIjtcclxuY29uc3QgYnV0dG9ucyA9IFtcclxuICAgIFt7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IFsnZm9ybWF0QmxvY2snLCAnPFA+J10sXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8cD5BPC9wPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdOb3JtYWwnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdib2xkJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxiPkI8L2I+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0JvbGQnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdpdGFsaWMnLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPGk+STwvaT4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnSXRhbGljJ1xyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgY29tbWFuZDogJ3VuZGVybGluZScsXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8dT5VPC91PicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdVbmRlcmxpbmUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6ICdzdHJpa2VUaHJvdWdoJyxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxzdHJpa2U+Uzwvc3RyaWtlPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdTdHJpa2UgVGhyb3VnaCdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgW3tcclxuICAgICAgICAgICAgY29tbWFuZDogWydmb3JtYXRCbG9jaycsICc8UFJFPiddLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPGI+Jmx0OyZuYnNwOyZndDs8L2I+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0NvZGUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IFsnZm9ybWF0QmxvY2snLCAnPEJMT0NLUVVPVEU+J10sXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8Yj4mIzgyMjA7JiM4MjIxOzwvYj4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnUXVvdGUnXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIFt7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IFsnZm9ybWF0QmxvY2snLCAnPEgxPiddLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPHA+SDE8L3A+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0gxJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb21tYW5kOiBbJ2Zvcm1hdEJsb2NrJywgJzxIMj4nXSxcclxuICAgICAgICAgICAgY2FwdGlvbjogJzxwPkgyPC9wPicsXHJcbiAgICAgICAgICAgIHRvb2x0aXA6ICdIMidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29tbWFuZDogWydmb3JtYXRCbG9jaycsICc8SDM+J10sXHJcbiAgICAgICAgICAgIGNhcHRpb246ICc8cD5IMzwvcD4nLFxyXG4gICAgICAgICAgICB0b29sdGlwOiAnSDMnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbW1hbmQ6IFsnZm9ybWF0QmxvY2snLCAnPEg0PiddLFxyXG4gICAgICAgICAgICBjYXB0aW9uOiAnPHA+SDQ8L3A+JyxcclxuICAgICAgICAgICAgdG9vbHRpcDogJ0g0J1xyXG4gICAgICAgIH1cclxuICAgIF1cclxuXTtcclxuXHJcbi8vIEFjdG9uIGJ1dHRvbnMgYmxvY2tzIGJ1aWxkZXJcclxuYnV0dG9ucy5mb3JFYWNoKGEgPT4ge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICBzZWN0aW9uLmNsYXNzTmFtZSA9IFwiZWRpdGgtc2VjdGlvblwiO1xyXG4gICAgYS5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9IFwiZWRpdGgtYnV0dG9uXCI7XHJcbiAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGIuY2FwdGlvbjtcclxuICAgICAgICBidXR0b24udGl0bGUgPSBiLnRvb2x0aXA7XHJcbiAgICAgICAgYnV0dG9uLm9ubW91c2Vkb3duID0gZSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcnVuKGIuY29tbWFuZCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XHJcbiAgICB9KTtcclxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2VjdGlvbik7XHJcbn0pO1xyXG5lZGl0aC5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbi8vIE1haW4gaW5wdXQgZmllbGRcclxuY29uc3QgaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJESVZcIik7XHJcbmlucHV0RmllbGQuY2xhc3NOYW1lID0gXCJlZGl0aC1jb250ZW50XCI7XHJcbmlucHV0RmllbGQuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcclxuZWRpdGguYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VkaXRoLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);