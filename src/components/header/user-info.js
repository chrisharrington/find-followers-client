"use strict";

var React = require("react"),
	Stat = require("./stat");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loading: false
		};
	},
	
	render: function() {
        var user = this.props.user;
        return user ? this.renderUser(user) : <div></div>;
	},
    
    renderUser: function(user) {
        return <div className="user-info-container">
			<img src={user.image} alt="profile-image" />
			<div className="user">
				<span className="name">{user.name}</span>
				<br />
				<span className="handle">{user.handle}</span>
			</div>
			{this.renderStats()}
        </div>;
    },
	
	renderStats: function() {
		var user = this.state.user;
		if (!user)
			return <div></div>;
			
		return <div>user stats!</div>;
	}
});