"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	TwitterButton = require("./twitter-button"),
    Auth = require("data/auth");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="row sign-in-container">
            <div className="col-xs-12">
                <div className="sign-in">
                    <span className="logo">Find<b>Followers</b></span>
                    <SubTitle className="spacing-top">Connect your Twitter account, choose hashtags that describe your audience and find new followers.</SubTitle>
                    <SubTitle className="spacing-top">Try it <b>free</b> for two weeks. After that, it's just $5 a month.</SubTitle>
                    <TwitterButton className="spacing-top" onClick={Auth.signIn} />
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>;
	}
});