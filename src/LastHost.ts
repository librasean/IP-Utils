import { intToString } from './IntToString'
import { broadcastAddress } from './BroadcastAddress'
import { stringToInt } from './StringToInt'

export function lastHost (subnet: string): string {
  let broadcastLong = broadcastAddress(subnet)
  return intToString(stringToInt(broadcastLong) - 1)
}
