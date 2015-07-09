var config = require("config"),
	_ = require("lodash"),
    qwest = require("qwest");

module.exports = function(verb, collection) {
	var _subscribers = {}, _result;
	
	this.execute = function(params) {
        var url = config.api + collection
        
		return qwest[verb](config.api + collection, params).then(function(response) {
			_result = response;
			_notify();
		});
	};
	
	this.subscribe = function(key, callback) {
		_subscribe(key, callback);
	};
	
	this.subscribeAndNotify = function(key, callback) {
		_subscribe(key, callback);
	};
	
	this.unsubscribe = function(key) {
		delete _subscribers[key];
	};
	
	function _subscribe(key, callback) {
		_subscribers[key] = callback;
	};
	
	function _notify() {
		if (!_result)
			return;
		
		for (var key in _subscribers)
			_subscribers[key](_result);
	};
};