"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CidrToMask_1 = require("./CidrToMask");
function numberHosts(subnet, inclusive) {
    var addresses = Math.pow(2, 32 - CidrToMask_1.cidrToMask(subnet));
    return inclusive ? addresses : addresses - 2;
}
exports.numberHosts = numberHosts;
