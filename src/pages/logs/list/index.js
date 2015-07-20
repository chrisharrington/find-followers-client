"use strict";

var React = require("react"),
	_ = require("lodash"),

	Row = require("./row");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <table>
			<tbody>
				{_.map(this.props.logs, function(log) {
					return <Row log={log} />;
				})}
			</tbody>
		</table>;
	}
});
