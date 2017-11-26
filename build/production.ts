import { browserConfig, browserMinimizedConfig, defineProduction } from './base'
import * as merge from 'webpack-merge'

export default [
  merge.smart(browserConfig, { plugins: [defineProduction] }),
  merge.smart(browserMinimizedConfig, { plugins: [defineProduction] })
]
