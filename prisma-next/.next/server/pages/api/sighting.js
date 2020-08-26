module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/sighting/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/sighting/index.ts":
/*!*************************************!*\
  !*** ./pages/api/sighting/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (_, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]({\n    log: [\"query\"]\n  });\n\n  try {\n    const sightings = await prisma.sighting.findMany();\n    res.status(200);\n    res.json({\n      data: sightings\n    });\n  } catch (error) {\n    res.status(500);\n    res.json({\n      error: error,\n      msg: \"Sorry unable to find  sighting\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2lnaHRpbmcvaW5kZXgudHM/YmI5YSJdLCJuYW1lcyI6WyJfIiwicmVzIiwicHJpc21hIiwiUHJpc21hQ2xpZW50IiwibG9nIiwic2lnaHRpbmdzIiwic2lnaHRpbmciLCJmaW5kTWFueSIsInN0YXR1cyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJtc2ciLCIkZGlzY29ubmVjdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFHZSwrRUFBZ0JBLENBQWhCLEVBQW1DQyxHQUFuQyxFQUF5RDtBQUN0RSxRQUFNQyxNQUFNLEdBQUcsSUFBSUMsMkRBQUosQ0FBaUI7QUFBRUMsT0FBRyxFQUFFLENBQUMsT0FBRDtBQUFQLEdBQWpCLENBQWY7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFNBQVMsR0FBRyxNQUFNSCxNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDLFFBQWhCLEVBQXhCO0FBQ0FOLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVg7QUFDQVAsT0FBRyxDQUFDUSxJQUFKLENBQVM7QUFBRUMsVUFBSSxFQUFFTDtBQUFSLEtBQVQ7QUFDRCxHQUpELENBSUUsT0FBT00sS0FBUCxFQUFjO0FBQ2RWLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVg7QUFDQVAsT0FBRyxDQUFDUSxJQUFKLENBQVM7QUFBRUUsV0FBSyxFQUFFQSxLQUFUO0FBQWdCQyxTQUFHLEVBQUU7QUFBckIsS0FBVDtBQUNELEdBUEQsU0FPVTtBQUNSLFVBQU1WLE1BQU0sQ0FBQ1csV0FBUCxFQUFOO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NpZ2h0aW5nL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKF86IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcbiAgdHJ5IHtcbiAgICBjb25zdCBzaWdodGluZ3MgPSBhd2FpdCBwcmlzbWEuc2lnaHRpbmcuZmluZE1hbnkoKTtcbiAgICByZXMuc3RhdHVzKDIwMCk7XG4gICAgcmVzLmpzb24oeyBkYXRhOiBzaWdodGluZ3MgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApO1xuICAgIHJlcy5qc29uKHsgZXJyb3I6IGVycm9yLCBtc2c6IFwiU29ycnkgdW5hYmxlIHRvIGZpbmQgIHNpZ2h0aW5nXCIgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/sighting/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@prisma/client\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcHJpc21hL2NsaWVudFwiP2UwMDciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQHByaXNtYS9jbGllbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL2NsaWVudFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@prisma/client\n");

/***/ })

/******/ });