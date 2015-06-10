"use strict";

var React = require("react"),
	_ = require("lodash"),
	
	Image = require("./image"),
	SignIn = require("./sign-in"),
	
	What = require("./what"),
	Conversion = require("./conversion"),
    FavouriteCount = require("./favourite-count"),
    HowItWorks = require("./how-it-works"),
    Cost = require("./cost");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div>
			<Image className="landing-image" src="landing.jpg" />
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="banner-text">Target Your Audience. Spread Your Message. Find Your Followers.</div>
					</div>
				</div>
                <SignIn />
				<What />
				<Conversion />
                <FavouriteCount />
                <HowItWorks />
                <Cost />
			</div>
		</div>;
	}
});