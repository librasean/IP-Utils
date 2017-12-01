"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = require("./FromLong");
var NetworkAddress_1 = require("./NetworkAddress");
var ToLong_1 = require("./ToLong");
var NumberHosts_1 = require("./NumberHosts");
function broadcastAddress(subnet) {
    var hostLong = ToLong_1.toLong(NetworkAddress_1.networkAddress(subnet));
    var broadcastLong = hostLong + (NumberHosts_1.numberHosts(subnet, true) - 1); /* -1  as one Address already accounted for*/
    return FromLong_1.fromLong(broadcastLong);
}
exports.broadcastAddress = broadcastAddress;
