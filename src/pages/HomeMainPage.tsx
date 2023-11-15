import Header from "@/components/main/header/Header"
import Sider from "@/components/main/sider/Sider"
import Body from "@/components/main/body/Body"

const HomeMainPage = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row p-8">
        <Sider></Sider>
        <div className="flex flex-1 flex-col justify-start gap-4">
          <Header></Header>
          <Body></Body>
        </div>
      </div>
    </>
  )
}

export default HomeMainPage
