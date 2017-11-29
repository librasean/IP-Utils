"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToString_1 = require("./ToString");
function mask(subnet) {
    var split = subnet.split('/');
    var longMask = Math.pow(2, 32) - Math.pow(2, 32 - parseInt(split[1], 10));
    return ToString_1.toString(longMask);
}
exports.mask = mask;
