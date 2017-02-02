var gulp        = require("gulp");
var ts          = require("gulp-typescript");
var concat      = require('gulp-concat');
var del         = require("del");
//var karma       = require("karma");

var tsProject = ts.createProject("tsconfig.json");

/*
gulp.task("build-tests", function (done) {

    return tsProject.src()
        .pipe(tsProject()).js
        .pipe(gulp.dest("test/"));

});

gulp.task("test",["build-tests"], function (done) {

    var Server = karma.Server;

    new Server({
        configFile: __dirname + '/karma.conf.js',
        autoWatch: false,
        singleRun: true
    }, function () {
        // done();
        del("test", done);
    }).start();

});
*/

gulp.task("default", function () {
    
    // Production build excluding test files.
    return gulp.src(["src/app/**/*.ts"])
        .pipe(tsProject()).js
        .pipe(concat('app/bundle.js'))
        .pipe(gulp.dest("wwwroot"));
});
