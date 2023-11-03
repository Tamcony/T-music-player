import { Button } from "antd"
import { LeftOutlined } from "@ant-design/icons"

export const BackButton = () => {
  return (
    <>
      <Button className="w-6 h-full flex items-center justify-center p-0">
        <LeftOutlined />
      </Button>
    </>
  )
}

export default BackButton
