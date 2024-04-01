import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
// import mmkvMiddleware from "../middlewares/mmkvMiddleware";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: [],
  // middleware: [mmkvMiddleware],
});

export default store;
