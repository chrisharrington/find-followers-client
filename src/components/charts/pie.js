"use strict";

var React = require("react"),
    Chart = require("chartjs"),
    _ = require("lodash");

module.exports = React.createClass({
    data: function(data) {
        var colours = [
            "#026aa7",
            "rgb(255, 154, 39)",
            "rgb(102, 197, 103)",
            "brown",
            "black"
        ];

        // var data = {
        //     labels: _buildLabels(data.dates),
        //     datasets: _buildDataSets(data.data, colours)
        // };

        var data = [
            {
                value: 300,
                color:"#F7464A",
                highlight: "#FF5A5E",
                label: "Red"
            },
            {
                value: 50,
                color: "#46BFBD",
                highlight: "#5AD3D1",
                label: "Green"
            },
            {
                value: 100,
                color: "#FDB45C",
                highlight: "#FFC870",
                label: "Yellow"
            },
            {
                value: 40,
                color: "#949FB1",
                highlight: "#A8B3C5",
                label: "Grey"
            },
            {
                value: 120,
                color: "#4D5360",
                highlight: "#616774",
                label: "Dark Grey"
            }

        ];

        new Chart(this.refs.canvas.getDOMNode().getContext("2d")).Pie(data, {
        });
    },

	render: function() {
		return <canvas ref="canvas" style={{ width: "100%", height: 200 }}></canvas>;
	}
});

function _buildDataSets(data, colours) {
    var count = 0;
    return _.map(data, function(d, key) {
        return {
            label: key,
            strokeColor: colours[count],
            pointColor: colours[count++],
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: d
        }
    });
}

function _buildLabels(dates) {
    var max = 30, labels = [], index = dates.length / max;
    for (var i = 0; i < dates.length; i++)
        //labels.push(i%index === 0 ? dates[i] : "")
        labels.push(dates[i]);
    return labels;
}
