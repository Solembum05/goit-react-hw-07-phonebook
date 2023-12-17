import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import * as  getAllContacts from 'services/getContacts';

const initialState = {
  contactsInfo: [],
  isLoading: false,
  error: null,
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const contacts = await getAllContacts.fetchContacts();
      return contacts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone, id}, { rejectWithValue }) => {
    try {
      const contacts = await getAllContacts.postNewContact({ name, phone, id });

      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const  contacts = await getAllContacts.removeContact(contactId);
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



const handlePending = state => {
      state.isLoading = true;
      state.error = null;
    }

const handleFulfielld = (state, {payload}) => {
      state.isLoading = false;
  state.contactsInfo = payload;
}
const handleRejected = (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    }


const contactsSlise = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFulfielld)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contactsInfo.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.contactsInfo.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contactsInfo.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleRejected)
  })
export const contactsReducer = contactsSlise.reducer;
