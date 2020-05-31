const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './index.html',
      './App.vue',
      './src/**/*.vue',
      './views/**/*.vue',
      './main.js',
      './src/**/*.js',
    ],
  
    defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
  });

  const prefix = require('autoprefixer');

  module.exports = {
    plugins: [
      require('tailwindcss'),
      ...(process.env.NODE_ENV == 'production' ? [prefix, purgecss] : []),
    ],
  }