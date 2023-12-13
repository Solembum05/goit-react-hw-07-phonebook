import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
const initialState = { contactsInfo: [] };

const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contactsInfo.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    removeContact(state, action) {
      const index = state.contactsInfo.findIndex(
        contact => contact.id === action.payload
      );
      state.contactsInfo.splice(index, 1);
    },
  },
});

export const { addContact, removeContact } = contactsSlise.actions;
export const contactsReducer = contactsSlise.reducer;
