var gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    minifycss = require("gulp-clean-css"),
    less = require("gulp-less");
    
gulp.task('less', function(){
    gulp.src("src/style/less/**/*.less")
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write("./map"))
    .pipe(gulp.dest("src/style/css"));
});

gulp.task('less:watch', function(){
    gulp.watch('src/style/less/**/*.less', ['less']);
});

gulp.task('minifycss', function(){
    gulp.src('src/font/**/*')
    .pipe(gulp.dest('release/font/'));

    gulp.src('src/html/**/*')
    .pipe(gulp.dest('release/'));

    gulp.src('src/img/**/*')
    .pipe(gulp.dest('release/img/'));

    gulp.src('src/js/**/*')
    .pipe(gulp.dest('release/js/'));

    gulp.src('src/style/css/**/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('release/style/css'));
});

gulp.task("default", ["less"]);

gulp.task("watch", ["less:watch"]);

gulp.task("release", ["less","minifycss"]);