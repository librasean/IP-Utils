import 'jasmine'
import { subnetInfo } from '../src/SubnetInfo'
import * as Subnet from '../src/CidrInfo'

const SUBNETS = [
  '2.2.2.2/24',
  '8.8.8.8/8',
  '1.1.1.1/32'
]

describe('subnetInfo', () => {
  it('Should call cidrInfo', () => {
    let spy = spyOn(Subnet, 'cidrInfo')
    subnetInfo('1.1.1.1', '255.255.255.0')
    expect(spy).toHaveBeenCalled
  })
})

describe('Subnet.cidrInfo Function', () => {
  it('Should return correct object', () => {
    SUBNETS.forEach(subnet => expect(Subnet.cidrInfo(subnet)).toEqual(jasmine.any(Object)))
  })

  it('Should have a broadcast address parameter in results', () => {
    SUBNETS.forEach(subnet => expect(Subnet.cidrInfo(subnet).broadcastAddress).toBeDefined())
  })

  it('Should have a Network Address parameter in results', () => {
    SUBNETS.forEach(subnet => expect(Subnet.cidrInfo(subnet).networkAddress).toBeDefined())
  })

  it('Should have a NumberOfHosts parameter in results', () => {
    SUBNETS.forEach(subnet => expect(Subnet.cidrInfo(subnet).numberHosts).toBeDefined())
  })

  it('Should have a First Host Address parameter in results', () => {
    SUBNETS.forEach(subnet => expect(Subnet.cidrInfo(subnet).firstHostAddress).toBeDefined())
  })

  it('Should have a Last Host Address parameter in results', () => {
    SUBNETS.forEach(subnet => expect(Subnet.cidrInfo(subnet).lastHostAddress).toBeDefined())
  })

  it('Should return correct results for 192.168.1.0/24', () => {
    let expectedResult = {
      networkAddress: '192.168.1.0',
      broadcastAddress: '192.168.1.255',
      numberHosts: 254,
      inclusiveNumberHosts: 256,
      firstHostAddress: '192.168.1.1',
      lastHostAddress: '192.168.1.254',
      mask: '255.255.255.0',
      cidrMask: 24,
      contains: Function
    }
    expect(Subnet.cidrInfo('192.168.1.0/24')).toEqual(expectedResult)
  })

})
