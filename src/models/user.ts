export interface UserState {
  info: UserInfo
  isLogin: boolean
}

export interface UserInfo {
  id: number
  phone: string
  name: string
  email?: string
  token: string
}
