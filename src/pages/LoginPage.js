import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import styles from './LoginPage.module.css'

class LoginPage extends React.Component {
  render () {
    const submitForm = (e) => {
      e.preventDefault();
      window.location = '/dashboard';
    }
    
    return (
      <div className={styles.LoginContainer}>
        <div>
          <h1>Welcome to Sharon's Spices.</h1>
          <p>At Sharon's Spices., we guarantee the highest quality spices to make your cooking painless, easy, and fun.</p>
          <p>Log in today to access all the services we have to offer.</p>
        </div>
        <div>
          <form className={styles.LoginForm} onSubmit={submitForm}>
            <h2>Sign in:</h2>
            
            <div className={styles.LoginFormField}>
              <label for="email">E-mail address:</label>
              <input type="email" placeholder="name@example.com" id="email" name="email" required />
            </div>
            
            <div className={styles.LoginFormField}>
              <label for="password">Password:</label>
              <input type="password" placeholder="Enter your password..." id="password" name="password" required />
            </div>
            
            <button type="submit">Log in</button>
          </form>
          
          <Link to="/forgot-password">Forgot your password?</Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;