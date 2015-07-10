"use strict";

var React = require("react"),

    FavouriteStore = require("data/stores/favourite"),

    Chartist = require("chartist");

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
        }.bind(this));
    },

    componentDidMount: function() {
        FavouriteStore.get.execute();

        var data = {
          // A labels array that can contain any sort of values
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
          // Our series array that contains series objects or in this case series data arrays
          series: [
            [5, 2, 4, 2, 0]
          ]
        };

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        new Chartist.Line('.favourites-chart', data);
    },

	render: function() {
		return <div className="ct-chart ct-double-octave favourites-chart"></div>;
	}
});
