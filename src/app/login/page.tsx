"use client"
import Login from "./log-in";
import {useAppSelector} from "@/redux/store";

export default function Home(){

    // const username =useSelector((state)=> state.authReducer.value.username)
    const username =useAppSelector((state)=> state.authReducer.value.username);
    const isModerator =useAppSelector((state)=> state.authReducer.value.isModerator);
    return (
        <main>
            <Login />

            <h1>Username :{username}</h1>
            {isModerator && <h1> This User is a moderator and this line wont be displayed for non mod</h1>}
        </main>
    );
}