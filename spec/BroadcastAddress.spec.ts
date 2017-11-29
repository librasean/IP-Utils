import 'jasmine'
import { getBroadcastAddress } from '../src/SubnetInfo'

const TESTS = [
  ['192.168.1.1/24', '192.168.1.255']
]

describe('BroadcastAddress', () => {
  it('Should return correct values', () => {
    TESTS.forEach(arr => expect(getBroadcastAddress(arr[0])).toEqual(arr[1]))
  })
})
