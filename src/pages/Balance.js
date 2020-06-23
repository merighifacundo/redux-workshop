import "./Balance.css";
import React from "react";
import TransferForm from '../components/TransferForm';
import AccountStatus from '../components/AccountStatus';
const BalancePage = () => {
  
  
  return (
    <div>
      <h1>Welcome: Facundo Merighi</h1>

      <AccountStatus></AccountStatus>

      <TransferForm></TransferForm>
    </div>
  );
};

export default BalancePage;
