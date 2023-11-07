import { useState } from "react"
import { axios, handleError } from "./axios"

export const useUserLogin = (phone: string, password: string) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(false)

  const run = async () => {
    try {
      setLoading(true)
      const res = await axios.post(`/login/cellphone?phone=${phone}&password=${password}`)
      setData(res.data)
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    run,
    data,
    loading,
  }
}
