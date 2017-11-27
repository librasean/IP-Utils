import 'jasmine'
import { PRIVATE_IPS, PUBLIC_IPS } from './TestingConstants'
import { isPrivate } from '../src/index'

describe('isPrivate', () => {
  it('Should return true for private addresses as Strings', () => {
    PRIVATE_IPS.forEach(ip => {
      expect(isPrivate(ip)).toBeTruthy()
    })
  })

  it('Should return false for Public IPs', () => {
    PUBLIC_IPS.forEach(ip => {
      expect(isPrivate(ip)).toBeFalsy()
    })
  })
})
