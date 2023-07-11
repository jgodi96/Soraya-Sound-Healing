import React from 'react'
import { Link } from 'react-router-dom'
import './login.styles.scss'
const Login = () => {


  const onSubmitHandler = (e) =>{
    e.preventDefault();
    console.log('backend code')
  }
  return (
    <div className="login-page">

            <form className="login-form" onSubmit={onSubmitHandler}>
           
                <h1>Login</h1>
                <div className="auth-input">
                  <label>Username</label>
                  <input></input>
                </div>
                
                <div className="auth-input">
                <label>Password</label>
                <input></input>
                </div>
                <button className='login-button'>Sign In</button>   
                <Link to='/register' className='register-link'>Create an Account</Link>     
            </form>
            
       
    </div>
  )
}

export default Login