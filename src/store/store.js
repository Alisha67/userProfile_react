import { configureStore } from "@reduxjs/toolkit";
import UserProfileSlice from "../reducers/UserProfileSlice";
import UserPostSlice from "../reducers/UserPostReducer";
 export const store = configureStore({
    reducer:{
        userProfile :UserProfileSlice,
        userPost : UserPostSlice
    },
 })