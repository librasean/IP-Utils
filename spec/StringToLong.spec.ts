import 'jasmine'
import { VALID_IPS, INVALID_IPS } from './TestingConstants'
import { toLong } from '../src/ToLong'

describe('ToLong', () => {
  it('Should cope with correct IPv4 Strings', () => {
    VALID_IPS.forEach((ip) => {
      expect(toLong(ip)).toEqual(jasmine.any(Number))
    })
  })

  it('Should return null for any invalid IP', () => {
    INVALID_IPS.forEach((ip) => {
      expect(toLong(ip)).toBeNull
    })
  })
})
