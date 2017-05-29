const path = require('path');

const webpackConfig = {
  devtool: 'inline-source-map',
  resolve: {
    root: path.join(__dirname, 'js/src'),
    extensions: ['', '.js']   // ''が必要、、、
  },
  module: {
    preLoaders: [
      // coverageを出力するのに必要
      {
        test: /\.js$/,
        include: path.resolve('js/src'),
        exclude: path.resolve('js/test'),
        loader: 'isparta'
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      }
    ]
  }
};

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      //'js/src/**/*.js', // これを足すとファイルがないエラー
      'js/test/**/*.test.js'
    ],
    exclude: [
    ],
    preprocessors: {
      //'js/src/**/*.js': ['coverage'], // 不要っぽい
      'js/test/**/*.test.js': ['webpack']
    },
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      reporters: [{type: 'lcov'}]
      // type: 'html',
      // dir: 'coverage'
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'normal',
      noInfo: true
    },
    // port: 9876, // web server port
    
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    
    browsers: ['Chrome'],
    
    // Continuous Integration mode. if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    
    plugins: [
      require("karma-webpack"),
      require("karma-mocha"),
      require('karma-chrome-launcher'),
      require('karma-spec-reporter'),
      require("karma-chai"),
      require("karma-coverage"),
    ]
  })
}
