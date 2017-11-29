import 'jasmine'
import { firstHost } from '../src/FirstHost'

const TESTS = [
  ['1.1.1.1/24','1.1.1.1'],
  ['192.168.1.150/25','192.168.1.129']
]

describe('FirstHostAddress Function', () => {
  it('Should return correct first address for test subnets', () => {
    TESTS.forEach((arr) => expect(firstHost(arr[0])).toEqual(arr[1]))
  })
})
