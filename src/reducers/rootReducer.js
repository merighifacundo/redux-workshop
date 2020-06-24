import { combineReducers } from 'redux';
import account  from '../slices/account';

const rootReducer = combineReducers({
  account: account
});

export default rootReducer;