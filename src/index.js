var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	Auth = require("./data/auth"),
	
	Base = require("./pages/base"),
	Home = require("./pages/home"),
	Landing = require("./pages/landing"),
	OAuthCallback = require("./pages/oauth-callback");

var routes = (
	<Route handler={Base} path="/">
		<DefaultRoute handler={Landing} />
		<Route name="oauth_callback" handler={OAuthCallback} />
		<Route name="home" handler={Home} />
	</Route>
);

Router.run(routes, function(Handler, state) {
	React.render(<Handler params={state.params} />, document.body);
});