import 'jasmine'
import { maskToCidr } from '../src/MaskToCidr'

const TESTS = [
  ['24', '255.255.255.0'],
  ['8', '255.0.0.0']
]

describe('MaskToCidr', () => {
  it('Should correctly convert masks to CIDR', () => {
    TESTS.forEach(arr => expect(maskToCidr(arr[1])).toEqual(arr[0]))
  })
})
