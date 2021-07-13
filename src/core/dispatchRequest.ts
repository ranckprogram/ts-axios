import { AxiosRequestConfig, AxiosPromise } from '../types'
import { xhr } from './xhr'

export function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  // 前置处理，生命周期？？终止请求
  return xhr(config)
}
