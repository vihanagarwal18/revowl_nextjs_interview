import {configureStore} from '@reduxjs/toolkit'
import authReducer from "./features/auth-slice";
import { TypedUseSelectorHook,useSelector } from 'react-redux';
export const store=configureStore({
    reducer:{ //is a function that takes in action and previous state of application and make changes to this state and return value to new state
        authReducer,
    },
});

export type RootState =ReturnType<typeof store.getState>;
export type AppDispatch =ReturnType<typeof store.dispatch>;


export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector;