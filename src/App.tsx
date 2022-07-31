import React from 'react';
import './App.css';
import { AppProvider } from './context/context';
import Home from './pages/home';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './components/routes';

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
