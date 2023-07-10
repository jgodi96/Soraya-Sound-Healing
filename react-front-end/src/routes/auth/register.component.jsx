import React from 'react'
import { Link } from 'react-router-dom'
import './register.styles.scss'
const Register = () => {
  return (
    <div className="register-page">

    <form className="register-form">
        <label>Username</label>
        <input></input>
        <label>Password</label>
        <input></input>
        <label>Phone</label>
        <input></input>
        <label>Email</label>
        <input></input>
        <button>Submit</button>        
    </form>
    <Link to='/login' className='login-link'>Login</Link>

</div>
  )
}

export default Register