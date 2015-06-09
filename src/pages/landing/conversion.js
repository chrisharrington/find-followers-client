"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	Description = require("components/description");

module.exports = React.createClass({
	render: function() {
		return <div className="row info">
			<div className="col-sm-8">
				<Title>A favourite? How often does that yield a follower?</Title>
				<SubTitle className="spacing-top">The conversion rate depends almost entirely on you.</SubTitle>
				<Description className="spacing-top">A favourite will only at best generate a profile view. Once a potential follower has arrived at your profile, it's your job to be interesting and engaging enough to warrant being followed. The more you tweet about topics relevant to the hashtags you've provided, the more followers you'll garner.</Description>
				<Description className="spacing-top">Typically, you'll have about a five percent chance of a follow from a favourite. It'll rarely exceed 10%.</Description>
			</div>
			<div className="col-sm-4">
				<img src="images/twitter-favourite.png" alt="twitter-favourite" />
			</div>
		</div>;
	}
});