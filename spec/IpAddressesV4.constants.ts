export const VALID_IPS = [
  '1.1.1.1',
  '255.255.255.255',
  '0.0.0.1',
  '192.168.1.1'
]

export const INVALID_IPS = [
  'String',
  '-1.1.1.1',
  '256.1.1.1',
  '254',
  '1.256.1.1',
  '1.2.3.256',
  '500.2.1.4'
]

export const VALID_IPS_NUMBER = [
  16843009,
  4294967295,
  1,
  3232235777
]

export const INVALID_IPS_NUMBER = [
  -1,
  4294967296,
  0
]
