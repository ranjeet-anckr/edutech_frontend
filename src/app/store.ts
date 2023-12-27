import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/auth/authSlice";
import courseSlice from "../features/course/courseSlice";
import userSlice from "../features/auth/userSlice";

const store = configureStore({
  reducer: {
    auth: loginSlice,
    course: courseSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
