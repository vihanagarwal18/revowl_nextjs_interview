// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import {logIn,logOut,toggleModerator} from "@/redux/features/auth-slice";

// // we cant call our redux function durectly we have to use are dispatch hook 
// import {useDispatch} from "react-redux";
// import { AppDispatch } from "@/redux/store";
// import {useAppSelector} from "@/redux/store";


// export default function Login(){
//     const [username,SetUsername]=useState("");

//     const dispatch = useDispatch<AppDispatch>();
//     const isAuth =useAppSelector((state)=> state.authReducer.value.isAuth);
//     const onClickLogin=()=>{
//         dispatch(logIn(username));
//     };
//     const onClickToggle=()=>{
//         dispatch(toggleModerator());
//     };
//     const onClickLogout=()=>{
//         dispatch(logOut());
//     };

//     return (
//         <div style={{ 
//             padding: '20px', 
//             textAlign: 'center', 
//             backgroundColor: '#FFFDD0',
//             width: '100%',
//             minHeight: '80vh',
//             display: 'flex', 
//             flexDirection: 'column', // Stack children vertically
//             justifyContent: 'center', // Center vertically
//             alignItems: 'center' // Center horizontally
//         }}>
//             {/* <input type="text" onChange={(e)=>SetUsername(e.target.value)}/> */}
//             <input 
//                 type="text" 
//                 onChange={(e) => SetUsername(e.target.value)}
//                 style={{
//                     background: 'cream',
//                     color: 'black',
//                     border: 'none',
//                     outline: 'none',
//                     padding: '10px',
//                     borderRadius: '5px',
//                     // Glow effect on focus
//                     boxShadow: '0 0 10px rgba(256, 67, 136, 16)',
//                     // Transition for smooth glow effect
//                     transition: 'box-shadow 0.5s ease-in-out',
//                 }}
//                 onFocus={(e) => e.target.style.boxShadow = '0 0 15px rgba(81, 203, 238, 1)'} // Increase glow when focused
//                 onBlur={(e) => e.target.style.boxShadow = '0 0 5px rgba(81, 203, 238, 1)'} // Revert glow when not focused
//             />
//             <br></br>
//             {/* <button onClick={onClickLogin}>Log In</button> */}
//             <div style={{ border: '4px solid red', borderRadius: '7px', padding: '10px', display: 'inline-block' }}>
//                 <button onClick={onClickLogin} style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                     Log In
//                 </button>
//             </div>
//             <br></br>
//             <div style={{ border: '4px solid red', borderRadius: '7px', padding: '10px', display: 'inline-block' }}>
//                 <button onClick={onClickLogout} style={{ padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
//                     Log Out
//                 </button>
//             </div>
//             {/* <button onClick={onClickLogout}>Logout</button> */}
//             <br></br>

//             {isAuth && (
//                 <button onClick ={onClickToggle}>Toggle Moderator status</button>
//             )}
//             <Link href="/">Click here to go back to home page</Link>
//         </div>
        
//     )
// }