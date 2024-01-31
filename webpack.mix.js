// webpack.mix.js

let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

mix.js('src/js/app.js', 'assets')
    .sass('src/scss/index.scss', 'assets')
    .sass('src/scss/base.scss','assets')
    .sass('src/scss/about.scss','assets')
    .sass('src/scss/shop.scss','assets')
    .sass('src/scss/product.scss','assets')
    .sass('src/scss/contact.scss','assets')
    .options({
        processCssUrls:false,
        postCss:[tailwindcss('tailwind.config.js')],
     });