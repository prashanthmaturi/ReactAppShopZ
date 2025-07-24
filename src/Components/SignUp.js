import React from 'react';
import { Link } from 'react-router-dom';
 export default function SignUp() {
   return (
     <div className="form">
       <form className='signup-form' method='post'>
          <h2>Sign Up</h2>
              <input type="email" name="email" placeholder='Enter Email' required/>
              <input type="password" name="password" placeholder='Enter Password' required/>
              <button type="submit" id='app-btn'>Sign Up</button>

        <p>Already have an account? <Link to="/login">Login</Link></p>

       </form>
     </div>
   );
 }