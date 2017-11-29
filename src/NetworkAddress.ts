import { getOctetArray } from './GetOctetArray'
import { mask } from './Mask'

export function networkAddress (subnet: string): string {
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
