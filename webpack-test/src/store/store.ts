// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Pages/Test/Counter/counterSlice";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

