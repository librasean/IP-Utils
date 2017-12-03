"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BroadcastAddress_1 = require("./BroadcastAddress");
var NetworkAddress_1 = require("./NetworkAddress");
var FirstHost_1 = require("./FirstHost");
var LastHost_1 = require("./LastHost");
var Mask_1 = require("./Mask");
var CidrInfo_1 = require("./CidrInfo");
var Contains_1 = require("./Contains");
var Network = /** @class */ (function () {
    function Network(subnet) {
        this.sub = subnet;
    }
    Network.prototype.broadcastAddress = function () {
        return BroadcastAddress_1.broadcastAddress(this.sub);
    };
    Network.prototype.networkAddress = function () {
        return NetworkAddress_1.networkAddress(this.sub);
    };
    Network.prototype.firstHost = function () {
        return FirstHost_1.firstHost(this.sub);
    };
    Network.prototype.lastHost = function () {
        return LastHost_1.lastHost(this.sub);
    };
    Network.prototype.info = function () {
        return CidrInfo_1.cidrInfo(this.sub);
    };
    Network.prototype.mask = function () {
        return Mask_1.mask(this.sub);
    };
    Network.prototype.contains = function (ip) {
        return Contains_1.contains(this.sub, ip);
    };
    return Network;
}());
exports.Network = Network;
function subnet(network) {
    return new Network(network);
}
exports.subnet = subnet;
