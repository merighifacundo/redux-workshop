import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accounts: [{type:'saving', balance: 100, id: 1},
  {type:'checking', balance: 10, id: 2}]
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    transfer(state, action) {
      const payload = action.payload;
      const from = state.accounts.find(account => account.id === payload.from);
      const to = state.accounts.find(account => account.id === payload.to);
      from.balance = from.balance - payload.amount;
      to.balance = to.balance + payload.amount;
      return state;
    }
  }
})

export const {
  transfer
} = accountSlice.actions

export default accountSlice.reducer