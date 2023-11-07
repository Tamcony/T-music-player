import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space } from "antd"
import LoginButton from "./LoginButton"

export const UserInfo = () => {
  const isLogin = false

  if (isLogin) {
    return (
      <>
        <div className="corsur-pointer">
          <Space>
            <Avatar icon={<UserOutlined />} />
            <span className="text-nowrap">用户名</span>
          </Space>
        </div>
      </>
    )
  } else {
    return <LoginButton></LoginButton>
  }
}

export default UserInfo
