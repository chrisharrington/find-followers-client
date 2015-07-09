"use strict";

var React = require("react"),

	MenuItem = require("./menu-item");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="menu">
			<MenuItem selected="true">Dashboard</MenuItem>
			<MenuItem>Phrases</MenuItem>
			<MenuItem>Account</MenuItem>
		</div>;
	}
});
