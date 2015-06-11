"use strict";

var qwest = require("qwest"),
    config = require("config"),
    query = require("query-string");

module.exports = new function() {
    this.isSignedIn = function() {
        return this.token !== undefined;
    },
    
    this.signIn = function() {
        window.location.href = config.api + "auth/request-token";
    };
    
    this.getAccessToken = function() {
        var parsed = query.parse(location.search);
        return qwest.get(config.api + "auth/access-token", {
            oauth_token: parsed.oauth_token,
            oauth_verifier: parsed.oauth_verifier
        }).then(function(data) {
            
        });
    };
};