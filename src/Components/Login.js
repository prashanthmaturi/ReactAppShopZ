import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="form">
      <form className='login-form' method='post' action='/login' >
              <h2>Login</h2>
              <input type="email" name="email" placeholder='Enter Email' required/>
              <input type="password" name="password" placeholder='Enter Password' required/>
              <button type="submit" id='app-btn'>Login</button>

        <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
      </form>
    </div>
  );
}