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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toLong(ipaddress) {
    return ipaddress.split('.').reduce(function (ipInt, octet) {
        return (ipInt << 8) + parseInt(octet, 10);
    }, 0) >>> 0;
}
exports.toLong = toLong;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9Mb25nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVG9Mb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0JBQXdCLFNBQWlCO0lBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssRUFBRSxLQUFLO1FBQ3ZELE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0lBQzNDLENBQUMsRUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDZCxDQUFDO0FBSkQsd0JBSUMifQ==

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function fromLong(ipInt) {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
}
exports.fromLong = fromLong;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnJvbUxvbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJGcm9tTG9uZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUEwQixLQUFhO0lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN0RyxDQUFDO0FBRkQsNEJBRUMifQ==

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GetOctetArray_1 = __webpack_require__(8);
var Mask_1 = __webpack_require__(4);
function networkAddress(subnet) {
    var maskOctets = GetOctetArray_1.getOctetArray(Mask_1.mask(subnet));
    var ipOctets = GetOctetArray_1.getOctetArray(subnet.split('/')[0]);
    var networkAddress = '';
    for (var i = 0; i < 4; i++) {
        var currMaskOctet = parseInt(maskOctets[i], 10);
        var currIpOctet = parseInt(ipOctets[i], 10);
        networkAddress = networkAddress.concat(String(currMaskOctet & currIpOctet));
        if (i !== 3) {
            networkAddress = networkAddress.concat('.');
        }
    }
    return networkAddress;
}
exports.networkAddress = networkAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV0d29ya0FkZHJlc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJOZXR3b3JrQWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGlEQUErQztBQUMvQywrQkFBNkI7QUFFN0Isd0JBQWdDLE1BQWM7SUFDNUMsSUFBSSxVQUFVLEdBQUcsNkJBQWEsQ0FBQyxXQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUM1QyxJQUFJLFFBQVEsR0FBRyw2QkFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNsRCxJQUFJLGNBQWMsR0FBRyxFQUFFLENBQUE7SUFDdkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUMzQixJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQy9DLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDM0MsY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFBO1FBQzNFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osY0FBYyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDN0MsQ0FBQztJQUNILENBQUM7SUFDRCxNQUFNLENBQUMsY0FBYyxDQUFBO0FBQ3ZCLENBQUM7QUFiRCx3Q0FhQyJ9

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = __webpack_require__(1);
var NetworkAddress_1 = __webpack_require__(2);
var ToLong_1 = __webpack_require__(0);
var numberHosts_1 = __webpack_require__(5);
function broadcastAddress(subnet) {
    var hostLong = ToLong_1.toLong(NetworkAddress_1.networkAddress(subnet));
    var broadcastLong = hostLong + (numberHosts_1.numberHosts(subnet, true) - 1); /* -1  as one Address already accounted for*/
    return FromLong_1.fromLong(broadcastLong);
}
exports.broadcastAddress = broadcastAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvYWRjYXN0QWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkJyb2FkY2FzdEFkZHJlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBcUM7QUFDckMsbURBQWlEO0FBQ2pELG1DQUFpQztBQUNqQyw2Q0FBMkM7QUFFM0MsMEJBQWtDLE1BQWM7SUFDOUMsSUFBSSxRQUFRLEdBQUcsZUFBTSxDQUFDLCtCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxJQUFJLGFBQWEsR0FBRyxRQUFRLEdBQUcsQ0FBQyx5QkFBVyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFBLDZDQUE2QztJQUMzRyxNQUFNLENBQUMsbUJBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtBQUNoQyxDQUFDO0FBSkQsNENBSUMifQ==

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = __webpack_require__(1);
function mask(subnet) {
    var split = subnet.split('/');
    var longMask = Math.pow(2, 32) - Math.pow(2, 32 - parseInt(split[1], 10));
    return FromLong_1.fromLong(longMask);
}
exports.mask = mask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBcUM7QUFFckMsY0FBc0IsTUFBYztJQUNsQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDekUsTUFBTSxDQUFDLG1CQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7QUFDM0IsQ0FBQztBQUpELG9CQUlDIn0=

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CidrToMask_1 = __webpack_require__(6);
function numberHosts(subnet, inclusive) {
    var addresses = Math.pow(2, 32 - CidrToMask_1.cidrToMask(subnet));
    return inclusive ? addresses : addresses - 2;
}
exports.numberHosts = numberHosts;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVySG9zdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJudW1iZXJIb3N0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUV6QyxxQkFBNkIsTUFBYyxFQUFFLFNBQWtCO0lBQzdELElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsR0FBRyx1QkFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDcEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0FBQzlDLENBQUM7QUFIRCxrQ0FHQyJ9

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function cidrToMask(subnet) {
    var split = subnet.split('/');
    return parseInt(split[1], 10);
}
exports.cidrToMask = cidrToMask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lkclRvTWFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkNpZHJUb01hc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBNEIsTUFBYztJQUN4QyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdCLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQy9CLENBQUM7QUFIRCxnQ0FHQyJ9

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["__extends"] = __extends;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (immutable) */ __webpack_exports__["__rest"] = __rest;
/* harmony export (immutable) */ __webpack_exports__["__decorate"] = __decorate;
/* harmony export (immutable) */ __webpack_exports__["__param"] = __param;
/* harmony export (immutable) */ __webpack_exports__["__metadata"] = __metadata;
/* harmony export (immutable) */ __webpack_exports__["__awaiter"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["__generator"] = __generator;
/* harmony export (immutable) */ __webpack_exports__["__exportStar"] = __exportStar;
/* harmony export (immutable) */ __webpack_exports__["__values"] = __values;
/* harmony export (immutable) */ __webpack_exports__["__read"] = __read;
/* harmony export (immutable) */ __webpack_exports__["__spread"] = __spread;
/* harmony export (immutable) */ __webpack_exports__["__await"] = __await;
/* harmony export (immutable) */ __webpack_exports__["__asyncGenerator"] = __asyncGenerator;
/* harmony export (immutable) */ __webpack_exports__["__asyncDelegator"] = __asyncDelegator;
/* harmony export (immutable) */ __webpack_exports__["__asyncValues"] = __asyncValues;
/* harmony export (immutable) */ __webpack_exports__["__makeTemplateObject"] = __makeTemplateObject;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { if (o[n]) i[n] = function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; }; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator];
    return m ? m.call(o) : typeof __values === "function" ? __values(o) : o[Symbol.iterator]();
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getOctetArray(ipaddress) {
    return ipaddress.split('.');
}
exports.getOctetArray = getOctetArray;
function getOctet(ipaddress, octet) {
    return getOctetArray(ipaddress)[octet - 1];
}
exports.getOctet = getOctet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2V0T2N0ZXRBcnJheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkdldE9jdGV0QXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1QkFBK0IsU0FBaUI7SUFDOUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDN0IsQ0FBQztBQUZELHNDQUVDO0FBRUQsa0JBQTBCLFNBQWlCLEVBQUUsS0FBYTtJQUN4RCxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM1QyxDQUFDO0FBRkQsNEJBRUMifQ==

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var numberHosts_1 = __webpack_require__(5);
var FirstHost_1 = __webpack_require__(10);
var NetworkAddress_1 = __webpack_require__(2);
var BroadcastAddress_1 = __webpack_require__(3);
var CidrToMask_1 = __webpack_require__(6);
var LastHost_1 = __webpack_require__(11);
var Mask_1 = __webpack_require__(4);
function cidrInfo(subnet) {
    return {
        networkAddress: NetworkAddress_1.networkAddress(subnet),
        broadcastAddress: BroadcastAddress_1.broadcastAddress(subnet),
        numberHosts: numberHosts_1.numberHosts(subnet, false),
        inclusiveNumberHosts: numberHosts_1.numberHosts(subnet, true),
        firstHostAddress: FirstHost_1.firstHost(subnet),
        lastHostAddress: LastHost_1.lastHost(subnet),
        mask: Mask_1.mask(subnet),
        cidrMask: CidrToMask_1.cidrToMask(subnet),
        contains: Function
    };
}
exports.cidrInfo = cidrInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2lkckluZm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJDaWRySW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZDQUEyQztBQUMzQyx5Q0FBdUM7QUFDdkMsbURBQWlEO0FBQ2pELHVEQUFxRDtBQUNyRCwyQ0FBeUM7QUFDekMsdUNBQXFDO0FBQ3JDLCtCQUE2QjtBQUU3QixrQkFBMEIsTUFBYztJQUN0QyxNQUFNLENBQUM7UUFDTCxjQUFjLEVBQUUsK0JBQWMsQ0FBQyxNQUFNLENBQUM7UUFDdEMsZ0JBQWdCLEVBQUUsbUNBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzFDLFdBQVcsRUFBRSx5QkFBVyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7UUFDdkMsb0JBQW9CLEVBQUUseUJBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDO1FBQy9DLGdCQUFnQixFQUFFLHFCQUFTLENBQUMsTUFBTSxDQUFDO1FBQ25DLGVBQWUsRUFBRSxtQkFBUSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLEVBQUUsV0FBSSxDQUFDLE1BQU0sQ0FBQztRQUNsQixRQUFRLEVBQUUsdUJBQVUsQ0FBQyxNQUFNLENBQUM7UUFDNUIsUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FBQTtBQUNILENBQUM7QUFaRCw0QkFZQyJ9

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = __webpack_require__(1);
var NetworkAddress_1 = __webpack_require__(2);
var ToLong_1 = __webpack_require__(0);
function firstHost(subnet) {
    var longFirstHost = ToLong_1.toLong(NetworkAddress_1.networkAddress(subnet)) + 1;
    return FromLong_1.fromLong(longFirstHost);
}
exports.firstHost = firstHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlyc3RIb3N0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiRmlyc3RIb3N0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXFDO0FBQ3JDLG1EQUFpRDtBQUNqRCxtQ0FBaUM7QUFFakMsbUJBQTJCLE1BQWM7SUFDdkMsSUFBSSxhQUFhLEdBQUcsZUFBTSxDQUFDLCtCQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEQsTUFBTSxDQUFDLG1CQUFRLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDaEMsQ0FBQztBQUhELDhCQUdDIn0=

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = __webpack_require__(1);
var BroadcastAddress_1 = __webpack_require__(3);
var ToLong_1 = __webpack_require__(0);
function lastHost(subnet) {
    var broadcastLong = BroadcastAddress_1.broadcastAddress(subnet);
    return FromLong_1.fromLong(ToLong_1.toLong(broadcastLong) - 1);
}
exports.lastHost = lastHost;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFzdEhvc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJMYXN0SG9zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVDQUFxQztBQUNyQyx1REFBcUQ7QUFDckQsbUNBQWlDO0FBRWpDLGtCQUEwQixNQUFjO0lBQ3RDLElBQUksYUFBYSxHQUFHLG1DQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzVDLE1BQU0sQ0FBQyxtQkFBUSxDQUFDLGVBQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUM1QyxDQUFDO0FBSEQsNEJBR0MifQ==

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function maskToCidr(mask) {
    var countCharOccurences = function (testString, testChar) { return testString.split(testChar).length - 1; };
    var decimalToBinary = function (dec) { return (dec >>> 0).toString(2); };
    var getNetMaskParts = function (nmask) { return nmask.split('.').map(Number); };
    var netmask2CIDR = function (mask) { return countCharOccurences(getNetMaskParts(mask)
        .map(function (part) { return decimalToBinary(part); })
        .join(''), '1'); };
    return String(netmask2CIDR(mask));
}
exports.maskToCidr = maskToCidr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFza1RvQ2lkci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIk1hc2tUb0NpZHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBNEIsSUFBWTtJQUN0QyxJQUFNLG1CQUFtQixHQUFHLFVBQUMsVUFBa0IsRUFBRyxRQUFnQixJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFyQyxDQUFxQyxDQUFBO0lBQzVHLElBQU0sZUFBZSxHQUFHLFVBQUMsR0FBVyxJQUFLLE9BQUEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUF2QixDQUF1QixDQUFBO0lBQ2hFLElBQU0sZUFBZSxHQUFHLFVBQUMsS0FBYSxJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQTVCLENBQTRCLENBQUE7SUFDdkUsSUFBTSxZQUFZLEdBQUcsVUFBQyxJQUFZLElBQUssT0FBQSxtQkFBbUIsQ0FDeEQsZUFBZSxDQUFDLElBQUksQ0FBQztTQUNsQixHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQXJCLENBQXFCLENBQUM7U0FDbEMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUNYLEdBQUcsQ0FDSixFQUxzQyxDQUt0QyxDQUFBO0lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtBQUNuQyxDQUFDO0FBWEQsZ0NBV0MifQ==

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
tslib_1.__exportStar(__webpack_require__(14), exports);
tslib_1.__exportStar(__webpack_require__(0), exports);
tslib_1.__exportStar(__webpack_require__(1), exports);
tslib_1.__exportStar(__webpack_require__(15), exports);
tslib_1.__exportStar(__webpack_require__(8), exports);
tslib_1.__exportStar(__webpack_require__(3), exports);
tslib_1.__exportStar(__webpack_require__(9), exports);
tslib_1.__exportStar(__webpack_require__(6), exports);
tslib_1.__exportStar(__webpack_require__(10), exports);
tslib_1.__exportStar(__webpack_require__(16), exports);
tslib_1.__exportStar(__webpack_require__(11), exports);
tslib_1.__exportStar(__webpack_require__(4), exports);
tslib_1.__exportStar(__webpack_require__(12), exports);
tslib_1.__exportStar(__webpack_require__(2), exports);
tslib_1.__exportStar(__webpack_require__(5), exports);
tslib_1.__exportStar(__webpack_require__(17), exports);
tslib_1.__exportStar(__webpack_require__(0), exports);
tslib_1.__exportStar(__webpack_require__(18), exports);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBMkI7QUFDM0IsbURBQXdCO0FBQ3hCLHFEQUEwQjtBQUMxQixzREFBMkI7QUFDM0IsMERBQStCO0FBQy9CLDZEQUFrQztBQUNsQyxxREFBMEI7QUFDMUIsdURBQTRCO0FBQzVCLHNEQUEyQjtBQUMzQix1REFBNEI7QUFDNUIscURBQTBCO0FBQzFCLGlEQUFzQjtBQUN0Qix1REFBNEI7QUFDNUIsMkRBQWdDO0FBQ2hDLHdEQUE2QjtBQUM3Qix1REFBNEI7QUFDNUIsbURBQXdCO0FBQ3hCLHFEQUEwQiJ9

