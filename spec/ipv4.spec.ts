import * as ipUtils from '../src/index'
import 'jasmine'

describe('IP Utils Test Batch', () => {

  describe('Is Valid IP v4', () => {

    it('Should return true for valid IP addresses', () => {
      expect(ipUtils.isValidIpv4('1.1.1.1')).toBeTruthy()
      expect(ipUtils.isValidIpv4('192.168.1.1')).toBeTruthy()
      expect(ipUtils.isValidIpv4('255.255.255.255')).toBeTruthy()
      expect(ipUtils.isValidIpv4('002.004.008.001')).toBeTruthy()
      expect(ipUtils.isValidIpv4('0.0.0.1')).toBeTruthy()
    })

    it('Should return false for wrong datatypes', () => {
      expect(ipUtils.isValidIpv4(null)).toBeFalsy()
      expect(ipUtils.isValidIpv4(undefined)).toBeFalsy()
      expect(ipUtils.isValidIpv4([])).toBeFalsy()
      expect(ipUtils.isValidIpv4({})).toBeFalsy()
    })

    it('Should return false for out of range IP`s', () => {
      expect(ipUtils.isValidIpv4('256.1.1.1')).toBeFalsy()
      expect(ipUtils.isValidIpv4('1.256.1.1')).toBeFalsy()
      expect(ipUtils.isValidIpv4('1.1.500.1')).toBeFalsy()
      expect(ipUtils.isValidIpv4('-1.2.3.4')).toBeFalsy()
    })

    it('Should return false for strings', () => {
      expect(ipUtils.isValidIpv4('Not an IP')).toBeFalsy()
      expect(ipUtils.isValidIpv4('1.1.1')).toBeFalsy()
      expect(ipUtils.isValidIpv4('2.2.2..')).toBeFalsy()
      expect(ipUtils.isValidIpv4(123)).toBeFalsy()
      expect(ipUtils.isValidIpv4(NaN)).toBeFalsy()
    })
  })

  describe('Is a IP v6', () => {

    it('Should return false for wrong datatypes', () => {
      expect(ipUtils.isValidIpv6(null)).toBeFalsy()
      expect(ipUtils.isValidIpv6(undefined)).toBeFalsy()
      expect(ipUtils.isValidIpv6([])).toBeFalsy()
      expect(ipUtils.isValidIpv6({})).toBeFalsy()
    })

    it('Should return false for incrorrect formats', () => {
      expect(ipUtils.isValidIpv6('Not an IP')).toBeFalsy()
      expect(ipUtils.isValidIpv6('1.1.1')).toBeFalsy()
      expect(ipUtils.isValidIpv6('2.2.2..')).toBeFalsy()
      expect(ipUtils.isValidIpv6(123)).toBeFalsy()
      expect(ipUtils.isValidIpv6(NaN)).toBeFalsy()
    })

    it('Should return true for correct formats', () => {
      expect(ipUtils.isValidIpv6('fe80:0000:0000:0000:0204:61ff:fe9d:f156')).toBeTruthy()
      expect(ipUtils.isValidIpv6('fe80:0:0:0:204:61ff:fe9d:f156')).toBeTruthy()
      expect(ipUtils.isValidIpv6('fe80::204:61ff:fe9d:f156')).toBeTruthy()
      expect(ipUtils.isValidIpv6('fe80:0000:0000:0000:0204:61ff:254.157.241.86')).toBeTruthy()
      expect(ipUtils.isValidIpv6('fe80:0:0:0:0204:61ff:254.157.241.86')).toBeTruthy()
      expect(ipUtils.isValidIpv6('fe80::204:61ff:254.157.241.86')).toBeTruthy()
    })
  })

  describe('Is Valid IP', () => {
    it('Should call IsValidIpv4', () => {
      let spy = spyOn(ipUtils, 'isValidIpv4')
      ipUtils.isValidIp('1.1.1.1')
      expect(spy).toHaveBeenCalled
    })

    it('Should call IsIpv6', () => {
      let spy = spyOn(ipUtils, 'isValidIpv6')
      ipUtils.isValidIp('1.1.1.1')
      expect(spy).toHaveBeenCalled
    })
  })
})
