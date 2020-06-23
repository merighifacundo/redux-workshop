import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.count++;
      return state;
    }
  }
})

export const {
  increment
} = counterSlice.actions

export default counterSlice.reducer