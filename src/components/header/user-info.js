"use strict";

var React = require("react"),
	Stat = require("./stat"),
    UserStore = require("data/stores/user"),
    Auth = require("data/auth");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loading: false
		};
	},

    componentWillMount: function() {
        UserStore.get.subscribeAndNotify(function(user) {
            this.setState({ user: user });
        }.bind(this));
    },

    componentDidMount: function() {
        UserStore.get.execute({ handle: Auth.getUser().handle });
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

		return <div className="stats">
            <Stat label="Followers">{user.followers_count}</Stat>
            <Stat label="Following">{user.friends_count}</Stat>
            <Stat label="Favourites">{user.favourites_count}</Stat>
        </div>;
	}
});
