import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './SideBar.module.css'

class SideBar extends React.Component {
  render () {
    return (
      <div className={styles.SideBar}>
        <p>sidebar</p>
      </div>
    );
  }
}

export default SideBar;