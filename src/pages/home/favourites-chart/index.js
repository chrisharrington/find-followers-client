"use strict";

var React = require("react"),

    Tile = require("components/tile"),
    Terms = require("./terms"),
    Loader = require("components/loader");

require("./style.less");

module.exports = React.createClass({
    getInitialState: function() {
        return {
            loading: false
        };
    },

	render: function() {
		return <Tile className="favourites-chart">
            {this.renderLoading()}
            <div className={"data" + (this.state.loading ? " hidden" : "")}>
                <Terms terms={this.props.user ? this.props.user.terms : []} />
            </div>
		</Tile>;
	},

    renderLoading: function() {
        return <div className={"loading-wrapper" + (this.state.loading ? "" : " hidden")}>
            <div className="loading">
                <Loader style="small dark" />
            </div>
        </div>;
    }
});
