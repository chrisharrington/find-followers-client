"use strict";

var React = require("react"),

    FavouriteStore = require("data/stores/favourite"),

    LineChart = require("components/charts/line"),
    Terms = require("./terms");

require("./style.less");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            favourites: []
        };
    },

    componentWillMount: function() {
        FavouriteStore.get.subscribeAndNotify( function(favourites) {
            this.setState({ favourites: favourites });
            this.refs.lineChart.data(favourites);
            console.log(favourites.dates.length);
            console.log(favourites.data["#blah"].length);
        }.bind(this));
    },

    componentDidMount: function() {
        FavouriteStore.get.execute();
    },

	render: function() {
		return <div className="ct-chart ct-double-octave favourites-chart">
            <LineChart ref="lineChart" />
		</div>;
	}
});
