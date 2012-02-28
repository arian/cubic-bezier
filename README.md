Cubic Bézier solver
===================

A small cubic bézier timing function like CSS3 timing functions.

[![Build Status](https://secure.travis-ci.org/arian/LISP.js.png)](http://travis-ci.org/arian/cubic-bezier)

Install
-------

	npm install cubic-bezier

Usage
-----

``` js
var timingFunction = bezier(p1x, p1y, p2x, p2y, epsilon);

// epsilon determines the precision of the solved values
// a good approximation is:
var duration = 200; // duration of animation in milliseconds.
var epsilon = (1000 / 60 / duration) / 4;

var easeIn = bezier(0.42, 0, 1.0, 1.0, epsilon);
var linear = bezier(0, 0, 1, 1, epsilon);

for (var t = 0; t <= 1; t += 0.001){
	console.log(easeIn(t));
	console.log(linear(t));
}
```
