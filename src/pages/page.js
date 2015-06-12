"use strict";

var React = require("react"),
    
    Header = require("components/header");

module.exports = React.createClass({
	render: function() {
		return <div>
			<Header />
            {this.props.children}
		</div>;
	}
});