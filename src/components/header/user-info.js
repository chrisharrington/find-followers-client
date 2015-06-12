"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
        var user = this.props.user;
        return user ? this.renderUser(user) : <div></div>;
	},
    
    renderUser: function(user) {
        return <div className="user-info">
            user!
        </div>;
    }
});