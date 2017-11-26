import 'jasmine'
import { VALID_IPS, INVALID_IPS } from './IpAddressesV4.constants'
import { stringToInt } from '../src/index'

describe('StringToInt', () => {
  it('Should cope with correct IPv4 Strings', () => {
    VALID_IPS.forEach((ip) => {
      expect(stringToInt(ip)).toEqual(jasmine.any(Number))
    })
  })

  it('Should return null for any invalid IP', () => {
    INVALID_IPS.forEach((ip) => {
      expect(stringToInt(ip)).toBeNull
    })
  })
})
