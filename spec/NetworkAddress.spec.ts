import 'jasmine'
import { networkAddress } from '../src/NetworkAddress'

const TEST_VALUES = [
  ['1.1.1.1/24','1.1.1.0'],
  ['192.168.1.150/25','192.168.1.128']
]

describe('Network Address', () => {
  it('Should return correct network addresses', () => {
    TEST_VALUES.forEach(arr => expect(networkAddress(arr[0])).toEqual(arr[1]))
  })
})
