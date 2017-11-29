"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToString_1 = require("./ToString");
var NetworkAddress_1 = require("./NetworkAddress");
var ToLong_1 = require("./ToLong");
var numberHosts_1 = require("./numberHosts");
function broadcastAddress(subnet) {
    var hostLong = ToLong_1.toLong(NetworkAddress_1.networkAddress(subnet));
    var broadcastLong = hostLong + (numberHosts_1.numberHosts(subnet, true) - 1); /* -1  as one Address already accounted for*/
    return ToString_1.toString(broadcastLong);
}
exports.broadcastAddress = broadcastAddress;
