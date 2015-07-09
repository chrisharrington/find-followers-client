"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		return <div className={"menu-item" + (this.props.selected ? " selected" : "")}>
            {this.props.children}
		</div>;
	}
});
