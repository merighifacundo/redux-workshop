import { combineReducers } from 'redux';
import counter  from '../slices/counter';
import account  from '../slices/account';

const rootReducer = combineReducers({
  counter: counter,
  account: account
});

export default rootReducer;