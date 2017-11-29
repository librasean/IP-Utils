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
