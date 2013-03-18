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

## MIT License

Copyright (c) 2013 Arian Stolwijk

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
