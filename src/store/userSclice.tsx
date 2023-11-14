import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { UserState, UserInfo } from "@/models/user"

const initialState: UserState = {
  info: {
    id: 0,
    name: "",
    phone: "",
    email: "",
    token: "",
  },
  isLogin: false,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPhone: (state: UserState, action: PayloadAction<string>) => {
      state.info.phone = action.payload
    },
    setLogin: (state: UserState, action: PayloadAction<UserInfo>) => {
      state.isLogin = true
      state.info = action.payload
    },
    setLogout: (state: UserState) => {
      state.isLogin = false
      state.info = initialState.info
    },
  },
})
// 为每个 case reducer 函数生成 Action creators
export const { setPhone, setLogin, setLogout } = userSlice.actions

export default userSlice.reducer
