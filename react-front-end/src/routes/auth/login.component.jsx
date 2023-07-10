import React from 'react'
import { Link } from 'react-router-dom'
import './login.styles.scss'
const Login = () => {
  return (
    <div className="login-page">

            <form className="login-form">
                <label>Username</label>
                <input></input>
                <label>Password</label>
                <input></input>
                
                <button>Submit</button>        
            </form>
            <Link to='/register' className='register-link'>Register</Link>
       
    </div>
  )
}

export default Login