import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISushi, ISushiState } from "../../typesript/interfaces";
import { fetchSushi } from "./ActionCreators";


const initialState: ISushiState = {
    data: [],
    isLoading: false,
    error: ''
}

export const sushiSlice = createSlice({
    name: "sushi",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSushi.fulfilled, (state: ISushiState, action: PayloadAction<ISushi[]>) => {
                state.isLoading = false;
                state.error = '';
                state.data = action.payload
            })

            .addCase(fetchSushi.pending, (state: ISushiState) => {
                state.isLoading = true;
            })

            .addCase(fetchSushi.rejected, (state: ISushiState, action: PayloadAction<unknown,string>) => {
                state.isLoading = false;
                state.error = (action.payload as string) ?? 'Unknown error';
            });
    }
})

export default sushiSlice.reducer;