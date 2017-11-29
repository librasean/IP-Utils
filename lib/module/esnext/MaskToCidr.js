export function maskToCidr(mask) {
    const countCharOccurences = (testString, testChar) => testString.split(testChar).length - 1;
    const decimalToBinary = (dec) => (dec >>> 0).toString(2);
    const getNetMaskParts = (nmask) => nmask.split('.').map(Number);
    const netmask2CIDR = (mask) => countCharOccurences(getNetMaskParts(mask)
        .map(part => decimalToBinary(part))
        .join(''), '1');
    return String(netmask2CIDR(mask));
}
