const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filterInput',
  initialState: { filter: '' },
  reducers: {
    filterForContacts(state, action) {
      state.filter = action.payload;

    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterForContacts } = filterSlice.actions;

