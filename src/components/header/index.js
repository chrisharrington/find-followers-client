"use strict";

var React = require("react"),
	
	Logo = require("components/logo/big-logo"),
    Auth = require("data/auth");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="page-header">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="logo-container">
							<Logo className="dark" />
						</div>
					</div>
				</div>
			</div>
		</div>;
	}
});