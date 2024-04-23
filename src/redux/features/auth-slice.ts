// in slice file we keep all the variables which we will be suing as we are applying redux in auth so auth-slice

import {createSlice, PayloadAction}  from '@reduxjs/toolkit';

type InititalState={
    value:AuthState;
}

type AuthState={
    isAuth:boolean;
    username: string;
    uid:string;
    isModerator:boolean;
} 
const initialState={
    value:{
        isAuth:false,
        username:"",
        uid:"",
        isModerator:false,
    } as AuthState,
} as InititalState;

export const auth=createSlice({
    name:"auth",
    initialState,
    reducers:{
        logOut:() =>{
            return initialState;
        },
        logIn:(state,action:PayloadAction<string>) =>{
            return {
                value:{
                    isAuth:true,
                    username:action.payload,
                    uid: "fajdskfava",
                    isModerator:false,
                }
            }
        },

        toggleModerator:(state) => {
            state.value.isModerator =!state.value.isModerator;
        },


    }
});

export const {logIn,logOut ,toggleModerator}=auth.actions;
export default auth.reducer;