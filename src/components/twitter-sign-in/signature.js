"use strict";

var _ = require("lodash"),
	config = require("config");

module.exports = function(params, url, method) {
	var string = method.toUpperCase() + "&" + encodeURIComponent(url);
	_.each(Object.getOwnPropertyNames(params).sort(), function(prop) {
		string += "&" + encodeURIComponent(prop) + "=" + encodeURIComponent(params[prop]);
	});
	
	return string;
};