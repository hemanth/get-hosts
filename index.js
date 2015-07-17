'use strict';
var readFileSync = require('fs').readFileSync;
var readFile = require('fs').readFile;
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

module.exports = function(cb) {
    if (typeof cb !== 'function') {
        return massageData(readFileSync(HOSTS, {
            encoding: 'utf8'
        }));
    } else {
      readFile(HOSTS,'utf-8',function(err,data) {
        var res = massageData(data);
        if(res) return cb(null,data);
        return cb(new Error("Couldn't process data"),false);
      })
    }
};
