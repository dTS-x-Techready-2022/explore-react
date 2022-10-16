import { configureStore } from "@reduxjs/toolkit";
import activeMenuReducer from "./features/activeMenuSlice";
import timerReducer from "./features/timerSlice";


export const store = configureStore({
    reducer: {
        activeMenu: activeMenuReducer,
        timer: timerReducer,
    }
});