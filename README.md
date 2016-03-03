# diet-underscore
Underscore template engine plugin for diet based on underscore.js

## **Learn about Underscore**:
Learn how to use it at the engine's website:
- **Website:** [http://underscorejs.org/](http://underscorejs.org/)

## **Install**

```
npm install diet-underscore
```

[![NPM](https://nodei.co/npm/diet-underscore.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/diet-underscore/)

## **Example Usage**
**index.js**

```js
// Require modules
var server = require('diet');
var _ = require('diet-underscore')(
  {
    path: app.path + '/views/',
    ext: 'tpl'
  }
);

var app = server();
app.listen('http://localhost:3000');

//add diet-underscore to header
app.header(_);
 
app.get('/', function($) {
  $.data.message = 'This is awesome!';
  //will render template at ./views/path/index.tpl
  $.html();
})

app.get('/aboutus', function ($) {
  //will render template at ./views/path/aboutus.tpl
  $.html('aboutus')
})
```


The MIT License (MIT)
=====================

Copyright (c) 2016 Arcane Digital

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


[1]: http://underscorejs.org/
[2]: http://dietjs.com/