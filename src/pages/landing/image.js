"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		return <div className={"landing-image " + this.props.className} style={{ background: "url('images/" + this.props.src + "') center center" }}></div>
	}
});