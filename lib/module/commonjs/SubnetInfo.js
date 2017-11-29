"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaskToCidr_1 = require("./MaskToCidr");
var CidrInfo_1 = require("./CidrInfo");
function subnetInfo(ipaddress, mask) {
    var cidr = MaskToCidr_1.maskToCidr(mask);
    var subnetCidr = ipaddress + '/' + cidr;
    return CidrInfo_1.cidrInfo(subnetCidr);
}
exports.subnetInfo = subnetInfo;
