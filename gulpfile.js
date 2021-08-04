const gulp = require('gulp');
const pug = require('gulp-pug');

const paths = {
    root: './build',
    templates: {
        pages: 'src/templates/pages/*.pug',
        src: 'src/templates/**/*.pug',
        dest: 'build/assets'
    },
    styles: {
        src: 'src/styles/**/*.scss',
        dest: 'build/assets/styles'
    },
    images: {
        src: 'src/images/**/*.*',
        dest: 'build/assets/images/'
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'build/assets/scripts/'
    }
}

function templates() {
    return gulp.src(paths.templates.pages)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.root));
}

exports.templates = templates;
//exports.styles = this.styles;
/*
gulp.task('default', gulp.series(
    gulp.parallel(this.styles, templates, scripts),
    gulp.parallel(watch, server)
));*/