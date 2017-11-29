import { toString } from './ToString'
import { networkAddress } from './NetworkAddress'
import { toLong } from './ToLong'
import { numberHosts } from './numberHosts'

export function broadcastAddress (subnet: string): string {
  let hostLong = toLong(networkAddress(subnet))
  let broadcastLong = hostLong + (numberHosts(subnet, true) - 1)/* -1  as one Address already accounted for*/
  return toString(broadcastLong)
}
