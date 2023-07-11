import React from 'react'
import { Link } from 'react-router-dom'
import './register.styles.scss'
const Register = () => {

  const onSubmitHandler = (e) =>{
    e.preventDefault();
    console.log('backend code')
  }

  return (
    <div className="register-page">

    <form className="register-form" onSubmit={onSubmitHandler}>
    <h1>Register</h1>
                <div className="auth-input">
                  <label>Username</label>
                  <input></input>
                </div>

                <div className="auth-input">
                  <label>Email</label>
                  <input></input>
                </div>
                
                
                <div className="auth-input">
                <label>Password</label>
                <input></input>
                </div>

           
  

                <div className="auth-input">
                <label>Confirm Password</label>
                <input></input>
                </div>
                
               

                
                <button className='login-button'>Sign In</button>   
                <Link to='/login' className='login-link'>Login</Link>       
    </form>

</div>
  )
}

export default Register