import { Middleware } from "@reduxjs/toolkit";
import { storage } from "../lib/mmkv";

export const mmkvMiddleware: Middleware = (storeApi) => (next) => (action) => {
  const result = next(action);

  storage.setString("redux-state", JSON.stringify(storeApi.getState().app));
  return result;
};

export default mmkvMiddleware;
