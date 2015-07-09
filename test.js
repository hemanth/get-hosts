'use strict';
var assert = require('assert');
var getHosts = require('./');

it('should returns an array of arrays', function () {
	assert.strictEqual(Array.isArray(getHosts()),true);
});
