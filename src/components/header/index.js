"use strict";

var React = require("react"),

    Logo = require("components/logo/big-logo"),
    UserInfo = require("./user-info");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div className="page-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <div className="logo-container">
                            <Logo className="dark" />
                        </div>
                        <UserInfo user={this.props.user} />
                    </div>
                </div>
            </div>
		</div>;
	}
});
