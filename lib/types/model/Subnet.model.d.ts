export interface Subnet {
    networkAddress: string;
    broadcastAddress: string;
    numberHosts: number;
    inclusiveNumberHosts: number;
    firstHostAddress: string;
    lastHostAddress: string;
    mask: string;
    cidrMask: number;
    contains: Function;
}
