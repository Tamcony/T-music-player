import { useState } from "react"
import { axios, handleError } from "./axios"
import { User, UserDetail } from "./types/user"

export const useUserLogin = () => {
  const [data, setData] = useState<User>()
  const [loading, setLoading] = useState(false)

  const fetchData = async (phone: string, password: string) => {
    try {
      setLoading(true)
      const res = await axios.post(`/login/cellphone`, {
        phone,
        password,
      })
      setData(res.data)
      if (res?.data?.cookie) {
        document.cookie = res.data.cookie
      }
      return res.data
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    fetchData,
    data,
    loading,
  }
}

export const useUserDetail = () => {
  const [data, setData] = useState<UserDetail>()
  const [loading, setLoading] = useState(false)

  const fetchData = async (uid: number) => {
    try {
      setLoading(true)
      const res = await axios.get(`/user/detail?uid=${uid}`)
      setData(res.data)
      return res.data
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }
  return {
    fetchData,
    data,
    loading,
  }
}

export const useUserLogout = () => {
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`/logout`)
      return res.data
    } catch (error) {
      handleError(error)
    } finally {
      setLoading(false)
    }
  }
  return {
    fetchData,
    loading,
  }
}
