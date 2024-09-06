import { createSlice } from "@reduxjs/toolkit";

const searchSlicer = createSlice({
  name: "searchSlicer",
  initialState: {
    value: ''
  },
  reducers: {
    setSearchRedux(state, actions) {
      state.value = actions.payload;
    },
  },
});

export const { setSearchRedux } = searchSlicer.actions;
export default searchSlicer.reducer;
