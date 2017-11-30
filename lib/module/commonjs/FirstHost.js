"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FromLong_1 = require("./FromLong");
var NetworkAddress_1 = require("./NetworkAddress");
var ToLong_1 = require("./ToLong");
function firstHost(subnet) {
    var longFirstHost = ToLong_1.toLong(NetworkAddress_1.networkAddress(subnet)) + 1;
    return FromLong_1.fromLong(longFirstHost);
}
exports.firstHost = firstHost;
