"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function cidrToMask(subnet) {
    var split = subnet.split('/');
    return parseInt(split[1], 10);
}
exports.cidrToMask = cidrToMask;
