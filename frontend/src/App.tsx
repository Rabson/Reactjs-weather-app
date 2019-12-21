import React from 'react';
import { Provider } from "react-redux";
import Home from './components/home';
import './App.css';
import store from "./store/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
