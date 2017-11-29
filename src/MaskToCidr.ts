export function maskToCidr (mask: string): string {
  const countCharOccurences = (testString: string , testChar: string) => testString.split(testChar).length - 1
  const decimalToBinary = (dec: number) => (dec >>> 0).toString(2)
  const getNetMaskParts = (nmask: string) => nmask.split('.').map(Number)
  const netmask2CIDR = (mask: string) => countCharOccurences(
    getNetMaskParts(mask)
      .map(part => decimalToBinary(part))
      .join(''),
    '1'
  )
  return String(netmask2CIDR(mask))
}
