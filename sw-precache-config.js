module.exports = {
  staticFileGlobs: [
    'build/static/**/!(*map*)',
    'build/manifest.json',
    'build/index.html'
  ],
  stripPrefix: 'build/',
  swFilePath: 'build/service-worker.js'
};