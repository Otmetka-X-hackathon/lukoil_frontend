import React from 'react';

import './App.css';
import AppRouter from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
