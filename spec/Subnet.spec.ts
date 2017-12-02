import 'jasmine'
import { subnet } from '../src/Subnet'

describe('Subnet Functions Object', function () {
  let testSubnet: any
  beforeEach(() => {
    testSubnet = subnet('1.1.1.1/24')
  })
  describe('BroadcastAddress', function () {
    it('should contain broadcast address function', function () {
      expect(testSubnet.broadcastAddress).toBeDefined()
      expect(testSubnet.broadcastAddress).toEqual(jasmine.any(Function))
    })
    it('should return something', function () {
      expect(testSubnet.broadcastAddress()).toBeDefined()
    })
  })
  describe('FirstHost', function () {
    it('should contain a first host address function', function () {
      expect(testSubnet.firstHost).toBeDefined()
      expect(testSubnet.firstHost).toEqual(jasmine.any(Function))
    })
    it('should return something', function () {
      expect(testSubnet.firstHost()).toBeDefined()
    })
  })
  describe('LastHost', function () {
    it('should contain a last host address function', function () {
      expect(testSubnet.lastHost).toBeDefined()
      expect(testSubnet.lastHost).toEqual(jasmine.any(Function))
    })
    it('should return something', function () {
      expect(testSubnet.lastHost()).toBeDefined()
    })
  })
  describe('NetworkAddress', function () {
    it('should contain a network address function', function () {
      expect(testSubnet.networkAddress).toBeDefined()
      expect(testSubnet.networkAddress).toEqual(jasmine.any(Function))
    })
    it('should return something', function () {
      expect(testSubnet.networkAddress()).toBeDefined()
    })
  })
  describe('Network Info', function () {
    it('should contain a info function', function () {
      expect(testSubnet.info).toBeDefined()
      expect(testSubnet.info).toEqual(jasmine.any(Function))
    })
    it('should return something', function () {
      expect(testSubnet.info()).toBeDefined()
    })
  })
  describe('Mask', function () {
    it('should contain a network mask function', function () {
      expect(testSubnet.mask).toBeDefined()
      expect(testSubnet.mask).toEqual(jasmine.any(Function))
    })
    it('should return something', function () {
      expect(testSubnet.mask()).toBeDefined()
    })
  })
})
