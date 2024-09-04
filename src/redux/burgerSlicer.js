import { createSlice } from "@reduxjs/toolkit";

const burgerSlicer = createSlice({
  name: "burgerSlicer",
  initialState: {
    value: false,
  },
  reducers: {
    setBurgerActive(state, action) {
      state.value = action.payload;
    },
  },
});

export const { setBurgerActive } = burgerSlicer.actions;
export default burgerSlicer.reducer;
