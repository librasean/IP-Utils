[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/librasean/IP-Utils.svg?branch=master)](https://travis-ci.org/librasean/IP-Utils)
[![codecov](https://codecov.io/gh/librasean/IP-Utils/branch/master/graph/badge.svg)](https://codecov.io/gh/librasean/IP-Utils)
[![npm version](https://badge.fury.io/js/ip-utils.svg)](https://badge.fury.io/js/ip-utils)

# IP Util Functions Library
A library of useful functions related to IP (v4 and v6).

## Installation
```shell
# Using npm
$ npm install --save ip-utils
# or Using yarn
$ yarn install --save ip-utils
```
```js
Browser
// Import the Library
import * as ip from 'ip-util';
// Use any of the contained methods
ip.validIp('1.1.1.1');  // True

// Alternatively - import functions selectively
import { validIp } from 'ip-util'
validIp('1.1.1.1'); // True

NodeJS
// Import the Library
const ip = require('ip-util');
// Use any of the contained methods
ip.validIp('1.1.1.1'); // True
```

## Usage
```js
isValidIp('54.34.2.12') // True
isValidIpv4('12.21.2.1') // True
isValidIpv6('fe80:0:0:0:204:61ff:fe9d:f156') // True
toLong('192.168.1.1') //3232235777
fromLong(3232235777) // 192.168.1.1
toString(3232235777) // As Above (deprecated)
isPrivate('2.3.4.5') // False
isReserved('192.168.2.1') // True
getOctetArray('50.11.12.13') // ['50', '11', '12', '13']
getOctet('50.11.12.13', 2) // '11'
cidrInfo('192.168.1.1/24') 
/* 
{
  networkAddress: '192.168.1.0',
  broadcastAddress: '192.168.1.255',
  numberHosts: 254,
  inclusiveNumberHosts: 256,
  firstHostAddress: '192.168.1.1',
  lastHostAddress: '192.168.1.254',
  mask: '255.255.255.0',
  cidrMask: 24
 }
 */
subnetInfo('192.168.1.1', '255.255.255.0') // As above
broadcastAddress('12.13.14.150/25') // '12.13.14.255'
networkAddress('12.13.14.150/25') // '12.13.14.128'
firstHost('12.13.14.150/25') // '12.13.14.129'
lastHost('12.13.14.150/25') // '12.13.14.254'
numberHosts('12.13.14.150/25') // 126
mask('12.13.14.150/25') // '255.255.255.128'
maskToCidr('255.255.255.0') // '24'
cidrToMask('43.23.2.65/27') // 27
```

## Contributing
Any and contributions are very welcome - be it:
- features that you implement yourself and then PR back.
- Ideas/Requests for new features.
- Suggestions for improvements.

New Functions can be written in src directory and then added as export in src/index.ts
Corresponding unit tests can be written in spec directory

#### Commit Format
The project uses [commitizen](https://commitizen.github.io/cz-cli/) to standardise commits in format:
`<type>(<scope>): <subject>`

#### Workflow is as follows:
1. Mark issue your working with label - *Status:In Progress* 
2. Implement fix/feature
2. Submit PR to **develop** branch
3. PR will be reviewed/merged
4. Upon milestones **develop** will be merged to **master**
5. Master commits spawn a CI job to deploy new version to npm

### License 
*ip-utils* is released under the [MIT license](https://raw.githubusercontent.com/librasean/IP-Utils/master/LICENSE)


