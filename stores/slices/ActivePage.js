
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "value "
};

export const ActivePage = createSlice({
  name: "ActivePage",
  initialState,
  reducers: {
    Active: (state, action) => {
      state.value  = action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  Active
} = ActivePage.actions;

export default ActivePage.reducer;
