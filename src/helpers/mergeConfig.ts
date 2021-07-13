import { AxiosRequestConfig } from '../types'

export function mergeConfig(
  defaults: AxiosRequestConfig,
  config?: AxiosRequestConfig
): AxiosRequestConfig {
  return Object.assign({}, defaults, config)
}
