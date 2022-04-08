import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './index.css';
import App from './App';
import LoginPage from './pages/LoginPage.js'
import DashBoardPage from './pages/DashBoardPage.js'
import FourOhFourPage from './pages/FourOhFourPage.js'
import Panels from './components/Panels.js'
import ProductCard from './components/ProductCard.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase();
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
		        	<Route path="*" element={<Panels name="View All Products"
		        		content={
		        			<div style={{ display: 'flex', gap: '1rem' }}>
		        				<ProductCard name="Oregano" price="$19.99" image="/placeholder.png" description="Oregano is a really good spice for cooking." />
		        				<ProductCard name="Onion Powder" price="$24.99" image="/placeholder.png" description="Onion powder tastes like onions." />
		        				<ProductCard name="Garlic Powder" price="$22.49" image="/placeholder.png" description="Garlic powder tastes like garlic." />
		        			</div>
		        		}/>
		        	}/>
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

