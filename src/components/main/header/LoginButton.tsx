import { UserOutlined } from "@ant-design/icons"
import { Avatar, Space, Modal, Input, Button, message } from "antd"
import { useState } from "react"
import { useUserLogin } from "@/apis/user"
import { phoneCheck } from "@/utils/handlePhone"

export const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const { loading, run: login } = useUserLogin(phone, password)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = async () => {
    if (!phoneCheck(phone).success) {
      message.error(phoneCheck(phone).msg)
      return
    }

    await login()
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
    setPhone("")
    setPassword("")
  }

  return (
    <>
      <div
        onClick={showModal}
        className="corsur-pointer"
      >
        <Space>
          <Avatar icon={<UserOutlined />} />
          <span className="text-nowrap">未登录</span>
        </Space>
      </div>
      <Modal
        open={isModalOpen}
        classNames={{
          footer: "flex flex-row justify-center",
          content: " flex flex-col justify-center items-center",
        }}
        footer={[
          <Button
            key={"ok"}
            onClick={handleOk}
            type="default"
            loading={loading}
          >
            登录
          </Button>,
          <Button
            key={"cancel"}
            onClick={handleCancel}
            type="default"
          >
            取消
          </Button>,
        ]}
      >
        <div className="w-full flex flex-col p-20 gap-16 items-center">
          <div>Logo</div>
          <div className="flex flex-col gap-8 items-center">
            <Space>
              <h1>手机:</h1>
              <Input
                value={phone}
                type="tel"
                maxLength={11}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Space>
            <Space>
              <h1>密码:</h1>
              <Input
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Space>
          </div>
        </div>
      </Modal>
    </>
  )
}

export default LoginButton
