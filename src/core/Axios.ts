import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import InterceptorManager from "./InterceptorManager"
import { dispatchRequest } from './dispatchRequest'

interface Interceptors {
  request: InterceptorManager<AxiosRequestConfig>
  response: InterceptorManager<AxiosResponse>
}

export default class Axios {
  defaults: AxiosRequestConfig

  interceptors: Interceptors

  constructor(initConfig: AxiosRequestConfig) {
    this.defaults = initConfig
    this.interceptors = {
      request: new InterceptorManager<AxiosRequestConfig>(),
      response: new InterceptorManager<AxiosResponse>()
    }
  }
  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }

  get() {}
}
