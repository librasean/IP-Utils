(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ipUtils"] = factory();
	else
		root["ipUtils"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IPV4 = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
var IPV6 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
function isValidIp(ipaddress) {
    return (isValidIpv4(ipaddress) || isValidIpv6(ipaddress));
}
exports.isValidIp = isValidIp;
function isValidIpv4(ipaddress) {
    return IPV4.test(ipaddress);
}
exports.isValidIpv4 = isValidIpv4;
function isValidIpv6(ipaddress) {
    return IPV6.test(ipaddress);
}
exports.isValidIpv6 = isValidIpv6;
function stringToInt(ipaddress) {
    return ipaddress.split('.').reduce(function (ipInt, octet) {
        return (ipInt << 8) + parseInt(octet, 10);
    }, 0) >>> 0;
}
exports.stringToInt = stringToInt;
function intToSring(ipInt) {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
}
exports.intToSring = intToSring;
function isPrivate(ipaddress) {
    return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i
        .test(ipaddress) ||
        /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ipaddress) ||
        /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
            .test(ipaddress) ||
        /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ipaddress) ||
        /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ipaddress) ||
        /^f[cd][0-9a-f]{2}:/i.test(ipaddress) ||
        /^fe80:/i.test(ipaddress) ||
        /^::1$/.test(ipaddress) ||
        /^::$/.test(ipaddress);
}
exports.isPrivate = isPrivate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sSUFBSSxHQUFHLGtLQUFrSyxDQUFBO0FBQy9LLElBQU0sSUFBSSxHQUFHLHVwQkFBdXBCLENBQUE7QUFFcHFCLG1CQUEyQixTQUFjO0lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQTtBQUMzRCxDQUFDO0FBRkQsOEJBRUM7QUFFRCxxQkFBNkIsU0FBYztJQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBRkQsa0NBRUM7QUFFRCxxQkFBNkIsU0FBYztJQUN6QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBRkQsa0NBRUM7QUFFRCxxQkFBNkIsU0FBaUI7SUFDNUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxFQUFFLEtBQUs7UUFDdkQsTUFBTSxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFDM0MsQ0FBQyxFQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNkLENBQUM7QUFKRCxrQ0FJQztBQUVELG9CQUE0QixLQUFhO0lBQ3ZDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN0RyxDQUFDO0FBRkQsZ0NBRUM7QUFFRCxtQkFBMkIsU0FBaUI7SUFDMUMsTUFBTSxDQUFDLDJEQUEyRDtTQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xCLG1EQUFtRCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbkUsa0VBQWtFO2FBQy9ELElBQUksQ0FBQyxTQUFTLENBQUM7UUFDbEIsNERBQTRELENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUM1RSxtREFBbUQsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25FLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDckMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDekIsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkIsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUMxQixDQUFDO0FBWkQsOEJBWUMifQ==

/***/ })
/******/ ]);
});