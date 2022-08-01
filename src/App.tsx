import React from 'react';
import './App.css';
import { AppProvider } from './context/context';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
