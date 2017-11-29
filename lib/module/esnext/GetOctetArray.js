export function getOctetArray(ipaddress) {
    return ipaddress.split('.');
}
export function getOctet(ipaddress, octet) {
    return getOctetArray(ipaddress)[octet - 1];
}
