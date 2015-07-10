"use strict";

var React = require("react"),

    FavouriteStore = require("data/stores/favourite"),

    PieChart = require("components/charts/pie"),
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
            this.refs.chart.data(favourites);
        }.bind(this));
    },

    componentDidMount: function() {
        FavouriteStore.get.execute();
    },

	render: function() {
		return <div className="favourites-chart">
            <PieChart ref="chart" />
		</div>;
	}
});
