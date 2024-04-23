"use client";
import { useState } from "react";
import {logIn,logOut,toggleModerator} from "@/redux/features/auth-slice";

// we cant call our redux function durectly we have to use are dispatch hook 
import {useDispatch} from "react-redux";
import { AppDispatch } from "@/redux/store";
import {useAppSelector} from "@/redux/store";


export default function Login(){
    const [username,SetUsername]=useState("");


    const dispatch = useDispatch<AppDispatch>();
    const isAuth =useAppSelector((state)=> state.authReducer.value.isAuth);

    const onClickLogin=()=>{
        dispatch(logIn(username));
    };
    const onClickToggle=()=>{
        dispatch(toggleModerator());
    };
    const onClickLogout=()=>{
        dispatch(logOut());
    };

    return (
        <div>
            <input type="text" onChange={(e)=>SetUsername(e.target.value)}/>
            <br></br>
            <button onClick={onClickLogin}>Log In</button>
            <br></br>
            <button onClick={onClickLogout}>Logout</button>
            <br></br>

            {isAuth && (
                <button onClick ={onClickToggle}>Toggle Moderator status</button>
            )}
        </div>
    )
}