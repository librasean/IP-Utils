import { cidrToMask } from './CidrToMask';
export function numberHosts(subnet, inclusive) {
    let addresses = Math.pow(2, 32 - cidrToMask(subnet));
    return inclusive ? addresses : addresses - 2;
}
