"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToLong_1 = require("./ToLong");
var NetworkAddress_1 = require("./NetworkAddress");
var BroadcastAddress_1 = require("./BroadcastAddress");
function contains(network, ipaddress) {
    var firsAddress = ToLong_1.toLong(NetworkAddress_1.networkAddress(network));
    var lastAddress = ToLong_1.toLong(BroadcastAddress_1.broadcastAddress(network));
    return (ToLong_1.toLong(ipaddress) >= firsAddress) && (ToLong_1.toLong(ipaddress) <= lastAddress);
}
exports.contains = contains;
