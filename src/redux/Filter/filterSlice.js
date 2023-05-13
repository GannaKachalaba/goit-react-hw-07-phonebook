import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'contacts',
    initialState: {
        filter: '',
    },
  reducers: {
    choiceFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { choiceFilter } = filterSlice.actions;
export default filterSlice.reducer;
