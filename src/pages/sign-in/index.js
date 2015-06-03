"use strict";

var React = require("react"),
	_ = require("lodash"),
	
	TwitterSignIn = require("components/twitter-sign-in");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="container spacing-top">
			<TwitterSignIn />
		</div>;
	}
});