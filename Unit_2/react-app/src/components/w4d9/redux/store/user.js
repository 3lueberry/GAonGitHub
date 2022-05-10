import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "", auth: false },
  reducers: {
    login(state, action) {
      state.username = action.payload;
      state.auth = true;
    },
    logout(state) {
      state.username = "";
      state.auth = false;
    },
  },
});

// const store = configureStore({
//   reducer: userSlice.reducer,
// });

export const userActions = userSlice.actions;

// export default store;
export default userSlice.reducer;
