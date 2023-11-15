import RefreshButton from "@/components/common/RefreshButton"
import AlbumItem from "@/components/main/body/AlbumItem"
import { RecommendItem } from "@/apis/types/album"

export const RecommandAlbum = (props: { loading: boolean; onRefresh: () => void; albums?: RecommendItem[] }) => {
  const { loading, onRefresh, albums } = props

  const albumList = albums?.map((album) => {
    return (
      <AlbumItem
        key={album.id}
        album={album}
      ></AlbumItem>
    )
  })
  return (
    <>
      <div className="w-full flex flex-col items-start">
        <div className="flex flex-row gap-2">
          <h1 className="text-8">为你推荐</h1>
          <RefreshButton
            loading={loading}
            onRefresh={onRefresh}
          ></RefreshButton>
        </div>
        <div className="w-350 flex flex-row gap-4 p-4 overflow-x-scroll">{albumList}</div>
      </div>
    </>
  )
}

export default RecommandAlbum
