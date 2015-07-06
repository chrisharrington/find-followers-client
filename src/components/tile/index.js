"use strict";

var React = require("react");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className={"tile " + (this.props.className || "")}>
            {this.renderTitle()}
            {this.props.children}
		</div>;
	},

    renderTitle: function() {
        return this.props.title ? <h3>{this.props.title}</h3> : "";
    }
});
