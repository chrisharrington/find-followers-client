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

        var data = {
            labels: _buildLabels(data.dates),
            datasets: _buildDataSets(data.data, colours)
            // datasets: [
            //     {
            //         label: "My First dataset",
            //         strokeColor: colours[0],
            //         pointColor: colours[0],
            //         pointStrokeColor: "#fff",
            //         pointHighlightFill: "#fff",
            //         pointHighlightStroke: "rgba(220,220,220,1)",
            //         data: [65, 59, 80, 81, 56, 55, 40]
            //     },
            //     {
            //         label: "My Second dataset",
            //         strokeColor: colours[1],
            //         pointColor: colours[1],
            //         pointStrokeColor: "#fff",
            //         pointHighlightFill: "#fff",
            //         pointHighlightStroke: "rgba(151,187,205,1)",
            //         data: [28, 48, 40, 19, 86, 27, 90]
            //     },
            //     {
            //         label: "My Third dataset",
            //         strokeColor: colours[2],
            //         pointColor: colours[2],
            //         pointStrokeColor: "#fff",
            //         pointHighlightFill: "#fff",
            //         pointHighlightStroke: "rgba(151,187,205,1)",
            //         data: [8, 108, 45, 35, 102, 100, 45]
            //     }
            // ]
        };

        var myLineChart = new Chart(this.refs.canvas.getDOMNode().getContext("2d")).Line(data, {
            scaleShowVerticalLines: false,
            datasetFill: false,
            pointDot: false
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
