import { Subnet } from './model/Subnet.model'
import { intToString } from './IntToString'
import { stringToInt } from './StringToInt'
import { getOctetArray } from 'src/GetOctetArray'

export function cidrInfo (subnet: string): Subnet {
  return {
    networkAddress: getNetworkAddress(subnet),
    broadcastAddress: getBroadcastAddress(subnet),
    numberHosts: getNumberHosts(subnet, false),
    inclusiveNumberHosts: getNumberHosts(subnet, true),
    firstHostAddress: firstHostAddress(subnet),
    lastHostAddress: lastHostAddress(subnet),
    mask: mask(subnet),
    cidrMask: cidrMask(subnet),
    contains: Function
  }
}

export function subnetInfo (ipaddress: string, mask: string): Subnet {
  let cidr = maskToCidr(mask)
  let subnetCidr = ipaddress + '/' + cidr
  return cidrInfo(subnetCidr)
}

export function maskToCidr (mask: string): string {
  const countCharOccurences = (testString: string , testChar: string) => testString.split(testChar).length - 1
  const decimalToBinary = (dec: number) => (dec >>> 0).toString(2)
  const getNetMaskParts = (nmask: string) => nmask.split('.').map(Number)
  const netmask2CIDR = (mask: string) => countCharOccurences(
       getNetMaskParts(mask)
        .map(part => decimalToBinary(part))
        .join(''),
      '1'
    )
  return String(netmask2CIDR)
}

export function getNetworkAddress (subnet: string): string {
  let maskOctets = getOctetArray(mask(subnet))
  let ipOctets = getOctetArray(subnet.split('/')[0])
  let networkAddress = ''
  for (let i = 0; i < 4; i++) {
    let currMaskOctet = parseInt(maskOctets[i], 10)
    let currIpOctet = parseInt(ipOctets[i], 10)
    networkAddress = networkAddress.concat(String(currMaskOctet & currIpOctet))
    if (i !== 3) {
    	networkAddress = networkAddress.concat('.')
    }
  }
  return networkAddress
}

export function getBroadcastAddress (subnet: string): string {
  let hostLong = stringToInt(getNetworkAddress(subnet))
  let broadcastLong = hostLong + (getNumberHosts(subnet, true) - 1)/* -1  as one Address already accounted for*/
  return intToString(broadcastLong)
}

export function getNumberHosts (subnet: string, inclusive: boolean): number {
  let addresses = Math.pow(2, 32 - cidrMask(subnet))
  return inclusive ? addresses : addresses - 2
}

export function firstHostAddress (subnet: string): string {
  let longFirstHost = stringToInt(getNetworkAddress(subnet)) + 1
  return intToString(longFirstHost)
}

export function lastHostAddress (subnet: string): string {
  let broadcastLong = getBroadcastAddress(subnet)
  return intToString(stringToInt(broadcastLong) - 1)
}

export function cidrMask (subnet: string): number {
  let split = subnet.split('/')
  return parseInt(split[1], 10)
}

export function mask (subnet: string): string {
  let split = subnet.split('/')
  let longMask = Math.pow(2, 32) - Math.pow(2, 32 - parseInt(split[1], 10))
  return intToString(longMask)
}
