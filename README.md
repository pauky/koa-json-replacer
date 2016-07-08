# koa-json-replacer

  Replacer JSON response middleware.

## Installation

```
$ npm install koa-json-replacer
```

## Example

#### koa-v1.x
```js
var koa = require('koa');
var app = koa();
var koaJsonReplacer = require('koa-json-replacer');

app.use(koaJsonReplacer(function (key, value) {
	if (this[key] instanceof String) {
		value = this[key] + '123';
	}
	return value;
}));

app.use(function *(next){
  this.body = { foo: 'bar' };
});
```

#### koa-v2.x
```js
var koa = require('koa');
var app = koa();
var koaJsonReplacer = require('koa-json-replacer');
var convert = require('koa-convert');

app.use(convert(koaJsonReplacer(function (key, value) {
	if (this[key] instanceof String) {
		value = this[key] + '123';
	}
	return value;
})));

app.use((ctx, next) => {
  ctx.body = { foo: 'bar' };
});
```

  yields:

```js
$ GET /

{
  "foo": "bar123"
}
```

# License

  MIT
