"use strict";

var React = require("react"),
	_ = require("lodash"),
    
    Page = require("../page");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <Page>
            <div className="container spacing-top">
                Hello, world!
            </div>
        </Page>;
	}
});