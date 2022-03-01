import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'

class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.SideBar}>
        <div className={styles.SideBarSection}>
          <NavLink to="/dashboard" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            Dashboard
          </NavLink>
        </div>
        <div className={styles.SideBarSection}>
          <NavLink to="/" className={({isActive}) => isActive ? styles.SideBarNavActive : styles.SideBarNav}>
            Test
          </NavLink>
        </div>
      </div>
    );
  }
}

export default SideBar;