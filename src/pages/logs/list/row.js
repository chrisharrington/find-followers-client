"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
        var log = this.props.log;
		return <tr>
            <td>{log.level}</td>
            <td>{log.user.name}</td>
            <td>{log.file}</td>
            <td>{log.message}</td>
		</tr>;
	}
});
