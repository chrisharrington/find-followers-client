"use strict";

var React = require("react"),
	qwest = require("qwest"),
	
	config = require("config"),
	nonce = require("./nonce"),
	signature = require("./signature");

require("./style.less");

module.exports = React.createClass({
	render: function() {
		return <div>
			<button onClick={this.signIn}>Sign in with Twitter</button>
		</div>;
	},
	
	signIn: function() {
		var params = {
			oauth_callback: "http://findfollowers.me/#/sign-in-callback",
			oauth_consumer_key: config.twitter.consumerKey,
			oauth_nonce: nonce(),
			oauth_signature_method: "HMAC-SHA1",
			oauth_timestamp: new Date(1970, 1, 1).getTime(),
			oauth_version: "1.0"
		}, url = "https://api.twitter.com/oauth/request_token";
		
		signature(params, url, "get");
		
//		qwest.get(url, signature(params, url, "get")).then(function() {
//			console.log("done");
//		});
	}
});