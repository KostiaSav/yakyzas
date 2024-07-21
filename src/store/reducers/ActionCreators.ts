import axios from "axios";
import { AppDispatch } from "../store";
import { IComment, ISushi, IUser } from "../../typesript/interfaces";
import { userSlice } from "./UsersSlice";
import {commentsSlice} from "./CommentsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSushi = createAsyncThunk(
    'sushi/fetchAll',
    async (_, thunkApi) => {
        try { 
            const response = await axios.get<ISushi[]>('http://localhost:3003/sushi');
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue("Не удалось загрузить список товаров")
        }
    }
)

export const fetchUsers = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser[]>('http://localhost:3003/users');
        dispatch(userSlice.actions.usersFetchingSuccess(response.data));
    } catch (error: any) {
        dispatch(userSlice.actions.usersFetchingError(error.message));
    }
}

export const fetchUser = (id: string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.usersFetching());
        const response = await axios.get<IUser>(`http://localhost:3003/users/${id}`);
        dispatch(userSlice.actions.userFetchingSuccess(response.data));
    } catch (error: any) {
        dispatch(userSlice.actions.usersFetchingError(error.message));
    }
}

export const fetchComments = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(commentsSlice.actions.commentsFetching());
        const response = await axios.get<IComment[]>('http://localhost:3003/comments');
        dispatch(commentsSlice.actions.commentsFetchingSuccess(response.data));
    } catch (error: any) {
        dispatch(commentsSlice.actions.commentsFetchingError(error.message));
    }
}