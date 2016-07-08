# koa-json-replacer

  Replacer JSON response middleware.

## Installation

```
$ npm install koa-json-replacer
```

## Example

```js
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

  yields:

```js
$ GET /

{
  "foo": "bar123"
}

# License

  MIT
