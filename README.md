# satoshi-bitcoin [![Build Status](https://travis-ci.org/dawsonbotsford/satoshi-bitcoin.svg?branch=master)](https://travis-ci.org/dawsonbotsford/satoshi-bitcoin) [![npm version](https://badge.fury.io/js/satoshi-bitcoin.svg)](http://badge.fury.io/js/satoshi-bitcoin)
satoshi-bitcoin is a node module for conversion between Satoshi and Bitcoin in either direction.

## Install
```bash
npm install satoshi-bitcoin
```

## Usage
```javascript
var converter = require('satoshi-bitcoin');
console.log('One Bitcoin equals ' + converter.toSatoshi(1));
console.log('One Satoshi equals ' + converter.toBitcoin(1));
```

## Full API Reference
Fully generated jsdoc documentation on [the Wiki](https://github.com/dawsonbotsford/satoshi-bitcoin/blob/master/wiki/index.md)

## Tests
```bash
npm test
```

## Contributing
I am very open to pull requests.
* Please lint. Consider using [my eslint configuration](https://github.com/dawsonbotsford/dotfiles/blob/master/eslintrc).
* After a change, please increment the version in ```package.json``` as defined per [Semantic Versioning](http://semver.org/).
* Update the [Wiki](https://github.com/dawsonbotsford/satoshi-bitcoin/blob/master/wiki/index.md) by performing ```npm install -g jsdox && jsdox index.js --output wiki```


## License
MIT

## Release History
* 0.1.1 README updates to reference wiki
* 0.1.0 Initial release
