import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  userData: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {
    UserSignIn: (state, action) => {
      state.user = action.payload;
    },
    UserSignOut: (state) => {
      state.user = initialState.user;
      state.userData = initialState.userData;
    },
    UserAllData: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export default userSlice.reducer;
export const { UserSignIn, UserSignOut, UserAllData } = userSlice.actions;
