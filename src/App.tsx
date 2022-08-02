import React from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './routes';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
