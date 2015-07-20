"use strict";

var React = require("react");

module.exports = React.createClass({
	isSelected: function() {
		return window.location.hash === "#/" + this.props.route;
	},

	render: function() {
		return <a href={"#/" + this.props.route} className={"menu-item" + (this.isSelected() ? " selected" : "")}>
            {this.props.children}
		</a>;
	}
});
