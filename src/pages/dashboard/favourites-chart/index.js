"use strict";

var React = require("react"),

    FavouriteStore = require("data/stores/favourite");

require("./style.less");

module.exports = React.createClass({
    // componentWillMount: function() {
    //     FavouriteStore.get.subscribeAndNotify( function(user) {
    //         this.setState({ user: user });
    //     }.bind(this));
    // },
    //
    // componentDidMount: function() {
    //     FavouriteStore.get.execute();
    // },

	render: function() {
		return <div>
            favourites chart
		</div>;
	}
});
