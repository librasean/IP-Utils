"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetOctetArray_1 = require("./GetOctetArray");
var Mask_1 = require("./Mask");
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
