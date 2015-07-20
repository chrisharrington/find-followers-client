"use strict";

var React = require("react"),

	MenuItem = require("./menu-item");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="menu">
			<MenuItem route="dashboard">Dashboard</MenuItem>
			<MenuItem route="phrases">Phrases</MenuItem>
			<MenuItem route="account">Account</MenuItem>
			<MenuItem route="logs">Logs</MenuItem>
		</div>;
	}
});
