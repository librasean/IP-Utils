"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = require("./FromLong");
var BroadcastAddress_1 = require("./BroadcastAddress");
var ToLong_1 = require("./ToLong");
function lastHost(subnet) {
    var broadcastLong = BroadcastAddress_1.broadcastAddress(subnet);
    return FromLong_1.fromLong(ToLong_1.toLong(broadcastLong) - 1);
}
exports.lastHost = lastHost;
