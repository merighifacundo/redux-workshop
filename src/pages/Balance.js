import "./Balance.css";
import { useSelector, useDispatch } from 'react-redux'
import React from "react";
import {transfer} from '../slices/account';

const BalancePage = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(state => state.account);
  return (
    <div>
      <h1>Your Account</h1>

      <table class="responstable">
        <tr>
          <th>Account</th>
          <th>Balance</th>
        </tr>

        <tr>
          <td>Checking</td>
          <td>{accounts.accounts.find(account => account.type === 'checking').balance} uds</td>
        </tr>

        <tr>
          <td>Saving</td>
          <td>{accounts.accounts.find(account => account.type === 'saving').balance} uds</td>
        </tr>
      </table>

      <div>
        <div>Transfer from</div><select><option>Checking</option><option>Saving</option></select>to <select><option>Checking</option><option>Saving</option></select> the amount: <input type="text"></input><button onClick={() => dispatch(transfer({from: 1, to: 2, amount: 10}))}>Transfer</button>
      </div>
    </div>
  );
};

export default BalancePage;
