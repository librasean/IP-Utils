import { toString } from './ToString';
import { broadcastAddress } from './BroadcastAddress';
import { toLong } from './ToLong';
export function lastHost(subnet) {
    let broadcastLong = broadcastAddress(subnet);
    return toString(toLong(broadcastLong) - 1);
}
