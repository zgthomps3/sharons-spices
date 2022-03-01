import React from 'react'
import { Outlet } from 'react-router-dom'

import AppBar from '../components/AppBar.js'
import SideBar from '../components/SideBar.js'
import Panels from '../components/Panels.js'

class DashBoardPage extends React.Component {
  render () {
    return (
      <div>
        <AppBar />
        <Outlet />
      </div>
    );
  }
}

export default DashBoardPage;