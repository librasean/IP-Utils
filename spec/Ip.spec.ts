import 'jasmine'
import { ip } from '../src/Ip'
describe('IP Enclosing function', function () {
  let testIp: any
  beforeEach(() => {
    testIp = ip('1.1.1.1')
  })
  describe('IsPrivate', function () {
    it('should have a IsPrivate function', function () {
      expect(testIp.isPrivate).toBeDefined()
    })
    it('should return something', function () {
      expect(testIp.isPrivate()).toBeDefined()
    })
    it('should return false for test value', function () {
      expect(testIp.isPrivate()).toBeFalsy()
    })
  })
  describe('IsReserved', function () {
    it('should have a IsReserved function', function () {
      expect(testIp.isReserved).toBeDefined()
    })
    it('should return something', function () {
      expect(testIp.isReserved()).toBeDefined()
    })
    it('should return false for test value', function () {
      expect(testIp.isReserved()).toBeFalsy()
    })
  })
  describe('IsValid', function () {
    it('should have a IsValid function', function () {
      expect(testIp.isValid).toBeDefined()
    })
    it('should return something', function () {
      expect(testIp.isValid()).toBeDefined()
    })
    it('should return true for test value', function () {
      expect(testIp.isValid()).toBeTruthy()
    })
  })
  describe('GetOctetArray', function () {
    it('should have a getOctetArray function', function () {
      expect(testIp.getOctetArray).toBeDefined()
    })
    it('should return something', function () {
      expect(testIp.getOctetArray()).toBeDefined()
    })
    it('should return correct array for test value', function () {
      expect(testIp.getOctetArray()).toEqual(['1', '1', '1', '1'])
    })
  })
  describe('GetOctet', function () {
    it('should have a getOctet function', function () {
      expect(testIp.getOctet).toBeDefined()
    })
    it('should return something', function () {
      expect(testIp.getOctet(1)).toBeDefined()
    })
    it('should return 1 for test value', function () {
      expect(testIp.getOctet(1)).toEqual('1')
    })
  })
})
