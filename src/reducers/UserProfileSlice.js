import { createSlice } from "@reduxjs/toolkit";
import avatar from "./../assets/cv_img.jpg";

 const UserProfileSlice= createSlice({
    name: 'userProfile',
    initialState:{
        username : "Alisha Bastakoti",
        email :"aelibastakoto68@gmail.com",
        description:"I am a React Developer",
        avatar:avatar
    },
    reducers :{
        updateUser :(state ,action) =>{
            state.username = action.payload.username
            state.email = action.payload.email
            state.description = action.payload.description
        },
        updateAvatar :(state ,action) =>{
            state.avatar = action.payload
        },
       
    }
 }) 

 export const {updateUser,updateAvatar} = UserProfileSlice.actions
 export default UserProfileSlice.reducer;