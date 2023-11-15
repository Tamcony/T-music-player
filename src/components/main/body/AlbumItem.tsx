import { RecommendItem } from "@/apis/types/album"

export const AlbumItem = (props: { album: RecommendItem }) => {
  const { album } = props
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="cursor-pointer flex shrink-0 w-40 h-40 overflow-hidden rounded-lg shadow-lg relative group">
          <img
            src={album.picUrl}
            className="object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-75"
            alt="Album"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-75"></div>
        </div>
        <span className="cursor-default text-#000 text-3 text-start bottom-0 font-bold w-40 overflow-hidden text-ellipsis drop-shadow-lg">
          {album.name}
        </span>
      </div>
    </>
  )
}

export default AlbumItem
