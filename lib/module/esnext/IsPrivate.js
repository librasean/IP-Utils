export function isPrivate(ipaddress) {
    return /^(::f{4}:)?10\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i
        .test(ipaddress) ||
        /^(::f{4}:)?192\.168\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ipaddress) ||
        /^(::f{4}:)?172\.(1[6-9]|2\d|30|31)\.([0-9]{1,3})\.([0-9]{1,3})$/i
            .test(ipaddress) ||
        /^(::f{4}:)?127\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ipaddress) ||
        /^(::f{4}:)?169\.254\.([0-9]{1,3})\.([0-9]{1,3})$/i.test(ipaddress) ||
        /^f[cd][0-9a-f]{2}:/i.test(ipaddress) ||
        /^fe80:/i.test(ipaddress) ||
        /^::1$/.test(ipaddress) ||
        /^::$/.test(ipaddress);
}
