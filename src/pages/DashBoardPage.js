import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './DashBoardPage.module.css'

import AppBar from '../components/AppBar.js'
import SideBar from '../components/SideBar.js'

class DashBoardPage extends React.Component {
  render () {
    return (
      <div className={styles.PageContainer}>
        <AppBar />
        <SideBar />
        <main className={styles.MainContent}>
          <Outlet />
        </main>
      </div>
    );
  }
}

export default DashBoardPage;