const gulp = require('gulp');
const zip = require('gulp-zip');
const cp = require('child_process');
const app = require('./package.json');

function buildApp() {
    return cp.exec('npm run build');
}

function zipApp(cb) {
    const formattedDate = formatDate(new Date());
    const name = app.name;

    gulp.src('build/**')
        .pipe(zip(`${name}_${formattedDate}.mds.zip`))
        .pipe(gulp.dest('minidapp'));

    cb();
}

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function formatDate(date) {
    return (
        [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('_') +
        '_' +
        [
            padTo2Digits(date.getHours()),
            padTo2Digits(date.getMinutes()),
        ].join('')
    );
}

exports.default = gulp.series(buildApp, zipApp);
