import { handleError } from "@/utils/handleError"
import _axios, { type AxiosResponse } from "axios"

interface CmdData {
  code: number
  [key: string]: any
}

export interface CmdError {
  isCmdError: boolean
  code: number
  message: string
  msg: string
}

const instance = _axios.create({
  baseURL: "/api",
  timeout: 10000,
  withCredentials: true,
})

instance.interceptors.request.use(
  (config) => {
    // if (config.method === "post") {
    //   if (document.cookie) {
    //     config.data
    //       ? Object.assign(config.data, {
    //           cookie: document.cookie,
    //         })
    //       : (config.data = {
    //           cookie: document.cookie,
    //         })
    //   }
    // }
    // if (config.method === "get") {
    //   if (document.cookie) {
    //     config.params
    //       ? Object.assign(config.params, {
    //           cookie: document.cookie,
    //         })
    //       : (config.params = {
    //           cookie: document.cookie,
    //         })
    //   }
    // }
    return config
  },
  (error) => {
    handleError(error)
  }
)

instance.interceptors.response.use((response: AxiosResponse<CmdData>) => {
  if (response.data.code !== 200) {
    return Promise.reject<AxiosResponse<CmdError>>({
      isCmdError: true,
      ...response.data,
    })
  }
  return response
})

export const axios = instance
export { handleError } from "@/utils/handleError"
