"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		return <div className="stat">
			<span className="label">{this.props.label}</span>
            <br />
			<span className="value">{this.props.children}</span>
		</div>;
	}
});
