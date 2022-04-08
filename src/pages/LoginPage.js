import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../index.js'
import { signInWithEmailAndPassword } from "firebase/auth"
import ToastMessage from '../components/ToastMessage.js'
import '../App.css'
import styles from './LoginPage.module.css'

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { errorCount: 0 };
		this.removeError = this.removeError.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}
	
	removeError() {
		this.setState({
			errorCount: this.state.errorCount+1,
			errorMessage: null
		});
	}
	
	submitForm (e) {
    e.preventDefault();
    
    const form = document.forms['login-form'];
    const email = form['email'].value;
    const password = form['password'].value;
    
    signInWithEmailAndPassword(auth, email, password)
    	.then((userCredential) => {
    		window.location = '/dashboard/products/all';
    	})
    	.catch((error) => {
    		const errorMessage = error.message;
    		this.setState({
    			errorCount: this.state.errorCount+1,
    			errorMessage: ("Error logging in: " + errorMessage)
    		});
    	});
  };
	
  render () {
    return (
    	<div>
		    <div className={styles.LoginContainer}>
		      <div>
		      	<img src="/salt-shaker.svg" alt="" className={styles.Logo} />
		        <h1>Welcome to Sharon's Spices.</h1>
		        <p>At Sharon's Spices, we guarantee the highest quality spices to make your cooking painless, easy, and fun.</p>
		        <p>Log in today to access all the services we have to offer.</p>
		      </div>
		      <div>
		        <form name="login-form" className={styles.LoginForm} onSubmit={this.submitForm}>
		          <h2>Sign in:</h2>
		          
		          <div className={styles.LoginFormField}>
		            <label htmlFor="email">E-mail address:</label>
		            <input type="email" placeholder="name@example.com" id="email" name="email" required />
		          </div>
		          
		          <div className={styles.LoginFormField}>
		            <label htmlFor="password">Password:</label>
		            <input type="password" placeholder="Enter your password..." id="password" name="password" required />
		          </div>
		          
		          <button type="submit">Log in</button>
		        </form>
		        
		        <Link to="/forgot-password">Forgot your password?</Link>
		      </div>
		    </div>
		    {
				 	this.state.errorMessage && <ToastMessage content={this.state.errorMessage} timeoutFunction={this.removeError} />
				}
		   </div>
    );
  }
}

export default LoginPage;