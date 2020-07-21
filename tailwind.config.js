module.exports = {
  purge: {
    content: [
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.ts',
      './src/**/*.tsx',
      './public/**/*.html',
    ],
  },
  theme: {
    extend: {
      inset: {
        '50-': '-50px',
      },
    },
  },
  variants: {},
  plugins: [],
}
