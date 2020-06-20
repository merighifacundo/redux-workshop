import React from 'react';
import {Provider} from 'react-redux';
import './App.css';
import ActionVisualizer from './components/ActionVisualizer'
import store from './store/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ActionVisualizer></ActionVisualizer>
    </div>
    </Provider>
  );
}

export default App;
