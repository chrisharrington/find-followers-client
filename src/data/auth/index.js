"use strict";

var qwest = require("qwest"),
    config = require("config"),
    query = require("query-string");

module.exports = new function() {
    this.isSignedIn = function() {
        if (!this.user)
            this.user = JSON.parse(window.sessionStorage.getItem("user"));
        return this.user;
    },
    
    this.signIn = function() {
        window.location.href = config.api + "auth/request-token";
    };
    
    this.getAccessToken = function() {
        var parsed = query.parse(location.search);
        return qwest.get(config.api + "auth/access-token", {
            oauth_token: parsed.oauth_token,
            oauth_verifier: parsed.oauth_verifier
        }).then(function(user) {
            this.user = user;
            window.sessionStorage.setItem(JSON.stringify(user));
            window.location.href = config.home;
        }.bind(this));
    };
};