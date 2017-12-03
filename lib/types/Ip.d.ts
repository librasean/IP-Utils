export declare class Ip {
    ip: string;
    constructor(ipaddress: string);
    isValid(): Boolean;
    isReserved(): boolean;
    isPrivate(): Boolean;
    getOctetArray(): string[];
    getOctet(octet: number): string;
    containedBy(network: string): boolean;
}
export declare function ip(ipaddress: string): Ip;
