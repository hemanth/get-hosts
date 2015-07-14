'use strict';
var once = require('once');
var split = require('split');
var through = require('through');
var readFileSync = require('fs').readFileSync;
var createReadStream = require('fs').createReadStream;
var callbackStream = require('callback-stream');
var HOSTS = require('hosts-path')();
var massageItem = function(line){
    // R.E from feross/hostile
    var matches = /^\s*?([^#]+?)\s+([^#]+?)$/.exec(line)
    if (matches && matches.length === 3) {
        var hostMap = {};
        hostMap[matches[2]] = matches[1]; // host:ip
        return hostMap;
    }
};
var massageData = function(data) {
    return data.split(/\r?\n/)
        .map(massageItem)
        .filter(Boolean);
};
var massageStream = function(data){
    return through(function write(data){
        var hostMap = massageItem(data);
        if (hostMap) {
            this.queue(data);
        }
    })
};
module.exports = function(cb) {
    if (typeof cb !== 'function') {
        return massageData(readFileSync(HOSTS, {
            encoding: 'utf8'
        }));
    } else {
        cb = callbackStream(cb);
        createReadStream(HOSTS, {
            encoding: 'utf8'
        })
				.pipe(split())
				.pipe(massageStream())
				.pipe(cb);
    }
};
