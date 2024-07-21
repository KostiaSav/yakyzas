import { createSlice } from "@reduxjs/toolkit";
import { IAccountState } from "../../../typesript/interfaces";


const initialState: IAccountState = {
    data: [],
    isLoading: false,
    error: ''
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        updateBasket(state) {
            state.isLoading = true;
        },

        updateBasketSuccess(state, action) {
            state.isLoading = false;
            state.error = '';
            state.data = [...state.data, action.payload]
        },

        updateBasketError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
})

export const {updateBasket, updateBasketSuccess, updateBasketError} = accountSlice.actions;

export default accountSlice.reducer;