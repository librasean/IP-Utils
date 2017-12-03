import { broadcastAddress as broadcast } from './BroadcastAddress'
import { networkAddress as networkAdd } from './NetworkAddress'
import { firstHost as first } from './FirstHost'
import { lastHost as last } from './LastHost'
import { mask as maskComponent } from './Mask'
import { cidrInfo } from './CidrInfo'
import { Subnet } from './model/Subnet.model'
import { contains as contained } from './Contains'

export class Network {
  sub: string
  constructor (subnet: string) {
    this.sub = subnet
  }
  broadcastAddress () {
    return broadcast(this.sub)
  }
  networkAddress () {
    return networkAdd(this.sub)
  }
  firstHost () {
    return first(this.sub)
  }
  lastHost () {
    return last(this.sub)
  }
  info (): Subnet {
    return cidrInfo(this.sub)
  }
  mask () {
    return maskComponent(this.sub)
  }
  contains (ip: string) {
    return contained(this.sub, ip)
  }
}

export function subnet (network: string) {
  return new Network(network)
}
