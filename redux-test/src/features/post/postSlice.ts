import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

interface IPost{
    auther: string,
    article: string
}

const initialState: IPost[] = [
    {auther: 'Tom', article: 'hi I am adsasdasdasdasdasdasdasdasda'},
    {auther: 'Jack', article: 'hi I am adsasdasdasdasdasdasdasdasda'}
]


export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<IPost>) => {
            console.log(action.payload);
            state.push(action.payload);
        },
    },
});

export const selectPost = (state: RootState) => state.post;

export const { add } = postSlice.actions;

export default postSlice.reducer;