# satoshi-bitcoin [![Build Status](https://travis-ci.org/dawsonbotsford/satoshi-bitcoin.svg?branch=master)](https://travis-ci.org/dawsonbotsford/satoshi-bitcoin) [![npm version](https://badge.fury.io/js/satoshi-bitcoin.svg)](http://badge.fury.io/js/satoshi-bitcoin)
npm module to convert between Satoshi and Bitcoin in either direction <b>with lightweight precision</b>.

![Imgur](http://i.imgur.com/xh6W5mW.gif)

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

### Advanced
```javascript
var converter = require('satoshi-bitcoin');
//Handles TypeErrors by throwing exception
try {
	console.log('One Bitcoin equals ' + converter.toSatoshi(false));
} catch (err) {
	console.log(err);
}
```

## Full API Reference
Fully generated jsdoc documentation on [the Wiki](https://github.com/dawsonbotsford/satoshi-bitcoin/blob/master/wiki/index.md)

## Tests
```bash
grunt
```
## FAQ
* What is a Satoshi?
	* Satoshi is currently the smallest possible sub-unit of Bitcoin. There are 100,000,000 Satoshi in one Bitcoin.
* Why do I need a module when I can just divide or multiply by 100,000,000 myself?
	* In the world of finance, floating point and unhandled type errors can cause catastrophic issues. ```satoshi-bitcoin``` handles that by implementing a bignum library in the background and descriptive error handling.

## Contributing
Very open to pull requests.

* After any change to ```index.js```, update [the Wiki](https://github.com/dawsonbotsford/satoshi-bitcoin/blob/master/wiki/index.md) by performing ```npm install -g jsdox && jsdox index.js --output wiki```
* Licensed under MIT

## Release History
* 0.2.0 Error handling Implemented. Switched to grunt.
* 0.1.2 Handle floating point corner cases and added lint tests
* 0.1.1 README updates to reference wiki
* 0.1.0 Initial release

![Donate Bitcoin](https://img.shields.io/badge/Donate%20BTC%20-16VpU9eZgQv8YfZ8WJo5XX2Qwybny9WAqf-ff69b4.svg)
