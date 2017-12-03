import { broadcastAddress as broadcast } from './BroadcastAddress';
import { networkAddress as networkAdd } from './NetworkAddress';
import { firstHost as first } from './FirstHost';
import { lastHost as last } from './LastHost';
import { mask as maskComponent } from './Mask';
import { cidrInfo } from './CidrInfo';
export class Network {
    constructor(subnet) {
        this.sub = subnet;
    }
    broadcastAddress() {
        return broadcast(this.sub);
    }
    networkAddress() {
        return networkAdd(this.sub);
    }
    firstHost() {
        return first(this.sub);
    }
    lastHost() {
        return last(this.sub);
    }
    info() {
        return cidrInfo(this.sub);
    }
    mask() {
        return maskComponent(this.sub);
    }
}
export function subnet(network) {
    return new Network(network);
}
