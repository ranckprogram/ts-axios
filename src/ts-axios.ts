// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import Axios from './core/Axios'
import defaults from './defaults'
import { mergeConfig } from './helpers/mergeConfig'
import { AxiosRequestConfig, AxiosStatic } from './types'

function createInstance(defaultConfig: AxiosRequestConfig): any {
  // any == AxiosStatic
  const instance = new Axios(defaultConfig)
  return instance
}

const axios = createInstance(defaults)

axios.create = function create(config: AxiosRequestConfig) {
  return createInstance(mergeConfig(defaults, config))
}
axios.Axios = Axios

export default axios
