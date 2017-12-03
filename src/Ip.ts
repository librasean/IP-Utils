import { isValidIp as valid } from './IsValidIp'
import { isReserved as reserved } from './IsReserved'
import { isPrivate as privateCheck } from './IsPrivate'
import { getOctetArray as octetArray, getOctet as specificOctet } from './GetOctetArray'
import { contains } from './Contains'

export class Ip {
  ip: string
  constructor (ipaddress: string) {
    this.ip = ipaddress
  }
  isValid () {
    return valid(this.ip)
  }
  isReserved () {
    return reserved(this.ip)
  }
  isPrivate () {
    return privateCheck(this.ip)
  }
  getOctetArray () {
    return octetArray(this.ip)
  }
  getOctet (octet: number) {
    return specificOctet(this.ip, octet)
  }
  containedBy (network: string): boolean {
    return contains(network, this.ip)
  }
}

export function ip (ipaddress: string) {
  return new Ip(ipaddress)
}
