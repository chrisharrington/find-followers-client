"use strict";

var qwest = require("qwest"),
    config = require("config"),
    query = require("query-string");

var OAUTH_CREDENTIALS = "oauth-credentials",
	SIGNED_IN_USER = "signed-in-user";

module.exports = new function() {
    this.isSignedIn = function() {
        if (!this.user)
            this.user = JSON.parse(window.sessionStorage.getItem(SIGNED_IN_USER));
        return this.user;
    },
		
	this.getUser = function() {
		return this.user;
	},
    
    this.getRequestToken = function() {
        window.location.href = config.api + "auth/request-token";
    };
    
    this.getAccessToken = function() {
        var parsed = JSON.parse(window.sessionStorage.getItem(OAUTH_CREDENTIALS));
        return qwest.get(config.api + "auth/access-token", {
            oauth_token: parsed.oauth_token,
            oauth_verifier: parsed.oauth_verifier
        }).then(function(user) {
            this.user = user;
			window.sessionStorage.setItem(SIGNED_IN_USER, JSON.stringify(user));
			return user;
        }.bind(this));
    };
	
	this.setCredentials = function(token, verifier) {
		window.sessionStorage.setItem(OAUTH_CREDENTIALS, JSON.stringify({
			oauth_token: token,
            oauth_verifier: verifier
		}));
	};
};