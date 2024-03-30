import { createSlice } from "@reduxjs/toolkit";

const initialStateFilter = {
  name: "",
};
const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilter,
  reducers: {
    changeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
