import 'jasmine'
import { contains } from '../src/Contains'

const TRUE_TESTS = [
  ['1.1.1.1', '1.1.1.0/8'],
  ['192.168.1.132', '192.168.1.0/24'],
  ['192.168.1.15', '192.168.1.0/27']
]

const FALSE_TESTS = [
  // ['2.1.1.1', '1.1.1.0/8'],
  // ['192.168.2.132', '192.168.1.0/24'],
  ['192.168.1.151', '192.168.1.0/27']
]

describe('Contains Function', function () {
  it('should return true for correct values', function () {
    TRUE_TESTS.forEach(arr => expect(contains(arr[1], arr[0])).toBeTruthy())
  })
  it('should return false for incorrect values', function () {
    FALSE_TESTS.forEach(arr => expect(contains(arr[1], arr[0])).toBeFalsy())
  })
})
