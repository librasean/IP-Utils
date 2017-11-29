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
