const { mix } = require('laravel-mix');
const inProduction = mix.inProduction();

mix
    .setPublicPath('dist')
    .js('src/index.js', 'index.js')
    .sass('src/scss/app.scss', 'styles.css')
    .sourceMaps(! inProduction);