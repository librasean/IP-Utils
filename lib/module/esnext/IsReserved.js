import { toLong } from './ToLong';
export function isReserved(ipaddress) {
    return ipInReservedRange(ipaddress);
}
// Taken from wikipedia https://en.wikipedia.org/wiki/Reserved_IP_addresses
export const RESERVED_RANGES = [
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
    let inRange = false;
    for (let range of RESERVED_RANGES) {
        if (ipInRange(ipaddress, range)) {
            inRange = true;
            break;
        }
    }
    return inRange;
}
function ipInRange(ipaddress, range) {
    let ip = toLong(ipaddress);
    let startRange = toLong(range[0]);
    let endRange = toLong(range[1]);
    return ip >= startRange && ip <= endRange;
}
