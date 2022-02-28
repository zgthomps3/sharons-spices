import React from 'react'
import { Outlet } from 'react-router-dom'

class DashBoardPage extends React.Component {
  render () {
    return (
      <div>
        <p>This is the dashboard page</p>
        <Outlet />
      </div>
    );
  }
}

export default DashBoardPage;