"use strict";

var React = require("react"),
	_ = require("lodash"),

    Page = require("../page"),
	Tile = require("components/tile"),
	Auth = require("data/auth"),

	FavouritesChart = require("./favourites-chart");

require("./style.less");

module.exports = React.createClass({
	getInitialState: function() {
		return {
			user: Auth.getUser()
		};
	},

	componentDidMount: function() {
        if (!this.state.user)
            window.location.hash = "#";
	},

	render: function() {
		return <Page user={this.state.user}>
            <div className="container spacing-top">
				<div className="row">
					<div className="col-xs-12">
						<FavouritesChart user={this.state.user} />
					</div>
				</div>
            </div>
        </Page>;
	}
});
