"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	Description = require("components/description");

module.exports = React.createClass({
	render: function() {
		return <div className="row what info">
			<div className="col-sm-8">
				<Title>Ok, sounds interesting. How much does it cost?</Title>
				<SubTitle className="spacing-top">We'll give you a <b>free</b> trial of our service for the first two weeks. You don't have to provide your credit card information or anything like that when you sign up.</SubTitle>
				<Description className="spacing-top">If you decide you</Description>
			</div>
			<div className="col-sm-4">
				<img src="images/twitter-favourite.png" alt="twitter-favourite" />
			</div>
		</div>;
	}
});