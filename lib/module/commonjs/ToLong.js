"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toLong(ipaddress) {
    return ipaddress.split('.').reduce(function (ipInt, octet) {
        return (ipInt << 8) + parseInt(octet, 10);
    }, 0) >>> 0;
}
exports.toLong = toLong;
