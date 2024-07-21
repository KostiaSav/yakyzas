import { combineReducers, configureStore } from "@reduxjs/toolkit";
import commentsReducer from './reducers/CommentsSlice'
import { userAPI } from "../services/UserService";
import { sushiAPI } from "../services/SushiService";
import { categoriesAPI } from "../services/CategoriesService";
import { commentsAPI } from "../services/CommentsService";
import accountReducer from "./reducers/Account/AccountSlice";

const rootReducer = combineReducers({
    [sushiAPI.reducerPath]: sushiAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [categoriesAPI.reducerPath]: categoriesAPI.reducer,
    [commentsAPI.reducerPath]: commentsAPI.reducer,
    accountReducer,
    commentsReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(
                userAPI.middleware, 
                sushiAPI.middleware,
                categoriesAPI.middleware,
                commentsAPI.middleware
            )
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
