import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from "../index.js";
import { onAuthStateChanged } from 'firebase/auth';

class FourOhFourPage extends React.Component {
	constructor(props) {
		super(props);
		this.setUser = this.setUser.bind(this);
		this.state = { };
		
		onAuthStateChanged(auth, this.setUser);
	}
	
	setUser(newUser) {
		this.setState ({ user: newUser });
	}
	
  render () {
    return (
      <div>
      	<img src="/spilled-salt.jpg" alt="" />
        <h2>404 Error</h2>
        <p>It looks like someone messed up... we couldn't find the page you were looking for.</p>
        {
        	this.state.user
        		? <Link to="/dashboard">Go back home</Link>
        		: <Link to="/">Go back home</Link>
        }
      </div>
    );
  }
}

export default FourOhFourPage;