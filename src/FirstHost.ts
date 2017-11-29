import { intToString } from './IntToString'
import { networkAddress } from './NetworkAddress'
import { stringToInt } from './StringToInt'

export function firstHost (subnet: string): string {
  let longFirstHost = stringToInt(networkAddress(subnet)) + 1
  return intToString(longFirstHost)
}
