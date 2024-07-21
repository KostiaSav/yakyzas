import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IComment, ICommentsState } from "../../typesript/interfaces";


const initialState: ICommentsState = {
    data: [],
    isLoading: false,
    error: ''
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        commentsFetching(state) {
            state.isLoading = true;
        },

        commentsFetchingSuccess(state, action: PayloadAction<IComment[]>) {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload
        },

        commentsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default commentsSlice.reducer