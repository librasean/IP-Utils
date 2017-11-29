export function cidrToMask (subnet: string): number {
  let split = subnet.split('/')
  return parseInt(split[1], 10)
}
