import { fromLong } from './FromLong'
import { broadcastAddress } from './BroadcastAddress'
import { toLong } from './ToLong'

export function lastHost (subnet: string): string {
  let broadcastLong = broadcastAddress(subnet)
  return fromLong(toLong(broadcastLong) - 1)
}
