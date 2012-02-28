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
var timingFunction = bezier(p1x, p1y, p2x, p2y, n);

// n is the precision, the higher the more precise, but slower.
// a good approximation is for animations is: duration in ms * 2

var easeIn = bezier(0.42, 0, 1.0, 1.0, 1000);
var linear = bezier(0, 0, 1, 1, 1000);

for (var t = 0; t <= 1; t += 0.001){
	console.log(easeIn(t));
	console.log(linear(t));
}
```
