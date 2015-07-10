var gulp = require("gulp"),
	path = require("path"),
    gutil = require("gulp-util"),
    moment = require("moment"),
	uglify = require("gulp-uglify"),
	webpack = require("webpack-stream"),

	BowerWebpackPlugin = require("bower-webpack-plugin");

gulp.task("script", function() {
    return _buildTask(false, false);
});

gulp.task("watch-script", function() {
	return _buildTask(true, false);
});

gulp.task("script-prod", function() {
	return _buildTask(false, true);
});

function _buildTask(watch, prod) {
	var stream = gulp.src("src/index.js")
		.pipe(webpack({
			watch: watch,
			output: {
				filename: "bundle.js"
			},
			module: {
				loaders: [
					{ test: /\.js$/, loader: "jsx" },
            		{ test: /\.less$/, loader: "style!css!less" },
					{ test: /\.css$/, loader: "style!css" }
				]
			},
			plugins: [
				new BowerWebpackPlugin()
			],
			resolve: {
				root: [path.join(__dirname, "../src"), path.join(__dirname, "../assets")]
			}
		}, null, _after));

	if (prod)
		stream = stream.pipe(uglify());

	return stream.pipe(gulp.dest("dist/"));
}

function _after(err, stats) {
	if (err) {
		gutil.beep();
		_logErrors([err]);
	} else if (stats.compilation.errors.length > 0) {
		gutil.beep();
		_logErrors(stats.compilation.errors);
	} else
		gutil.log("Scripts recompiled. Time elapsed: " + moment.duration(stats.endTime - stats.startTime).asSeconds() + "s");
}

function _logErrors(errors) {
	for (var i = 0; i < errors.length; i++)
		gutil.log(gutil.colors.red(errors[i]));
}
