import Header from "@/components/main/header/Header"
import Sider from "@/components/main/Sider"

const HomeMainPage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row p-8">
        <Sider></Sider>
        <div className="flex flex-1 flex-col justify-start">
          <Header></Header>
        </div>
      </div>
    </>
  )
}

export default HomeMainPage
