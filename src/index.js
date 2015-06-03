var React = require("react"),
	Router = require("react-router"),
	Route = Router.Route,
	DefaultRoute = Router.DefaultRoute,
	
	Authentication = require("./auth"),
	
	Base = require("./pages/base"),
	Home = require("./pages/home"),
	SignIn = require("./pages/sign-in");

var routes = (
	<Route handler={Base} path="/">
		<DefaultRoute handler={Authentication.isSignedIn() ? Home : SignIn} />
	</Route>
);

Router.run(routes, function(Handler, state) {
	React.render(<Handler params={state.params} />, document.body);
});