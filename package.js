Package.describe({
  name: 'markoshust:nouislider',
  version: '8.1.0',
  summary: 'noUiSlider is a lightweight JavaScript range slider library',
  git: 'https://github.com/markoshust/meteor-nouislider',
  documentation: 'README.md'
});

Npm.depends({
  nouislider: '8.1.0',
  brfs: '1.4.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('cosmos:browserify@0.8.1');
  api.addFiles([
    'lib/nouislider.css',
    'lib/nouislider.pips.css',
    'lib/nouislider.tooltips.css',
    'package.browserify.js'
  ], 'client');
  api.export('noUiSlider', 'client');
});
