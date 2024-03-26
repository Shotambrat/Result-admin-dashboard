/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/public/js/app.js":
/*!******************************!*\
  !*** ./src/public/js/app.js ***!
  \******************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    const sidebarToggle = document.getElementById('sidebarToggle');\r\n    const sidebar = document.getElementById('sidebar');\r\n    const themeToggleBtn = document.getElementById('themeToggle');\r\n\r\n    sidebarToggle.addEventListener('click', () => {\r\n        sidebar.classList.toggle('-translate-x-full');\r\n    });\r\n\r\n    themeToggleBtn.addEventListener('click', () => {\r\n        document.documentElement.classList.toggle('dark');\r\n    });\r\n\r\n    const userAvatarButton = document.getElementById('avatar');\r\n    const dropdownMenu = document.getElementById('dropdown');\r\n\r\n    userAvatarButton.addEventListener('click', () => {\r\n        dropdownMenu.classList.toggle('hidden');\r\n    });\r\n});\n\n//# sourceURL=webpack://result-back/./src/public/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/public/js/app.js"]();
/******/ 	
/******/ })()
;