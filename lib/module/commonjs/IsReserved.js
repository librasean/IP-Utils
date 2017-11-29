"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var ToLong_1 = require("./ToLong");
function isReserved(ipaddress) {
    return ipInReservedRange(ipaddress);
}
exports.isReserved = isReserved;
// Taken from wikipedia https://en.wikipedia.org/wiki/Reserved_IP_addresses
exports.RESERVED_RANGES = [
    ['0.0.0.0', '0.255.255.255'],
    ['10.0.0.0', '10.255.255.255'],
    ['100.64.0.0', '100.127.255.255'],
    ['127.0.0.0', '127.255.255.255'],
    ['169.254.0.0', '169.254.255.255'],
    ['172.16.0.0', '172.31.255.255'],
    ['192.0.0.0', '192.0.0.255'],
    ['192.0.2.0', '192.0.2.255'],
    ['192.88.99.0', '192.88.99.255'],
    ['192.168.0.0', '192.168.255.255'],
    ['198.18.0.0', '198.19.255.255'],
    ['198.51.100.0', '198.51.100.255'],
    ['203.0.113.0', '203.0.113.255'],
    ['224.0.0.0', '239.255.255.255'],
    ['240.0.0.0', '255.255.255.255']
];
function ipInReservedRange(ipaddress) {
    var inRange = false;
    try {
        for (var RESERVED_RANGES_1 = tslib_1.__values(exports.RESERVED_RANGES), RESERVED_RANGES_1_1 = RESERVED_RANGES_1.next(); !RESERVED_RANGES_1_1.done; RESERVED_RANGES_1_1 = RESERVED_RANGES_1.next()) {
            var range = RESERVED_RANGES_1_1.value;
            if (ipInRange(ipaddress, range)) {
                inRange = true;
                break;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (RESERVED_RANGES_1_1 && !RESERVED_RANGES_1_1.done && (_a = RESERVED_RANGES_1.return)) _a.call(RESERVED_RANGES_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return inRange;
    var e_1, _a;
}
function ipInRange(ipaddress, range) {
    var ip = ToLong_1.toLong(ipaddress);
    var startRange = ToLong_1.toLong(range[0]);
    var endRange = ToLong_1.toLong(range[1]);
    return ip >= startRange && ip <= endRange;
}
