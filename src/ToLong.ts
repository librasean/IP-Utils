export function toLong (ipaddress: String): number {
  return ipaddress.split('.').reduce(function (ipInt, octet) {
    return (ipInt << 8) + parseInt(octet, 10)
  } , 0) >>> 0
}
