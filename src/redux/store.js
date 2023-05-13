import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from 'redux/Contacts/contactsApi';
import {filterSlice} from 'redux/Filter/filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
