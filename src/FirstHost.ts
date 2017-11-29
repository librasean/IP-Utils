import { toString } from './ToString'
import { networkAddress } from './NetworkAddress'
import { toLong } from './ToLong'

export function firstHost (subnet: string): string {
  let longFirstHost = toLong(networkAddress(subnet)) + 1
  return toString(longFirstHost)
}
