import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space } from "antd"

export const UserInfo = () => {
  return (
    <>
      <Space>
        <Avatar icon={<UserOutlined />} />
        <span>用户名</span>
      </Space>
    </>
  )
}

export default UserInfo
