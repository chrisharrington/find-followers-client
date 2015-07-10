var config = require("config"),
	_ = require("lodash"),
    qwest = require("qwest"),

	Auth = require("data/auth");

module.exports = function(verb, collection) {
	var _subscribers = [], _result;

	this.execute = function(params) {
        params = params || {};

		var user = Auth.getUser();
		if (user)
			params.handle = user.handle;

		var url = config.api + collection;
		return qwest[verb](config.api + collection, params).then(function(response) {
			_result = response;
			_notify();
		});
	};

	this.subscribe = function(callback) {
		_subscribe(callback);
	};

	this.subscribeAndNotify = function(callback) {
		_subscribe(callback);
		_notify();
	};

	this.unsubscribe = function(key) {
		delete _subscribers[key];
	};

	function _subscribe(callback) {
		_subscribers.push(callback);
	};

	function _notify() {
		if (!_result)
			return;

		_.each(_subscribers, function(subscriber) {
			subscriber(_result);
		});
	};
};
