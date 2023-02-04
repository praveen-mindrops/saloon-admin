import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Users/UsersSlice";
import logger from "redux-logger";

function saveToLocalStoreage(state) {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("persistState", serialState);
  } catch (e) {
    console.warn(e);
  }
}
function loadToLoaclStorage() {
  try {
    const serialState = localStorage.getItem("persistState");
    if (serialState === undefined) return undefined;
    return JSON.parse(serialState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState: loadToLoaclStorage(),
});
store.subscribe(() => saveToLocalStoreage(store.getState()));
export default store;
