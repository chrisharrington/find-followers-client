"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className={"description " + this.props.className}>{this.props.children}</div>;
	}
});