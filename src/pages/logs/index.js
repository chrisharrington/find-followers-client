"use strict";

var React = require("react"),

    LogStore = require("data/stores/log"),

    Page = require("../page"),
    List = require("./list");

require("./style.less");

var GET_LOGS = "get-logs";

module.exports = React.createClass({
    getInitialState: function() {
        return {
            logs: []
        };
    },

    componentWillMount: function() {
        LogStore.get.subscribeAndNotify(GET_LOGS, function(logs) {
            this.setState({ logs: logs });
        }.bind(this));
    },

    componentWillUnmount: function() {
        LogStore.get.unsubscribe(GET_LOGS);
    },

    componentDidMount: function() {
        LogStore.get.execute();
    },

    render: function() {
		return <Page>
			<div className="row">
				<div className="col-xs-12">
                    <List logs={this.state.logs} />
				</div>
			</div>
        </Page>;
	}
});
