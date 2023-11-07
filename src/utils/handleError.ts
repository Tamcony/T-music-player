import type { CmdError } from "@/apis/axios"
import { AxiosError } from "axios"
import { message } from "antd"

const isAxiosError = (error: any): error is AxiosError => {
  return error.config
}

const isCmdError = (error: any): error is CmdError => {
  return error.isCmdError
}

export const handleError = (error: unknown) => {
  if (isAxiosError(error)) {
    console.error("isAxiosError", error.message)
    message.error(error.message || "网络错误")
    // showFailToast(error.message||'网络错误')
    throw error
  } else if (isCmdError(error)) {
    console.error(error.message)
    message.error(error.message || "服务器错误")
    // showFailToast(error.message||'服务器错误,请联系客服')
    throw error
  } else {
    console.error(error)
    message.error("未知错误")
  }
}
