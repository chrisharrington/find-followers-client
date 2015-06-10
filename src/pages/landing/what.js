"use strict";

var React = require("react"),
	
	Title = require("components/title"),
	SubTitle = require("components/sub-title"),
	Description = require("components/description");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="row what info">
			<div className="col-sm-12 col-md-9">
				<Title>What do we do?</Title>
				<SubTitle className="spacing-top">You provide us with a list of hashtags that are pertinent to your audience, and we'll favourite a bunch of tweets on your behalf that contain that hashtag.</SubTitle>
				<Description className="spacing-top">Why do we favourite tweets? A user whose tweet is favourited is notified. That user is much more likely to visit your profile as a result, and profile visits often translate into follows. A favourite also registers as an engagement on a tweet, indicating to the tweeter that you're interested in what they have to say. Multiple favourites over time gets you noticed.</Description>
			</div>
			<div className="col-md-3 show-md">
				<img src="images/hashtag.png" alt="twitter-favourite" />
			</div>
		</div>;
	}
});