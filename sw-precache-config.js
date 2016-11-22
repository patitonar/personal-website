module.exports = {
  staticFileGlobs: [
    'build/static/**/!(*map*)',
    'build/index.html'
  ],
  stripPrefix: 'build/',
  runtimeCaching: []
};