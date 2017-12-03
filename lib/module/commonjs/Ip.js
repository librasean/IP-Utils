"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IsValidIp_1 = require("./IsValidIp");
var IsReserved_1 = require("./IsReserved");
var IsPrivate_1 = require("./IsPrivate");
var GetOctetArray_1 = require("./GetOctetArray");
var Contains_1 = require("./Contains");
var Ip = /** @class */ (function () {
    function Ip(ipaddress) {
        this.ip = ipaddress;
    }
    Ip.prototype.isValid = function () {
        return IsValidIp_1.isValidIp(this.ip);
    };
    Ip.prototype.isReserved = function () {
        return IsReserved_1.isReserved(this.ip);
    };
    Ip.prototype.isPrivate = function () {
        return IsPrivate_1.isPrivate(this.ip);
    };
    Ip.prototype.getOctetArray = function () {
        return GetOctetArray_1.getOctetArray(this.ip);
    };
    Ip.prototype.getOctet = function (octet) {
        return GetOctetArray_1.getOctet(this.ip, octet);
    };
    Ip.prototype.containedBy = function (network) {
        return Contains_1.contains(network, this.ip);
    };
    return Ip;
}());
exports.Ip = Ip;
function ip(ipaddress) {
    return new Ip(ipaddress);
}
exports.ip = ip;
