import "./AccountStatus.css";
import { useSelector } from "react-redux";
import React from "react";

const AccountStatus = () => {
  const accounts = useSelector((state) => state.account);
  return (
    <table class="responstable">
      <tr>
        <th>Account</th>
        <th>Balance</th>
      </tr>

      {accounts.accounts.map((item) => (
        <tr>
          <td>{item.type}</td>
          <td>{item.balance} uds</td>
        </tr>
      ))}
    </table>
  );
};

export default AccountStatus;
