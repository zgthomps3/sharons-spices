import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'

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
          <NavLink to="/vendors" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/seller.svg" alt="" /><span>Vendors</span>
          </NavLink>
          <NavLink to="/users" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/users.svg" alt="" /><span>Users</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/categories" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/categories.svg" alt="" /><span>Categories</span>
          </NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/salt-shaker.svg" alt="" /><span>Products</span>
          </NavLink>
          <NavLink to="/orders" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/shopping-cart.svg" alt="" /><span>Orders</span>
          </NavLink>
          <NavLink to="/reviews" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/speech-bubble.svg" alt="" /><span>Reviews</span>
          </NavLink>
          <NavLink to="/brands" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/creative-market-brand.svg" alt="" /><span>Brands</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/auth" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/user-authentication.svg" alt="" /><span>Authentication</span>
          </NavLink>
          <NavLink to="/icons" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/photo.svg" alt="" /><span>Icons</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/mail" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/mail.svg" alt="" /><span>Mail</span>
          </NavLink>
          <NavLink to="/notifs" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/notification.svg" alt="" /><span>Notifications</span>
          </NavLink>
          <NavLink to="/profile" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/profile.svg" alt="" /><span>Profile</span>
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            <img src="/left-arrow.svg" alt="" /><span>Sign out</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SideBar;