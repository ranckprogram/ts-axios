export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  baseUrl?: string
  data?: any
  params?: any
}

export interface AxiosResponse<T = any> {
  data: T
  status: Number
  statusText: String
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise {}

export interface AxiosInterceptorManager<T> {
  use(resolved: ResolvedFn<T>, RejectedFn?: RejectedFn): number
  eject(id: number): void
}

export interface ResolvedFn<T> {
  (val: T): T | Promise<T>
}

export interface RejectedFn {
  (error: any): any
}

export interface Axios {
  defaults: AxiosRequestConfig

  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>
    response: AxiosInterceptorManager<AxiosResponse>
  }

  request<T = any>(config: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {}


export interface AxiosClassStatic {
  new (config: AxiosRequestConfig): Axios
}

export interface AxiosInstance extends Axios{
  <T=any>(config: AxiosRequestConfig): AxiosPromise<T>

  <T=any>(url: string, config?: AxiosRequestConfig): AxiosPromise<T>
}

export interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance

  // CancelToken: CancelTokenStatic
  // Cancel: CancelStatic
  // isCancel: (value: any) => boolean

  // all<T>(promises: Array<T | Promise<T>>): Promise<T[]>
  // spread<T, R>(callback: (...args: T[]) => R): (arr: T[]) => R
  Axios: AxiosClassStatic
}