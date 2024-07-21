import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../typesript/interfaces";

const initialState: IUserState = {
    data: [],
    isLoading: false,
    error: ''
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        usersFetching(state) {
            state.isLoading = true
        },

        usersFetchingSuccess(state, action: PayloadAction<IUser[]>) {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        
        userFetchingSuccess(state, action: PayloadAction<IUser>) {
            state.isLoading = false;
            state.error = '';
            state.data = [action.payload];
        },

        usersFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload
        },

    }
})

export default userSlice.reducer;