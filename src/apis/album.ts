import { axios, handleError } from "./axios"
import { useState } from "react"
import { ReconmmendAlbumData } from "./types/album"

export const useRecommendAlbum = () => {
  const [data, setData] = useState<ReconmmendAlbumData>()
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await axios.get("/recommend/resource")
      setData(res.data)
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
