import { Subnet } from './model/Subnet.model'
import { maskToCidr } from './MaskToCidr'
import { networkAddress } from './NetworkAddress'
import { broadcastAddress } from './BroadcastAddress'
import { numberHosts } from './NumberHosts'
import { firstHost } from './FirstHost'
import { lastHost } from './LastHost'
import { cidrToMask } from './CidrToMask'
import { mask } from './Mask'

export function cidrInfo (subnet: string): Subnet {
  return {
    networkAddress: networkAddress(subnet),
    broadcastAddress: broadcastAddress(subnet),
    numberHosts: numberHosts(subnet, false),
    inclusiveNumberHosts: numberHosts(subnet, true),
    firstHostAddress: firstHost(subnet),
    lastHostAddress: lastHost(subnet),
    mask: mask(subnet),
    cidrMask: cidrToMask(subnet),
    contains: Function
  }
}

export function subnetInfo (ipaddress: string, mask: string): Subnet {
  let cidr = maskToCidr(mask)
  let subnetCidr = ipaddress + '/' + cidr
  return cidrInfo(subnetCidr)
}
