import { cidrToMask } from './CidrToMask'

export function numberHosts (subnet: string, inclusive: boolean): number {
  let addresses = Math.pow(2, 32 - cidrToMask(subnet))
  return inclusive ? addresses : addresses - 2
}
