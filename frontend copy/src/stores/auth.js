import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    access: null,
    refresh: null,
    permissions: {
      is_fulltimer: false,
      is_manager: false,
      is_payroll: false,
      is_admin: false,
    },
    user: null,
    time: 0,
  },
  reducers: {
    setAuth(state, action) {
      console.log("token refreshed", new Date());
      state.access = action.payload.access;
      state.refresh = action.payload.refresh;
      if (action.payload.permissions) state.permissions = action.payload.permissions;
      if (action.payload.user) state.user = action.payload.user;
      state.time = Date.now();
    },
    clearAuth(state) {
      state.access = null;
      state.refresh = null;
      state.permissions = {
        is_fulltimer: false,
        is_manager: false,
        is_payroll: false,
        is_admin: false,
      };
      state.user = null;
      state.time = 0;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
