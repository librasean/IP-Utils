import { Subnet } from './model/Subnet.model'
import { numberHosts } from './numberHosts'
import { firstHost } from './FirstHost'
import { networkAddress } from './NetworkAddress'
import { broadcastAddress } from './BroadcastAddress'
import { cidrToMask } from './CidrToMask'
import { lastHost } from './LastHost'
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