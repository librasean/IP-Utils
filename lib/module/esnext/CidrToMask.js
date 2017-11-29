export function cidrToMask(subnet) {
    let split = subnet.split('/');
    return parseInt(split[1], 10);
}
