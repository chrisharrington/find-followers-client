"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		return <div className="data">
			<span className="label">{this.props.label}</span>
			<span className="value">{this.props.children}</span>
		</div>;
	}
});