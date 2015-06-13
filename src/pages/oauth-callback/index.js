"use strict";

var React = require("react"),
    Auth = require("data/auth"),
    config = require("config"),
    Loader = require("components/loader"),
    Header = require("components/header"),
    query = require("query-string");

require("./style.less");

module.exports = React.createClass({
	componentDidMount: function() {
        Auth.getAccessToken().then(function(user) {
            window.location.href = config.home;
        });
	},
	
	render: function() {
		return <div>
            <Header />
            <div className="loader-container">
                <Loader style="dark big" />
                <div className="loader-text center-block">Loading...</div>
            </div>
        </div>;
	}
});