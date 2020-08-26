module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/sighting/create.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/sighting/create.ts":
/*!**************************************!*\
  !*** ./pages/api/sighting/create.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async function (req, res) {\n  const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"PrismaClient\"]({\n    log: [\"query\"]\n  });\n\n  try {\n    const {\n      sighting: sightingData\n    } = req.body;\n    const sighting = await prisma.sighting.create({\n      data: {\n        latitude: sightingData.latitude,\n        longitude: sightingData.longitude\n      }\n    });\n    res.status(200);\n    res.json({\n      data: sighting\n    });\n  } catch (error) {\n    res.status(500);\n    res.json({\n      error: error,\n      msg: \"Sorry unable to save sighting to database\"\n    });\n  } finally {\n    await prisma.$disconnect();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc2lnaHRpbmcvY3JlYXRlLnRzP2RkODUiXSwibmFtZXMiOlsicmVxIiwicmVzIiwicHJpc21hIiwiUHJpc21hQ2xpZW50IiwibG9nIiwic2lnaHRpbmciLCJzaWdodGluZ0RhdGEiLCJib2R5IiwiY3JlYXRlIiwiZGF0YSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibXNnIiwiJGRpc2Nvbm5lY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR2UsK0VBQWdCQSxHQUFoQixFQUFxQ0MsR0FBckMsRUFBMkQ7QUFDeEUsUUFBTUMsTUFBTSxHQUFHLElBQUlDLDJEQUFKLENBQWlCO0FBQUVDLE9BQUcsRUFBRSxDQUFDLE9BQUQ7QUFBUCxHQUFqQixDQUFmOztBQUNBLE1BQUk7QUFDRixVQUFNO0FBQUVDLGNBQVEsRUFBRUM7QUFBWixRQUE2Qk4sR0FBRyxDQUFDTyxJQUF2QztBQUNBLFVBQU1GLFFBQVEsR0FBRyxNQUFNSCxNQUFNLENBQUNHLFFBQVAsQ0FBZ0JHLE1BQWhCLENBQXVCO0FBQzVDQyxVQUFJLEVBQUU7QUFDSkMsZ0JBQVEsRUFBRUosWUFBWSxDQUFDSSxRQURuQjtBQUVKQyxpQkFBUyxFQUFFTCxZQUFZLENBQUNLO0FBRnBCO0FBRHNDLEtBQXZCLENBQXZCO0FBTUFWLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsT0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBRUosVUFBSSxFQUFFSjtBQUFSLEtBQVQ7QUFDRCxHQVZELENBVUUsT0FBT1MsS0FBUCxFQUFjO0FBQ2RiLE9BQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVg7QUFDQVgsT0FBRyxDQUFDWSxJQUFKLENBQVM7QUFBRUMsV0FBSyxFQUFFQSxLQUFUO0FBQWdCQyxTQUFHLEVBQUU7QUFBckIsS0FBVDtBQUNELEdBYkQsU0FhVTtBQUNSLFVBQU1iLE1BQU0sQ0FBQ2MsV0FBUCxFQUFOO0FBQ0Q7QUFDRixDIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3NpZ2h0aW5nL2NyZWF0ZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KHsgbG9nOiBbXCJxdWVyeVwiXSB9KTtcbiAgdHJ5IHtcbiAgICBjb25zdCB7IHNpZ2h0aW5nOiBzaWdodGluZ0RhdGEgfSA9IHJlcS5ib2R5O1xuICAgIGNvbnN0IHNpZ2h0aW5nID0gYXdhaXQgcHJpc21hLnNpZ2h0aW5nLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhdGl0dWRlOiBzaWdodGluZ0RhdGEubGF0aXR1ZGUsXG4gICAgICAgIGxvbmdpdHVkZTogc2lnaHRpbmdEYXRhLmxvbmdpdHVkZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApO1xuICAgIHJlcy5qc29uKHsgZGF0YTogc2lnaHRpbmcgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApO1xuICAgIHJlcy5qc29uKHsgZXJyb3I6IGVycm9yLCBtc2c6IFwiU29ycnkgdW5hYmxlIHRvIHNhdmUgc2lnaHRpbmcgdG8gZGF0YWJhc2VcIiB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/sighting/create.ts\n");

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