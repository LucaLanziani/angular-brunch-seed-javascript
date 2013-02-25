// Testacular configuration


// base path, that will be used to resolve files and exclude
basePath = '../';

// list of files / patterns to load in the browser
files = [
  JASMINE
  , JASMINE_ADAPTER

  , 'vendor/scripts/angular/angular.js'
  , 'vendor/scripts/angular/angular-*.js'

  , 'vendor/scripts/console-helper.js'
  , 'vendor/scripts/jquery-1.8.3.js'
  , 'vendor/scripts/bootstrap/bootstrap-transition.js'
  , 'vendor/scripts/bootstrap/bootstrap-alert.js'
  , 'vendor/scripts/bootstrap/bootstrap-button.js'
  , 'vendor/scripts/bootstrap/bootstrap-carousel.js'
  , 'vendor/scripts/bootstrap/bootstrap-collapse.js'
  , 'vendor/scripts/bootstrap/bootstrap-dropdown.js'
  , 'vendor/scripts/bootstrap/bootstrap-modal.js'
  , 'vendor/scripts/bootstrap/bootstrap-tooltip.js'
  , 'vendor/scripts/bootstrap/bootstrap-popover.js'
  , 'vendor/scripts/bootstrap/bootstrap-scrollspy.js'
  , 'vendor/scripts/bootstrap/bootstrap-tab.js'
  , 'vendor/scripts/bootstrap/bootstrap-typeahead.js'
  , 'vendor/scripts/bootstrap/bootstrap-affix.js'
  
  , 'test/vendor/angular/angular-mocks.js'
  
  //Application Code
  , 'app/scripts/**/*.js'

  //Specs
  , 'test/unit/**/*Spec.js'
];

// list of files to exclude
exclude = [];

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit'
// CLI --reporters progress
reporters = ['progress', 'junit'];

junitReporter = {
  // will be resolved to basePath (in the same way as files/exclude patterns)
  outputFile: 'test/test-results.xml'
};

// web server port
// CLI --port 3334
port = 3334;

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
// CLI --colors --no-colors
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
// CLI --log-level debug
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
// CLI --auto-watch --no-auto-watch
autoWatch = true;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
// CLI --browsers Chrome,Firefox,Safari
browsers = [];

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
captureTimeout = 5000;

// Auto run tests on start (when browsers are captured) and exit
// CLI --single-run --no-single-run
singleRun = false;

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500;


