"use strict";

var React = require("react"),

    Header = require("components/header"),
    Menu = require("components/menu"),
    Auth = require("data/auth");

module.exports = React.createClass({
	render: function() {
        var user = Auth.getUser();
		return <div>
			<Header user={user} />
            <Menu user={user} />
            <div className="container-fluid padding-25">
                {this.props.children}
            </div>
		</div>;
	}
});
