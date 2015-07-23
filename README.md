# satoshi-bitcoin [![Build Status](https://travis-ci.org/dawsonbotsford/satoshi-bitcoin.svg?branch=master)](https://travis-ci.org/dawsonbotsford/satoshi-bitcoin) 
satoshi-bitcoin is a node module for conversion between Satoshi and Bitcoin in either direction.

## Install
```bash
npm install satoshi-bitcoin
```

## Usage
```javascript
var converter = require(satoshi-bitcoin);
console.log('One Bitcoin equals ' + converter.toSatoshi(1));
console.log('One Satoshi equals ' + converter.toBitcoin(1));
```

## Tests
```bash
npm test
```

## Contributing
If you see anything to add, I am very open to pull requests. If you would, please use [my eslint configuration](https://github.com/dawsonbotsford/dotfiles/blob/master/eslintrc).

## License
MIT

## Release History
* 0.1.0 Initial release
