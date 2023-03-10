import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";

// 1) combine reducers
// 2) redux-thunk middleware is automatically added
// 3) Redux DevTools is automatically added
export const store = configureStore({
    reducer: {
        user: userReducer
    }
})