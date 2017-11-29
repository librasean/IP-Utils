"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToString_1 = require("./ToString");
var NetworkAddress_1 = require("./NetworkAddress");
var ToLong_1 = require("./ToLong");
function firstHost(subnet) {
    var longFirstHost = ToLong_1.toLong(NetworkAddress_1.networkAddress(subnet)) + 1;
    return ToString_1.toString(longFirstHost);
}
exports.firstHost = firstHost;
