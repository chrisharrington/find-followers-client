var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	Authentication = require("./auth"),
	
	Base = require("./pages/base"),
	Home = require("./pages/home"),
	Landing = require("./pages/landing"),
	OAuthCallback = require("./pages/oauth-callback");

var routes = (
	<Route handler={Base} path="/">
		<DefaultRoute handler={Authentication.isSignedIn() ? Home : Landing} />
		<Route name="oauth-callback" handler={OAuthCallback} />
	</Route>
);

Router.run(routes, function(Handler, state) {
	React.render(<Handler params={state.params} />, document.body);
});