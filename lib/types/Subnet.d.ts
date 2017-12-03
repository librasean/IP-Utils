import { Subnet } from './model/Subnet.model';
export declare class Network {
    sub: string;
    constructor(subnet: string);
    broadcastAddress(): string;
    networkAddress(): string;
    firstHost(): string;
    lastHost(): string;
    info(): Subnet;
    mask(): string;
}
export declare function subnet(network: string): Network;
