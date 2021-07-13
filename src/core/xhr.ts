import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'

export function xhr(config: AxiosRequestConfig): AxiosPromise {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const { method = 'get', url, data = null } = config
    xhr.open(method.toUpperCase(), url!)
    xhr.send(data)
    xhr.onreadystatechange = function handleLoad() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const headers = xhr.getAllResponseHeaders()
        const responseData = xhr.response
        const { status, statusText } = xhr

        const response: AxiosResponse = {
          data: responseData,
          headers,
          status,
          statusText,
          config,
          request: xhr
        }

        resolve(response)
      }
    }
    xhr.onerror = function() {
      reject()
    }
  })
}
