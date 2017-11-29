"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toString(ipInt) {
    return ((ipInt >>> 24) + '.' + (ipInt >> 16 & 255) + '.' + (ipInt >> 8 & 255) + '.' + (ipInt & 255));
}
exports.toString = toString;
