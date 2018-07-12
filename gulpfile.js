const path = require('path');
const gulp = require('gulp');
const del = require('del');
const pug = require('gulp-pug');
const csso = require('gulp-csso');
const rigger = require('gulp-rigger');
const babel = require('gulp-babel');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;

const src = {
	html: path.resolve(__dirname, 'app', 'src', '*.html'),
	pug: path.resolve(__dirname, 'app', 'src', 'pug', 'pages', '*.pug'),
	pugWatch: path.resolve(__dirname, 'app', 'src', 'pug', '**/*.pug'),
	styl: path.resolve(__dirname, 'app', 'src', 'stylus', 'styles.styl'),
	stylWatch: path.resolve(__dirname, 'app', 'src', 'stylus', '**/**/*.styl'),
	babel: path.resolve(__dirname, 'app', 'src', 'babel', 'src', '**/*.js'),
	js: path.resolve(__dirname, 'app', 'src', 'babel', 'dist', 'main.js'),
	assets: {
		css: path.resolve(__dirname, 'app', 'src', 'assets', 'css', '**/*.css'),
		js: path.resolve(__dirname, 'app', 'src', 'assets', 'js', '**/*.js'),
		img: path.resolve(__dirname, 'app', 'src', 'assets', 'img', '**/*.+(jpg|png)')
	}
};
const dest = {
	html: path.resolve(__dirname, 'app', 'src'),
	js: path.resolve(__dirname, 'app', 'src', 'assets', 'js'),
	css: path.resolve(__dirname, 'app', 'src', 'assets', 'css'),
	babel: path.resolve(__dirname, 'app', 'src', 'babel', 'dist'),
	build: {
		html: path.resolve(__dirname, 'app', 'dist'),
		js: path.resolve(__dirname, 'app', 'dist', 'assets', 'js'),
		css: path.resolve(__dirname, 'app', 'dist', 'assets', 'css'),
		img: path.resolve(__dirname, 'json-server', 'img')
	}
};

/* Browsersync */
gulp.task('serve', function(){
	browserSync.init({
		server: path.resolve(__dirname, 'app', 'src'),
		notify: false,
		open: false
	});
	gulp.watch(src.pug, gulp.series('html'));
	gulp.watch(src.pugWatch, gulp.series('html'));
	gulp.watch(src.styl, gulp.series('css'));
	gulp.watch(src.stylWatch, gulp.series('css'));
	gulp.watch(src.babel, gulp.series('babel'));
	gulp.watch(src.js, gulp.series('js'));
	gulp.watch(src.html).on('change', reload);
});

/* Pug, преобразование Pug в HTML */
gulp.task('html', () =>
	gulp.src(src.pug)
		.pipe(plumber())
		.pipe(pug({pretty: true}))
		.pipe(gulp.dest(dest.html))
		.pipe(browserSync.stream())
);

/* Stylus, преобразование Stylus в CSS
(Stylus to CSS conversion) */
gulp.task('css', () =>
	gulp.src(src.styl)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.pipe(autoprefixer())
		.pipe(gulp.dest(dest.css))
		.pipe(rename({suffix: ".min"}))
		.pipe(csso())
		.pipe(gulp.dest(dest.css))
		.pipe(sourcemaps.write())
		.pipe(browserSync.stream())
);

/**
* Babel JS, преобразование JS ES6 в JS ES5
*/
gulp.task('babel', () =>
	gulp.src(src.babel)
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest(dest.babel))
		.pipe(browserSync.stream())
);

/* JS, объединение и минификации */
gulp.task('js', () =>
	gulp.src(src.js)
		.pipe(rigger())
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(concat('script.js'))
		.pipe(gulp.dest(dest.js))
		.pipe(uglify()) //Минификация
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(dest.js))
		.pipe(sourcemaps.write())
		.pipe(browserSync.stream())
);

/* Предварительная очистка production-папки */
gulp.task('clean', () =>
	del(dest.build.html)
);

/* Обработка изображений */
gulp.task('img', () =>
	gulp.src(src.assets.img)
		.pipe(imagemin({use: [pngquant]}))
		.pipe(gulp.dest(dest.build.img))
);

/* Production, формирование папки */
gulp.task('dist', () => {
	const htmlDist = gulp.src(src.html)
		.pipe(gulp.dest(dest.build.html));
	const cssDist = gulp.src(src.assets.css)
		.pipe(gulp.dest(dest.build.css));
	const jsDist = gulp.src(src.assets.js)
		.pipe(gulp.dest(dest.build.js));
	return ([htmlDist, cssDist, jsDist]);
});

/* Сборка */
gulp.task('build', gulp.parallel('html', 'babel', 'css', 'js'));

/* Разработка */
gulp.task('default', gulp.series('build', 'serve'));

/* Production */
gulp.task('public', gulp.series('clean', 'dist'));
