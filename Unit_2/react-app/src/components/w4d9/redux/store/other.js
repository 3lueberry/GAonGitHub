import { createSlice } from "@reduxjs/toolkit";

const otherSlice = createSlice({
  name: "other",
  initialState: { othername: "" },
  reducers: {
    setOtherName(state, action) {
      state.othername = action.payload;
    },
  },
});

export const otherActions = otherSlice.actions;
export default otherSlice.reducer;
