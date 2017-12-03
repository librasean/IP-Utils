import { toLong } from './ToLong'
import { networkAddress} from './NetworkAddress'
import { broadcastAddress } from './BroadcastAddress'

export function contains (network: string, ipaddress: string): boolean {
  let firsAddress = toLong(networkAddress(network))
  let lastAddress = toLong(broadcastAddress(network))
  return (toLong(ipaddress) >= firsAddress) && (toLong(ipaddress) <= lastAddress)
}
