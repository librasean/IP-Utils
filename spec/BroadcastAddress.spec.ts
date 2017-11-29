import 'jasmine'
import { broadcastAddress } from '../src/BroadcastAddress'

const TESTS = [
  ['192.168.1.1/24', '192.168.1.255']
]

describe('BroadcastAddress', () => {
  it('Should return correct values', () => {
    TESTS.forEach(arr => expect(broadcastAddress(arr[0])).toEqual(arr[1]))
  })
})
