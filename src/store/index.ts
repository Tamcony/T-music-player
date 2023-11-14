// app/store/index.js
import { configureStore } from "@reduxjs/toolkit"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // 使用本地存储
import userReducer from "./userSclice"

const persistConfig = {
  key: "root", // 存储的键值，可以自定义
  storage, // 指定存储引擎
  whitelist: ["userReducer"], // 指定需要持久化的 reducer（白名单）
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export interface RootState {
  user: ReturnType<typeof userReducer>
  // 其他 reducer 对应的类型
}

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      //关闭redux序列化检测
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
export default store
