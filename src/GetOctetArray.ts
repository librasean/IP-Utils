export function getOctetArray (ipaddress: string): string[] {
  return ipaddress.split('.')
}

export function getOctet (ipaddress: string, octet: number): string {
  return getOctetArray(ipaddress)[octet - 1]
}
