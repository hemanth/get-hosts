'use strict';
var hostsPath = require('hosts-path');
var readFileSync = require('fs').readFileSync;
module.exports = function () {
	return readFileSync(hostsPath(), { encoding: 'utf8' })
	  .split(/\r?\n/)
		.map(function(line){
			// R.E from feross/hostile
			var matches = /^\s*?([^#]+?)\s+([^#]+?)$/.exec(line)
		    if (matches && matches.length === 3) {
		      return [matches[1],matches[2]]
				}
		})
		.filter(function(h){return !!h}); // Need to avoid this.
};
