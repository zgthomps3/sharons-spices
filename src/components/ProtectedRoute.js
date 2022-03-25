import React from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from "../index.js";
import { onAuthStateChanged } from 'firebase/auth';
import LoginPage from '../pages/LoginPage.js'

class ProtectedRoute extends React.Component {
	constructor(props){
		super(props);
		this.setUser = this.setUser.bind(this);
		this.state = { };
		
		onAuthStateChanged(auth, this.setUser);
	}
	
	setUser(newUser) {
		this.setState ({ user: newUser });
	}
	
	render() {
		if (this.state.user)
			return ( <Outlet /> );
		else
			return ( <LoginPage /> );
	}
}

export default ProtectedRoute;