"use client"

// you cant access stuff which is inside server component so we use client component

import {store } from "./store";
import { Provider} from "react-redux";

export function ReduxProvider({children}:{children : React.ReactNode}){
    return <Provider store={store}>{children}</Provider>
}