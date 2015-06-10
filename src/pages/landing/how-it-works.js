"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	Description = require("components/description");

module.exports = React.createClass({
	render: function() {
		return <div className="row info">
            <div className="col-md-3 show-md">
				<img src="images/cog.png" alt="how-it-works" />
			</div>
			<div className="col-sm-12 col-md-9">
				<Title>Alright, I'm interested. How does it work?</Title>
				<SubTitle className="spacing-top">Half a dozen times a day, we'll grab the most pertinent tweets according to your hashtags and favourite them.</SubTitle>
				<Description className="spacing-top">We'll apply some <i>secret sauce</i> to the tweets we pull back and sort them according to how likely a favourite will yield a follower. Then we take the top contenders and favourite them on your behalf.</Description>
			</div>
		</div>;
	}
});