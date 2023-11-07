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
})

instance.interceptors.request.use(
  (config) => {
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
