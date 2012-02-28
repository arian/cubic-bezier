
var bezier = require('../index');
var assert = require('assert');

// easeIn
var easeIn = bezier(0.42, 0, 1, 1, 1000);

assert.equal(0, easeIn(0));
assert.equal(1, easeIn(1));
assert.equal(0.2109793, (Math.round(easeIn(0.4) * 1e7) / 1e7));
assert.equal(0.4371482, (Math.round(easeIn(0.6) * 1e7) / 1e7));


// Linear
var linear = bezier(0, 0, 1, 1, 1000);

assert.equal(0, linear(0));
assert.equal(1, linear(1));
assert.equal(0.3898104, (Math.round(linear(0.4) * 1e7) / 1e7));
assert.equal(0.608722, (Math.round(linear(0.6) * 1e7) / 1e7));


// easeInOut with epsilon argument
var duration = 200;
var easeInOut = bezier(0.42, 0, 0.58, 1, duration * 2, (1000 / 60 / duration) / 4);

assert.equal(0, easeInOut(0));
assert.equal(1, easeInOut(1));
assert.equal(0.3628329, (Math.round(easeInOut(0.4) * 1e7) / 1e7));
assert.equal(0.6940976, (Math.round(easeInOut(0.6) * 1e7) / 1e7));


console.log('\033[32m✓    Cubic bézier tests passed\033[0m');
