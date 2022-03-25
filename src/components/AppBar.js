import React from 'react'
import { Link } from 'react-router-dom'
import styles from './AppBar.module.css'
import { getAuth, signOut } from "firebase/auth";

class AppBar extends React.Component {
	signOut() {
		
	}
	
  render () {
    return (
      <div className={styles.AppBar}>
        <Link to="/dashboard" className={styles.Logo}><img src="/salt-shaker.svg" alt="" /> <span>Sharon's Spices</span></Link>
        <div className={styles.Links}>
          <Link to="/" className={styles.Link}>Sign out</Link>
          <Link to="/dashboard/mail" className={styles.Icon}><img src="/mail.svg" alt="" /></Link>
          <Link to="/dashboard/notifs" className={styles.Icon}><img src="/notification.svg" alt="" /></Link>
          <Link to="/dashboard/profile" className={styles.Profile}>ZT</Link>
          <Link to="/dashboard/more" className={styles.Icon}><img src="/more.svg" alt="" /></Link>
        </div>
      </div>
    );
  }
}

export default AppBar;