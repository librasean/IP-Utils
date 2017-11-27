import 'jasmine'
import { isReserved } from '../src/IsReserved'
import { RESERVED_IPS, NON_RESERVED_IPS } from './TestingConstants'

describe('IsReserved function', () => {
  it('Should return a boolean', () => {
    expect(isReserved('1.1.1.1')).toEqual(jasmine.any(Boolean))
  })

  it('Should return true for Reserved IPs', () => {
    RESERVED_IPS.forEach(ip => expect(isReserved(ip)).toBeTruthy())
  })

  it('Should return false for non-reserved IPs', () => {
    NON_RESERVED_IPS.forEach(ip => expect(isReserved(ip)).toBeFalsy())
  })
})
