import { Subnet } from './model/Subnet.model'
import { maskToCidr } from './MaskToCidr'
import { cidrInfo } from './CidrInfo'

export function subnetInfo (ipaddress: string, mask: string): Subnet {
  let cidr = maskToCidr(mask)
  let subnetCidr = ipaddress + '/' + cidr
  return cidrInfo(subnetCidr)
}