/***/ }),
/* 14 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNWYWxpZElwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSXNWYWxpZElwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTSxJQUFJLEdBQUcsa0tBQWtLLENBQUE7QUFDL0ssSUFBTSxJQUFJLEdBQUcsdXBCQUF1cEIsQ0FBQTtBQUVwcUIsbUJBQTJCLFNBQWM7SUFDdkMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO0FBQzNELENBQUM7QUFGRCw4QkFFQztBQUVELHFCQUE2QixTQUFjO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLENBQUM7QUFGRCxrQ0FFQztBQUVELHFCQUE2QixTQUFjO0lBQ3pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLENBQUM7QUFGRCxrQ0FFQyJ9

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNQcml2YXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSXNQcml2YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUJBQTJCLFNBQWlCO0lBQzFDLE1BQU0sQ0FBQywyREFBMkQ7U0FDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNsQixtREFBbUQsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25FLGtFQUFrRTthQUMvRCxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2xCLDREQUE0RCxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUUsbURBQW1ELENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuRSxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDMUIsQ0FBQztBQVpELDhCQVlDIn0=

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(7);
var ToLong_1 = __webpack_require__(0);
function isReserved(ipaddress) {
    return ipInReservedRange(ipaddress);
}
exports.isReserved = isReserved;
// Taken from wikipedia https://en.wikipedia.org/wiki/Reserved_IP_addresses
var RESERVED_RANGES = [
    ['0.0.0.0', '0.255.255.255'],
    ['10.0.0.0', '10.255.255.255'],
    ['100.64.0.0', '100.127.255.255'],
    ['127.0.0.0', '127.255.255.255'],
    ['169.254.0.0', '169.254.255.255'],
    ['172.16.0.0', '172.31.255.255'],
    ['192.0.0.0', '192.0.0.255'],
    ['192.0.2.0', '192.0.2.255'],
    ['192.88.99.0', '192.88.99.255'],
    ['192.168.0.0', '192.168.255.255'],
    ['198.18.0.0', '198.19.255.255'],
    ['198.51.100.0', '198.51.100.255'],
    ['203.0.113.0', '203.0.113.255'],
    ['224.0.0.0', '239.255.255.255'],
    ['240.0.0.0', '255.255.255.255']
];
function ipInReservedRange(ipaddress) {
    var inRange = false;
    try {
        for (var RESERVED_RANGES_1 = tslib_1.__values(RESERVED_RANGES), RESERVED_RANGES_1_1 = RESERVED_RANGES_1.next(); !RESERVED_RANGES_1_1.done; RESERVED_RANGES_1_1 = RESERVED_RANGES_1.next()) {
            var range = RESERVED_RANGES_1_1.value;
            if (ipInRange(ipaddress, range)) {
                inRange = true;
                break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (RESERVED_RANGES_1_1 && !RESERVED_RANGES_1_1.done && (_a = RESERVED_RANGES_1.return)) _a.call(RESERVED_RANGES_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return inRange;
    var e_1, _a;
}
function ipInRange(ipaddress, range) {
    var ip = ToLong_1.toLong(ipaddress);
    var startRange = ToLong_1.toLong(range[0]);
    var endRange = ToLong_1.toLong(range[1]);
    return ip >= startRange && ip <= endRange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSXNSZXNlcnZlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIklzUmVzZXJ2ZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWlDO0FBRWpDLG9CQUE0QixTQUFpQjtJQUMzQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUE7QUFDckMsQ0FBQztBQUZELGdDQUVDO0FBQ0QsMkVBQTJFO0FBQzNFLElBQU0sZUFBZSxHQUFHO0lBQ3RCLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQztJQUM1QixDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDLFlBQVksRUFBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztJQUNoQyxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUM7SUFDNUIsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDO0lBQzVCLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQztJQUNoQyxDQUFDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztJQUNoQyxDQUFDLGNBQWMsRUFBRSxnQkFBZ0IsQ0FBQztJQUNsQyxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7SUFDaEMsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUM7SUFDaEMsQ0FBQyxXQUFXLEVBQUUsaUJBQWlCLENBQUM7Q0FDakMsQ0FBQTtBQUVELDJCQUE0QixTQUFpQjtJQUMzQyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUE7O1FBQ25CLEdBQUcsQ0FBQyxDQUFjLElBQUEsb0JBQUEsaUJBQUEsZUFBZSxDQUFBLGdEQUFBO1lBQTVCLElBQUksS0FBSyw0QkFBQTtZQUNaLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFBO2dCQUNkLEtBQUssQ0FBQTtZQUNQLENBQUM7U0FDRjs7Ozs7Ozs7O0lBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQTs7QUFDaEIsQ0FBQztBQUVELG1CQUFvQixTQUFpQixFQUFFLEtBQWU7SUFDcEQsSUFBSSxFQUFFLEdBQUcsZUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFCLElBQUksVUFBVSxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNqQyxJQUFJLFFBQVEsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDL0IsTUFBTSxDQUFDLEVBQUUsSUFBSSxVQUFVLElBQUksRUFBRSxJQUFJLFFBQVEsQ0FBQTtBQUMzQyxDQUFDIn0=

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MaskToCidr_1 = __webpack_require__(12);
var CidrInfo_1 = __webpack_require__(9);
function subnetInfo(ipaddress, mask) {
    var cidr = MaskToCidr_1.maskToCidr(mask);
    var subnetCidr = ipaddress + '/' + cidr;
    return CidrInfo_1.cidrInfo(subnetCidr);
}
exports.subnetInfo = subnetInfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3VibmV0SW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN1Ym5ldEluZm8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSwyQ0FBeUM7QUFDekMsdUNBQXFDO0FBRXJDLG9CQUE0QixTQUFpQixFQUFFLElBQVk7SUFDekQsSUFBSSxJQUFJLEdBQUcsdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzQixJQUFJLFVBQVUsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQTtJQUN2QyxNQUFNLENBQUMsbUJBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQTtBQUM3QixDQUFDO0FBSkQsZ0NBSUMifQ==

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function toString(ipInt) {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
}
exports.toString = toString;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9TdHJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJUb1N0cmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUEwQixLQUFhO0lBQ3JDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN0RyxDQUFDO0FBRkQsNEJBRUMifQ==

/***/ })
/******/ ]);
});