import type { MenuProps } from "antd"
import { Avatar, Space, Modal, Input, Button, Divider, message, Dropdown, Menu } from "antd"
import { UserOutlined, SettingOutlined, PoweroffOutlined } from "@ant-design/icons"
import { useState } from "react"
import { useUserLogin, useUserDetail, useUserLogout } from "@/apis/user"
import { phoneCheck } from "@/utils/handlePhone"

export const LoginButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [phone, setPhone] = useState("18296778316")
  const [password, setPassword] = useState("TANGYICONG231")
  const [isLogin, setIsLogin] = useState(false)
  const { loading, fetchData: login, data } = useUserLogin()
  const { fetchData: fetchUserDetail, data: userDetail } = useUserDetail()
  const { fetchData: logout } = useUserLogout()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const getUserDetail = async (id?: number) => {
    await fetchUserDetail(id || 0)
  }
  const handleLogout = async () => {
    await logout()
    setIsLogin(false)
    message.success("退出登录成功")
    window.location.reload()
  }
  const userDropdownItem: MenuProps["items"] = [
    {
      key: "0",
      icon: <SettingOutlined />,
      label: <a>个人信息设置</a>,
    },
    {
      key: "10",
      icon: <UserOutlined />,
      label: (
        <div className="flex justify-between">
          <p>我的会员</p>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "20",
      icon: <PoweroffOutlined />,
      label: <a onClick={handleLogout}>退出登录</a>,
    },
  ]
  /**
   * 登录
   */
  const handleOk = async () => {
    if (!phoneCheck(phone).success) {
      message.error(phoneCheck(phone).msg)
      return
    }
    const data = await login(phone, password)
    getUserDetail(data.account.id)

    message.success("登录成功")
    setIsModalOpen(false)
    setIsLogin(true)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
    setPhone("")
    setPassword("")
  }

  if (isLogin) {
    return (
      <>
        <Dropdown
          overlayClassName="w-80"
          trigger={["click"]}
          dropdownRender={() => (
            <div className="cursor-default bg-#fff px-4 py-6 shadow-lg rounded-md flex flex-col items-center gap-4">
              <Space
                direction="horizontal"
                size="large"
              >
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-6">{userDetail?.listenSongs}</span>
                  <span className="text-#A9ADB6 text-3">听歌数量</span>
                </div>
                <Divider
                  className="border-1 h-6"
                  type="vertical"
                />
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-6">{userDetail?.profile.followeds}</span>
                  <span className="text-#A9ADB6 text-3">粉丝</span>
                </div>
                <Divider
                  className="border-1 h-6"
                  type="vertical"
                />
                <div className="flex flex-col items-center gap-2">
                  <span className="font-bold text-6">{userDetail?.profile.follows}</span>
                  <span className="text-#A9ADB6 text-3">关注</span>
                </div>
              </Space>
              <Menu
                items={userDropdownItem}
                className="w-full rounded-none! shadow-none!"
              />
            </div>
          )}
        >
          <div className="cursor-pointer!">
            <Space>
              <Avatar
                src={data?.profile.avatarUrl}
                icon={<UserOutlined />}
                className="cursor-pointer"
              />
              <span className="text-nowrap cursor-pointer">{data?.profile.nickname || "未登录"}</span>
            </Space>
          </div>
        </Dropdown>
      </>
    )
  } else {
    return (
      <>
        <div
          onClick={showModal}
          className="cursor-pointer!"
        >
          <Space>
            <Avatar
              src={data?.profile.avatarUrl}
              icon={<UserOutlined />}
              className="cursor-pointer"
            />
            <span className="text-nowrap cursor-pointer">未登录</span>
          </Space>
        </div>

        <Modal
          open={isModalOpen}
          classNames={{
            footer: "flex flex-row justify-center",
            content: "flex flex-col justify-center items-center",
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
}

export default LoginButton
