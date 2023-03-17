const config = {
  plugins: [
    require("postcss-import"),
    require("postcss-mixins"),
    require('postcss-nested'),
    require("postcss-design-tokens")({
      tokens: {
        colors: require('./src/lib/data/palette.json'),
        breakpoints: require('./src/lib/data/breakpoints.json')
      }
    }),
    require("postcss-simple-vars"),
    require("postcss-calc")({
      mediaQueries: true
    }),
    require("autoprefixer")
  ]
}

module.exports = config