
var request = require('supertest');
var koaJsonReplacer = require('..');
var koa = require('koa');
var app = koa();

describe('Koa GET /', function(){
	it('replacer success', function(done){

		app.use(koaJsonReplacer(function (key, value) {
			if (this[key] instanceof Date) {
				value = this[key].getTime();
			}
			return value;
		}));

		app.use(function *(next){
			this.body = { foo: new Date(1467960416235) };
		});

		request(app.listen())
			.get('/')
			.expect('{"foo":1467960416235}', done);
	});
});