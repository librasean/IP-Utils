import 'jasmine'
import { VALID_IPS_NUMBER, INVALID_IPS_NUMBER } from './TestingConstants'
import { toString } from '../src/ToString'

describe('NumberToString', () => {
  it('Should cope with correct IPv4 Numbers', () => {
    VALID_IPS_NUMBER.forEach(ip => {
      expect(toString(ip)).toEqual(jasmine.any(String))
    })
  })

  it('Should return null for any invalid IP', () => {
    INVALID_IPS_NUMBER.forEach(ip => {
      expect(toString(ip)).toBeNull
    })
  })
})
