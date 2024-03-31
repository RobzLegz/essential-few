import { Dispatch } from "@reduxjs/toolkit";
import { loadState } from "../redux/slices/appSlice";
import { storage } from "../lib/mmkv";

const loadStateFromMMKV = (dispatch: Dispatch) => {
  const savedState = storage.getString("redux-state");
  if (savedState) {
    dispatch(loadState(JSON.parse(savedState)));
  }
};

export default loadStateFromMMKV;
