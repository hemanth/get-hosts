'use strict';
var assert = require('assert');
var getHosts = require('./');

it('should returns an array of objects sync', function () {
	assert.strictEqual(Array.isArray(getHosts()),true);
});

it('should returns an array of objects async', function (done) {
	getHosts(function(err, data){
		assert.strictEqual(Array.isArray(data),true);
		done();
	})
});
