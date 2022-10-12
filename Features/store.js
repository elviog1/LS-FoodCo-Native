import { configureStore } from "@reduxjs/toolkit";
import recipesApi from "./recipesApi";
import usersApi from "./usersAPI";

export const store = configureStore({
    reducer:{
        // [usersApi.reducerPath]: usersApi.reducer,
        [recipesApi.reducerPath]: recipesApi.reducer,
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware({
        inmutableCheck: false,
        serializableCheck: false,

    }).concat(recipesApi.middleware)
})