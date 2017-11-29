import 'jasmine'
import { mask } from '../src/SubnetInfo'

const TESTS = [
  ['1.1.1.1/24', '255.255.255.0'],
  ['1.1.1.1/8', '255.0.0.0']
]

describe('Mask function', () => {
  it('Should convert CIDRs to correct mask', () => {
    TESTS.forEach(arr => expect(mask(arr[0])).toEqual(arr[1]))
  })
})
