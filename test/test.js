
var bezier = require('../index');
var assert = require('assert');

var round = function(x, n){
	var n = Math.pow(10, n);
	return Math.round(x * n) / n;
};

// easeIn
var easeIn = bezier(0.42, 0, 1, 1, 1 / 100);

assert.equal(0, easeIn(0));
assert.equal(1, easeIn(1));
assert.equal(0.2161066, round(easeIn(0.4), 7));
assert.equal(0.4243386, round(easeIn(0.6), 7));


// Linear
var linear = bezier(0, 0, 1, 1, 1 / 100);

assert.equal(0, linear(0));
assert.equal(1, linear(1));
assert.equal(0.4081584, round(linear(0.4), 7));
assert.equal(0.6067481, round(linear(0.6), 7));


// easeInOut with epsilon argument
var duration = 200;
var easeInOut = bezier(0.42, 0, 0.58, 1, (1000 / 60 / duration) / 4);

assert.equal(0, easeInOut(0));
assert.equal(1, easeInOut(1));
assert.equal(0.352, round(easeInOut(0.4), 7));
assert.equal(0.648, round(easeInOut(0.6), 7));

// This should trigger the binary search algorithm.
var overshoot = bezier(.42, 1.33, .8, 1.44, 1e-6);

assert.equal(0, overshoot(0));
assert.equal(1, overshoot(1));
assert.equal(0.9458252, round(overshoot(0.4), 7));
assert.equal(1.1771389, round(overshoot(0.6), 7));
assert.equal(1.1568624, round(overshoot(0.9), 7));


console.log('\033[32m✓    Cubic bézier tests passed\033[0m');
