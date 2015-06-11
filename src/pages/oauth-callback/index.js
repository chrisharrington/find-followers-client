"use strict";

var React = require("react"),
    Auth = require("data/auth"),
    config = require("config");

module.exports = React.createClass({
	componentDidMount: function() {
		Auth.getAccessToken().then(function(user) {
			window.sessionStorage.setItem("signed-in-user", JSON.stringify(user));
            window.location.href = config.home; 
        });
	},
	
	render: function() {
		return <div></div>;
	}
});