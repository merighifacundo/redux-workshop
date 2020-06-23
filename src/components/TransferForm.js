import React, { useState } from 'react';
import './TransferForm.css';
import { useSelector, useDispatch } from 'react-redux'
import {transfer} from '../slices/account';

const TransferForm = () => {
  const [hasError, setHasError] = useState(false);
  const [accountFrom, setAccountFrom] = useState();
  const [accountTo, setAccountTo] = useState();
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.account);
  const doTransfer = (from, to, amount) => {
    if (!from || !to || !amount) {
      setHasError(true);
      return;
    }
    setHasError(false);
    dispatch(transfer({from: from, to: to, amount: amount}));
  }
  return (
    <div>
      <div>
        <span>Transfer from</span>
        <select onChange={(event) => setAccountFrom(parseInt(event.target.value))}>{accounts.accounts.map((item) => (<option value={item.id}>{item.type}</option>))}</select>
        <span>to</span> 
        <select onChange={(event) => setAccountTo(parseInt(event.target.value))}>{accounts.accounts.map((item) => (<option value={item.id}>{item.type}</option>))}</select> 
        <span>the amount: </span>
        <input type="text" onChange={(event) => setAmount(parseFloat(event.target.value))}></input>
        <button onClick={() => doTransfer(accountFrom, accountTo, amount) }>Transfer</button>
      </div>
      <div>{ (hasError) ? "The form needs to be filled" : "" }</div>
    </div>
  );
}

export default TransferForm;
