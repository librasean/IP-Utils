import { maskToCidr } from './MaskToCidr';
import { cidrInfo } from './CidrInfo';
export function subnetInfo(ipaddress, mask) {
    let cidr = maskToCidr(mask);
    let subnetCidr = ipaddress + '/' + cidr;
    return cidrInfo(subnetCidr);
}
