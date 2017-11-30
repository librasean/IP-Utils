"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = require("./FromLong");
function mask(subnet) {
    var split = subnet.split('/');
    var longMask = Math.pow(2, 32) - Math.pow(2, 32 - parseInt(split[1], 10));
    return FromLong_1.fromLong(longMask);
}
exports.mask = mask;
