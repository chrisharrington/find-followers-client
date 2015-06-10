"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	Description = require("components/description");

module.exports = React.createClass({
	render: function() {
		return <div className="row info">
			<div className="col-sm-12">
				<Title>I'm convinced. What does it cost?</Title>
				<SubTitle className="spacing-top">The first two weeks are free because we feel it's important to try before you buy. After that, it's <b>$5</b> a month.</SubTitle>
				<Description className="spacing-top">Our comprehensive reporting tools will tell you exactly how many followers our service has provided you so you can make an informed decision as to whether or not you'd like to continue.</Description>
			</div>
		</div>;
	}
});