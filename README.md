# gobble-amdclean

Convert AMD code to standard JavaScript with gobble and [AMDClean](https://github.com/gfranko/amdclean).

## Installation

First, you need to have gobble installed - see the [gobble readme](https://github.com/gobblejs/gobble) for details. Then,

```bash
npm i -D gobble-amdclean
```

## Usage

**gobblefile.js**

```js
var gobble = require( 'gobble' );
module.exports = gobble( 'requirejs-output' ).map( 'amdclean', amdCleanOptions );
```

The AMDClean options are as per the [documentation](https://github.com/gfranko/amdclean#options) (the `code` property will be overwritten by gobble).

## Source code

```js
module.exports = amdclean;

function amdclean ( code, options ) {
  options.code = code;
  return require( 'amdclean' ).clean( options );
}

amdclean.defaults = {
  accept: '.js'
};
```


## License

MIT. Copyright 2014 Rich Harris
