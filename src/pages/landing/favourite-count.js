"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	Description = require("components/description");

module.exports = React.createClass({
	render: function() {
		return <div className="row info">
			<div className="col-sm-12 col-md-9">
				<Title>Five percent? That doesn't sound like a lot</Title>
				<SubTitle className="spacing-top">It isn't. Quantity over quality.</SubTitle>
				<Description className="spacing-top">Twitter doesn't limit the number of tweets a user can favourite, so we'll favourite a couple hundred tweets a day on your behalf. All those favourites add up to a bunch of profile views and a significant number of followers.</Description>
			</div>
			<div className="col-md-3 show-md">
				<div className="five-percent center-block">5%</div>
			</div>
		</div>;
	}
});