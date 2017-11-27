import 'jasmine'
import { getOctetArray } from '../src/index'
import { VALID_IPS } from './TestingConstants'

describe('getOctetArray function', () => {
  it('Should return an Array when given a valid input', () => {
    VALID_IPS.forEach(ip => expect(getOctetArray(ip)).toEqual(jasmine.any(Array)))
  })

  it('Should turn valid IPv4 into array of 4 things', () => {
    VALID_IPS.forEach(ip => expect(getOctetArray(ip).length).toEqual(4))
  })

  it('Should set correct order to octets from string IP', () => {
    let resultArray = getOctetArray('1.2.3.4')
    expect(resultArray[0]).toEqual(1)
    expect(resultArray[1]).toEqual(2)
    expect(resultArray[2]).toEqual(3)
    expect(resultArray[3]).toEqual(4)
  })

  it('Should set correct order to octets from Long IP', () => {
    let resultArray = getOctetArray(16909060)
    expect(resultArray[0]).toEqual(1)
    expect(resultArray[1]).toEqual(2)
    expect(resultArray[2]).toEqual(3)
    expect(resultArray[3]).toEqual(4)
  })
})
