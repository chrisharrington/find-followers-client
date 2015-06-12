"use strict";

var React = require("react"),
	
	Logo = require("components/logo/big-logo"),
    Auth = require("data/auth");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="landing-header">
			<div className="container">
				<div className="row">
					<div className="col-xs-12">
						<div className="logo-container">
							<Logo className="shadow" />
						</div>
                        <button className="pull-right" onClick={Auth.getRequestToken}>Sign In</button>
					</div>
				</div>
			</div>
		</div>;
	}
});