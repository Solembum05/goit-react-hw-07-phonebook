const { createSlice } = require('@reduxjs/toolkit');


const initialState = {
  filter: ''
}

const filterSlice = createSlice({
  name: 'filterInput',
  initialState,
  reducers: {
    filterForContacts(state, action) {
      state.filter = action.payload;

    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { filterForContacts } = filterSlice.actions;

