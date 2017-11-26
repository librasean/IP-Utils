import { Configuration, DefinePlugin, optimize } from 'webpack'
import { TsConfigPathsPlugin } from 'awesome-typescript-loader'
import * as path from 'path'
import * as FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin'
import * as WebpackBuildNotifierPlugin from 'webpack-build-notifier'
import * as merge from 'webpack-merge'
import { packageName } from './package-info'

export const baseConfig: Configuration = {
  context: path.resolve(__dirname, '../'),
  target: 'web',
  entry: {
    [packageName]: 'src/index.ts'
  },
  output: {
    filename: 'index.js',
    library: packageName,
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'ts-loader'
      }
    ]
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({ clearConsole: true }),
    new WebpackBuildNotifierPlugin({
      title: 'Webpack'
    })
  ],
  stats: {
    hash: false,
    version: false,
    timings: false,
    children: false,
    errors: true
  },
  watchOptions: {
    aggregateTimeout: 1000,
    poll: 500
  }
}

export const browserConfig: Configuration = merge.smart(baseConfig, {
  output: {
    path: path.resolve('lib/browser')
  }
} as Configuration)

export const browserMinimizedConfig: Configuration = merge.smart(browserConfig, {
  output: {
    filename: 'index.min.js'
  },
  devtool: 'source-map',
  plugins: [
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

export const defineProduction = new DefinePlugin({
  process: {
    env: {
      NODE_ENV: JSON.stringify('production')
    }
  }
})
