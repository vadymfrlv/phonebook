import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    filterContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

//actions
export const { filterContacts } = filterSlice.actions;

//reducer
export const filterReducer = filterSlice.reducer;

//selectors
export const getFilter = state => state.filter.filter;
