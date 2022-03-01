import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AppBar.module.css'

class AppBar extends React.Component {
  render () {
    return (
      <div className={styles.AppBar}>
        <Link to="/" className={styles.Logo}><img src="/salt-shaker.svg" alt="" /> <span>Sharon's Spices</span></Link>
        <div className={styles.Links}>
          <Link to="/" className={styles.Link}>Sign out</Link>
          <Link to="/" className={styles.Icon}><img src="/mail.svg" /></Link>
          <Link to="/" className={styles.Icon}><img src="/notification.svg" /></Link>
          <Link to="/" className={styles.Profile}>ZT</Link>
          <Link to="/" className={styles.Icon}><img src="/more.svg" /></Link>
        </div>
      </div>
    );
  }
}

export default AppBar;