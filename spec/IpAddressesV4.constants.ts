export const VALID_IPS: string[] = [
  '1.1.1.1',
  '255.255.255.255',
  '0.0.0.1',
  '192.168.1.1'
]

export const INVALID_IPS: string[] = [
  'String',
  '-1.1.1.1',
  '256.1.1.1',
  '254',
  '1.256.1.1',
  '1.2.3.256',
  '500.2.1.4'
]

export const VALID_IPS_NUMBER: number[] = [
  16843009,
  4294967295,
  1,
  3232235777
]

export const INVALID_IPS_NUMBER: number[] = [
  -1,
  4294967296,
  0
]

export const PRIVATE_IPS: (string | number)[] = [
  '192.168.1.1',
  3232235777
]

export const PUBLIC_IPS: (string | number)[] = [
  '25.1.1.1',
  '8.8.8.8',
  '4.2.2.2'
]
