import { isValidIp as valid } from './IsValidIp';
import { isReserved as reserved } from './IsReserved';
import { isPrivate as privateCheck } from './IsPrivate';
import { getOctetArray as octetArray, getOctet as specificOctet } from './GetOctetArray';
export class Ip {
    constructor(ipaddress) {
        this.ip = ipaddress;
    }
    isValid() {
        return valid(this.ip);
    }
    isReserved() {
        return reserved(this.ip);
    }
    isPrivate() {
        return privateCheck(this.ip);
    }
    getOctetArray() {
        return octetArray(this.ip);
    }
    getOctet(octet) {
        return specificOctet(this.ip, octet);
    }
}
export function ip(ipaddress) {
    return new Ip(ipaddress);
}
