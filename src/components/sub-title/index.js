"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <h3 className={this.props.className}>{this.props.children}</h3>;
	}
});