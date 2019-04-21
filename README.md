# satoshi-bitcoin

[![Build Status](https://travis-ci.org/dawsbot/satoshi-bitcoin.svg?branch=master)](https://travis-ci.org/dawsbot/satoshi-bitcoin)
[![npm version](https://badge.fury.io/js/satoshi-bitcoin.svg)](http://badge.fury.io/js/satoshi-bitcoin)

> npm module to convert between Satoshi and Bitcoin <b>with lightweight precision</b>.

<br>

## The Problem

![The problem](http://i.imgur.com/H1Ck3bF.png)

<br>

## Install

```bash
npm install --save satoshi-bitcoin
```

<br>

## Usage

#### Node.js

```js
var sb = require('satoshi-bitcoin');

sb.toSatoshi(1);
//=>100000000

sb.toBitcoin(100000000);
//=>1
```

<br>

#### Web

```js
<script src="https://unpkg.com/satoshi-bitcoin/index.bundle.js"></script>
<script>
  console.log('One Satoshi equals ' + sb.toBitcoin(1) + ' Bitcoin');
</script>
```

<br>

Or download it with `npm install --save satoshi-bitcoin` and reference it as:

```html
<script src="node_modules/satoshi-bitcoin/index.bundle.js"></script>
```

<br>

### Error Handling

```javascript
try {
  sb.toSatoshi(false)); //Throws TypeError
} catch (err) {
  console.log(err);
}
```

<br>

## API

`sb.toSatoshi(number || string)`  
`sb.toBitcoin(number || string)`

[Read more on the Wiki](https://github.com/dawsonbotsford/satoshi-bitcoin/blob/master/wiki/index.md)

<br>

## FAQ

- What is a Satoshi? \* Satoshi is to Bitcoin as pennies are to the dollar. Except that there are 100,000,000 Satoshi in one Bitcoin.

* Why do I need a module when I can just divide or multiply by 100,000,000? \* [See here](http://repl.it/zlF/4) - Floating point errors are a bitch. So `satoshi-bitcoin` uses a bignum library to ensure accurate conversions!

<br>

## Tests

```bash
npm test
```

<br>

## License

MIT © [Dawson Botsford](https://dawsbot.com)
