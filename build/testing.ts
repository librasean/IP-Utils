import { baseConfig, defineProduction } from './base'
import { Configuration } from 'webpack'
import * as merge from 'webpack-merge'
import * as path from 'path'

const testing: Configuration = {
  context: path.resolve(__dirname, '../'),
  entry: undefined,
  output: undefined,
  node: {
    fs: 'empty'
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.(tsx?|jsx?)$/,
        enforce: 'post',
        loader: 'istanbul-instrumenter-loader',
        include: [path.resolve(__dirname, '../src')],
        exclude: [/(node_modules|bower_components)/, /\.spec\.ts/],
        query: {
          esModules: true
        }
      }
    ]
  },
  plugins: [
    defineProduction
  ],
  devtool: 'inline-source-map'
}

export default merge.smart(baseConfig, testing)
