"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		return <div className={"twitter-button " + (this.props.className || "")}>
			<i className="fa fa-twitter"></i>
			<span>Sign in with Twitter</span>
		</div>;
	}
});