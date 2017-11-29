import { intToString } from './IntToString'
import { networkAddress } from './NetworkAddress'
import { stringToInt } from './StringToInt'
import { numberHosts } from './NumberHosts'

export function broadcastAddress (subnet: string): string {
  let hostLong = stringToInt(networkAddress(subnet))
  let broadcastLong = hostLong + (numberHosts(subnet, true) - 1)/* -1  as one Address already accounted for*/
  return intToString(broadcastLong)
}
