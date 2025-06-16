import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/TodoSlice"

 

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        todo:todoReducer,

    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch