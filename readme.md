# get-hosts [![Build Status](https://travis-ci.org/hemanth/get-hosts.svg?branch=master)](https://travis-ci.org/hemanth/get-hosts)

> `etc/hosts` as an array of arrays.


## Install

```
$ npm install --save get-hosts
```


## Usage

```js
var getHosts = require('get-hosts');

getHosts();
/*
[ [ '127.0.0.1', 'local.dev' ],
  [ '127.0.0.1', 'localhost' ],
  [ '255.255.255.255', 'broadcasthost' ],
  [ '::1', 'localhost~ ' ] ] */
```

P.S: It's sync file read operation here, given the size of the file.

## License

MIT © [Hemanth.HM](http://h3manth.com)
