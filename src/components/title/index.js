"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <h1>{this.props.children}</h1>;
	}
});