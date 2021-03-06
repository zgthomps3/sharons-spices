import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'
import { auth } from '../index.js';
import { signOut } from "firebase/auth";

class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.SideBar}>
        <div className={styles.SideBarSection}>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/dashboard.svg" alt="" /><span>Dashboard Home</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/dashboard/vendors" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/seller.svg" alt="" /><span>Vendors</span>
          </NavLink>
          <NavLink to="/dashboard/users" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/users.svg" alt="" /><span>Users</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/dashboard/categories" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/categories.svg" alt="" /><span>Categories</span>
          </NavLink>
          <NavLink to="/dashboard/products" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/salt-shaker.svg" alt="" /><span>Products</span>
          </NavLink>
          <div className={styles.SideBarSubSection}>
          	<NavLink to="/dashboard/products/all" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            	<img src="/eye.svg" alt="" /><span>View All Products</span>
          	</NavLink>
          	<NavLink to="/dashboard/products/add" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            	<img src="/add.svg" alt="" /><span>Add New Product</span>
          	</NavLink>
          </div>
          <NavLink to="/dashboard/orders" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/shopping-cart.svg" alt="" /><span>Orders</span>
          </NavLink>
          <NavLink to="/dashboard/reviews" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/speech-bubble.svg" alt="" /><span>Reviews</span>
          </NavLink>
          <NavLink to="/dashboard/brands" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/creative-market-brand.svg" alt="" /><span>Brands</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/dashboard/auth" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/user-authentication.svg" alt="" /><span>Authentication</span>
          </NavLink>
          <NavLink to="/dashboard/icons" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/photo.svg" alt="" /><span>Icons</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/dashboard/mail" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/mail.svg" alt="" /><span>Mail</span>
          </NavLink>
          <NavLink to="/dashboard/notifs" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/notification.svg" alt="" /><span>Notifications</span>
          </NavLink>
          <NavLink to="/dashboard/profile" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/profile.svg" alt="" /><span>Profile</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav} onClick={() => { signOut(auth); } } >
            <img src="/left-arrow.svg" alt="" /><span>Sign out</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SideBar;