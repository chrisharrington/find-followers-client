"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className={"logo big " + this.props.className}>
			<span className="find">find</span>
			<span className="followers">followers</span>
		</div>;
	}
});