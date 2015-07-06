"use strict";

var React = require("react"),
    _ = require("lodash"),

    colours = require("components/colours");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="terms">
            {_.map(this.props.terms, function(term, i) {
                return <div className="term" style={{ background: colours[i] }}>{term}</div>;
            })}
            <div className="clearfix"></div>
		</div>;
	}
});
