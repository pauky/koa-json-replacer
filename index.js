/**
 * Author: pauky
 * Date: 2016/7/8
 * Verson: 1.0.1
 */
var isJSON = require('koa-is-json');

module.exports = function (replacer) {
	return function *(next) {
		yield *next;

		if (typeof replacer !== 'function') return;

		var body = this.body;
		var json = isJSON(body);
		if (!json) return;

		return this.body = JSON.stringify(body, replacer);

	};
};