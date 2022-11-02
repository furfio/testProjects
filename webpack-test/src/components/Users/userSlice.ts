// counterSlice.ts 文件

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    firstName: string;
    lastName: string;
    userName: string;
    token: string;
}
const initialState: UserState = {
    firstName: '',
    lastName: '',
    userName: '',
    token: ''
};

// 创建一个 Slice 
export const userSlice = createSlice({
    name: 'user',
    initialState,
    // 定义 reducers 并生成关联的操作
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        login: (state, action: PayloadAction<UserState>) => {
            
        },
        logout: (state) => {
            
        }
    },
});
// 导出加减的方法
export const { login } = userSlice.actions;

// 默认导出
export default userSlice.reducer;
