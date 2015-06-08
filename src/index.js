var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	Authentication = require("./auth"),
	
	Base = require("./pages/base"),
	Home = require("./pages/home"),
	Land = require("./pages/land"),
	OAuthCallback = require("./pages/oauth-callback");

var routes = (
	<Route handler={Base} path="/">
		<DefaultRoute handler={Authentication.isSignedIn() ? Home : Land} />
		<Route name="oauth-callback" handler={OAuthCallback} />
	</Route>
);

Router.run(routes, function(Handler, state) {
	React.render(<Handler params={state.params} />, document.body);
});