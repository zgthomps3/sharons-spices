import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage.js'
import DashBoardPage from './pages/DashBoardPage.js'
import FourOhFourPage from './pages/FourOhFourPage.js'
import Panels from './components/Panels.js'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<App />} >
        <Route path="dashboard" element={<DashBoardPage />} >
          <Route path="vendors" element={<Panels name="Vendors" content={<p>This is the panel content</p>} />} />
          <Route path="users" element={<Panels name="Users" content={<p>This is the panel content</p>} />} />
          <Route path="categories" element={<Panels name="Categories" content={<p>This is the panel content</p>} />} />
          <Route path="products" element={<Panels name="Product Listings" content={<p>This is the panel content</p>} />} />
          <Route path="orders" element={<Panels name="Orders" content={<p>This is the panel content</p>} />} />
          <Route path="reviews" element={<Panels name="Reviews" content={<p>This is the panel content</p>} />} />
          <Route path="brands" element={<Panels name="Brands" content={<p>This is the panel content</p>} />} />
          <Route path="auth" element={<Panels name="Authentication" content={<p>This is the panel content</p>} />} />
          <Route path="icons" element={<Panels name="Icons" content={<p>This is the panel content</p>} />} />
          <Route path="mail" element={<Panels name="Mail" content={<p>This is the panel content</p>} />} />
          <Route path="notifs" element={<Panels name="Notifications" content={<p>This is the panel content</p>} />} />
          <Route path="profile" element={<Panels name="Profile" content={<p>This is the panel content</p>} />} />
        </Route>
        <Route path="*" element={<FourOhFourPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

