# get-hosts [![Build Status](https://travis-ci.org/hemanth/get-hosts.svg?branch=master)](https://travis-ci.org/hemanth/get-hosts)

> `etc/hosts` as an array of objects.


## Install

```
$ npm install --save get-hosts
```


## Usage

```js
var getHosts = require('get-hosts');

getHosts(); // sync

getHosts(function(err,hosts){
	if(!err) console.log(hosts);
});

/*[ { 'local.dev': '127.0.0.1' },
  { localhost: '127.0.0.1' },
  { broadcasthost: '255.255.255.255' },
  { 'localhost~ ': '::1' } ]*/

```


## Related

- [get-hosts-cli](https://github.com/icyflame/get-hosts-cli/) - CLI for this module


## License

MIT © [Hemanth.HM](http://h3manth.com)
