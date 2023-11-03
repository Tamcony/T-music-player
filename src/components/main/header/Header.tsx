import SearchInput from "./SearchInput"
import BackButton from "./BackButton"
import UserInfo from "./UserInfo"

export const Header = () => {
  return (
    <>
      <div className="flex flex-row justify-between px-4">
        <div className="flex flex-row items-center gap-2">
          <BackButton></BackButton>
          <SearchInput></SearchInput>
        </div>
        <div className="flex flex-row items-center gap-2">
          <UserInfo></UserInfo>
        </div>
      </div>
    </>
  )
}

export default Header
