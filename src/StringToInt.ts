export function stringToInt (ipaddress: String): Number {
  return ipaddress.split('.').reduce(function (ipInt, octet) {
    return (ipInt << 8) + parseInt(octet, 10)
  } , 0) >>> 0
}
