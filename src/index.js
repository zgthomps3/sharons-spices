import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage.js'
import DashBoardPage from './pages/DashBoardPage.js'
import FourOhFourPage from './pages/FourOhFourPage.js'
import Panels from './components/Panels.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAp91rHZCuditAMUgKRff5ezTe8cA3q26k",
  authDomain: "storefront-445bf.firebaseapp.com",
  databaseURL: "https://storefront-445bf-default-rtdb.firebaseio.com",
  projectId: "storefront-445bf",
  storageBucket: "storefront-445bf.appspot.com",
  messagingSenderId: "803238398469",
  appId: "1:803238398469:web:74c847274b8b0eb22f6a6c"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);



ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="*" element={<App />} >
      	<Route element={<ProtectedRoute />} >
		      <Route path="dashboard" element={<DashBoardPage />} >
		        <Route path="vendors" element={<Panels name="Vendors" content={<p>This is the panel content</p>} />} />
		        <Route path="users" element={<Panels name="Users" content={<p>This is the panel content</p>} />} />
		        <Route path="categories" element={<Panels name="Categories" content={<p>This is the panel content</p>} />} />
		        <Route path="products" element={<Outlet />} >
		        	<Route path="add" element={<Panels name="Add New Product" content={<p>This is the panel content</p>} />} />
		        	<Route path="edit" element={<Panels name="Edit Product" content={<p>This is the panel content</p>} />} />
		        	<Route path="*" element={<Panels name="View All Products" content={<p>This is the panel content</p>} />} />
		        </Route>
		        <Route path="orders" element={<Panels name="Orders" content={<p>This is the panel content</p>} />} />
		        <Route path="reviews" element={<Panels name="Reviews" content={<p>This is the panel content</p>} />} />
		        <Route path="brands" element={<Panels name="Brands" content={<p>This is the panel content</p>} />} />
		        <Route path="auth" element={<Panels name="Authentication" content={<p>This is the panel content</p>} />} />
		        <Route path="icons" element={<Panels name="Icons" content={<p>This is the panel content</p>} />} />
		        <Route path="mail" element={<Panels name="Mail" content={<p>This is the panel content</p>} />} />
		        <Route path="notifs" element={<Panels name="Notifications" content={<p>This is the panel content</p>} />} />
		        <Route path="profile" element={<Panels name="Profile" content={<p>This is the panel content</p>} />} />
		      </Route>
        </Route>
        <Route path="*" element={<FourOhFourPage />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

