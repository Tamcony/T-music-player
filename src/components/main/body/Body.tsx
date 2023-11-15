import RecommandAlbum from "./RecommandAlbum"
import { useRecommendAlbum } from "@/apis/album"

export const Body = () => {
  const { fetchData, data, loading } = useRecommendAlbum()

  const handleRefreshRecommendAlbum = async () => {
    await fetchData()
  }

  // useEffect(() => {
  //   fetchData()
  // }, [])
  return (
    <>
      <div className="flex flex-col px-4">
        <RecommandAlbum
          albums={data?.recommend}
          loading={loading}
          onRefresh={handleRefreshRecommendAlbum}
        ></RecommandAlbum>
      </div>
    </>
  )
}

export default Body
