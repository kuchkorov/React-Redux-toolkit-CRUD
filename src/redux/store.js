import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/Users";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});
