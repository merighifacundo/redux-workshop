import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import BalancePage from './pages/Balance'
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BalancePage></BalancePage>
    </div>
    </Provider>
  );
}

export default App;
