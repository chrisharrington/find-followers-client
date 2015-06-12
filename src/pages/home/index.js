"use strict";

var React = require("react"),
	_ = require("lodash"),
    
    Page = require("../page"),
	Auth = require("data/auth");

require("./style.less");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			loading: false,
			user: Auth.getUser()
		};
	},
	
	componentDidMount: function() {
		this.setState({ loading: true });
		
		Auth.getAccessToken().then(function(user) {
			window.sessionStorage.setItem("signed-in-user", JSON.stringify(user));
            window.location.href = config.home;
			
			this.setState({ loading: false, user: user });
        }.bind(this)).catch(function() {
			window.location.hash = "#/landing";
		});
	},
	
	render: function() {
		return <Page user={this.state.user}>
            <div className="container spacing-top">
                Hello, world!
            </div>
        </Page>;
	}
});