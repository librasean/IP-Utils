import webpackConfig from './testing'
import * as path from 'path'

const configuration = {
  basePath: '../',
  failOnEmptyTestSuite: true,
  frameworks: ['jasmine'],

  files: [
    'spec/index.ts',
    'src/index.ts',
    { pattern: 'spec/**/*.spec.ts', watched: true }
  ],

  mime: {
    'text/x-typescript': ['ts', 'tsx']
  },

  plugins: [
    require('karma-webpack'),
    require('karma-coverage-istanbul-reporter'),
    require('karma-coverage'),
    require('karma-jasmine'),
    require('karma-phantomjs-launcher'),
    require('karma-notify-reporter')
  ],

  exclude: [],

  webpack: webpackConfig,

  webpackMiddleware: {
    noInfo: true,
    quiet: true,
    stats: {
      colors: true
    },
    publicPath: '/'
  },

  preprocessors: {
    'src/**/*.ts': ['webpack'],
    'spec/*.ts': ['webpack']
  },

  reporters: ['progress', 'coverage-istanbul', 'notify'],

  coverageIstanbulReporter: {
    dir: path.resolve(__dirname, '../coverage'),
    reports: ['html', 'lcov', 'cobertura'],
    fixWebpackSourcePaths: false,
    skipFilesWithNoCoverage: true,
    'report-config': {
      html: {
        subdir: 'html'
      },
      lcov: {
        subdir: 'lcov'
      },
      cobertura: {
        subdir: 'cobertura'
      }
    }
  },

  port: 9876,

  client: {
    captureConsole: true,
    clearContext: true
  },

  colors: true,

  autoWatch: true,

  browsers: ['PhantomJS'],

  concurrency: Infinity
}

export default (config: any) => {
  config.set(configuration)
}
