[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Build Status](https://travis-ci.org/librasean/IP-Utils.svg?branch=master)](https://travis-ci.org/librasean/IP-Utils)
[![codecov](https://codecov.io/gh/librasean/IP-Utils/branch/master/graph/badge.svg)](https://codecov.io/gh/librasean/IP-Utils)

# IP Util Functions Library
Aims to provide a library of useful functions related to IP (v4 and v6).
## Usage

#### Installation
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

## Contributing
Any and contributions are very welcome - be it:
- features that you implement yourself and then PR back.
- Ideas/Requests for new features.
- Suggestions for improvements.

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


