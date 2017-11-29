"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToString_1 = require("./ToString");
var BroadcastAddress_1 = require("./BroadcastAddress");
var ToLong_1 = require("./ToLong");
function lastHost(subnet) {
    var broadcastLong = BroadcastAddress_1.broadcastAddress(subnet);
    return ToString_1.toString(ToLong_1.toLong(broadcastLong) - 1);
}
exports.lastHost = lastHost;
