"use strict";

var React = require("react"),
    Auth = require("data/auth"),
    config = require("config");

module.exports = React.createClass({
	componentDidMount: function() {
		var parsed = query.parse(location.search);
		Auth.setCredentials(parsed.oauth_token, parsed.oauth_verifier);
		
		window.location.href = config.home;
	},
	
	render: function() {
		return <div></div>;
	}
});