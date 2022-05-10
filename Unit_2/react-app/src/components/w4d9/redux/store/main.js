// import { createSlice, configureStore } from "@reduxjs/toolkit";

// const userSlice = createSlice({
//   name: "user", //default variable
//   initialState: { username: "", auth: false }, //default variable
//   reducers: { //default variable
//     login(state, action) {
//       state.username = action.payload;
//       state.auth = true;
//     },
//     logout(state) {
//       state.username = "";
//       state.auth = false;
//     },
//   },
// });

// const store = configureStore({
//   reducer: userSlice.reducer,
// });

// export const userActions = userSlice.actions;

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import otherReducer from "./other";

const store = configureStore({ reducer: { user: userReducer, other: otherReducer } });

export default store;
