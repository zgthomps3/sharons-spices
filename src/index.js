import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage.js'
import DashBoardPage from './pages/DashBoardPage.js'
import FourOhFourPage from './pages/FourOhFourPage.js'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<App />} >
        <Route path="dashboard" element={<DashBoardPage />} />
        <Route path="*" element={<FourOhFourPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

