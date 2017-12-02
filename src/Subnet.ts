import { broadcastAddress as broadcast } from './BroadcastAddress'
import { networkAddress as network } from './NetworkAddress'
import { firstHost as first } from './FirstHost'
import { lastHost as last } from './LastHost'
import { mask as maskComponent } from './Mask'
import { cidrInfo } from './CidrInfo'

class Subnet {
  sub: string
  constructor (subnet: string) {
    this.sub = subnet
  }
  broadcastAddress () {
    return broadcast(this.sub)
  }
  networkAddress () {
    return network(this.sub)
  }
  firstHost () {
    return first(this.sub)
  }
  lastHost () {
    return last(this.sub)
  }
  info () {
    return cidrInfo(this.sub)
  }
  mask () {
    return maskComponent(this.sub)
  }
}

export function subnet (subnet: string) {
  return new Subnet(subnet)
}
