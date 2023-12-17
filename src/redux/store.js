import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { filterReducer } from './filterSlice';
import { contactsReducer } from "./contactSlise";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});

