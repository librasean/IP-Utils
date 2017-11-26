import { baseConfig } from './base'
import * as merge from 'webpack-merge'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { Configuration, optimize } from 'webpack'
import * as path from 'path'

export default merge.smart(baseConfig, {
  output: {
    path: path.resolve('bundle-analysis')
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      reportFilename: 'js-dependencies-report.html'
    }),
    new optimize.UglifyJsPlugin({
      sourceMap: true,
      beautify: false,
      comments: false,
      compress: {
        sequences: true,
        booleans: true,
        loops: true,
        unused: true,
        warnings: false,
        unsafe: true
      }
    })
  ]
} as Configuration)
