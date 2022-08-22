//import {useState} from 'react'
import { Outlet,Link } from "react-router-dom"
import Logo from '../logo/logo.component'
import './nav-bar.styles.scss'

const NavBar = () => {

    // const [navBarScroll,setNavBarScroll] = useState(false)

    // const changeBackground = () => {

    //     if(window.scrollY >= 1 ){
    //         setNavBarScroll(true)
    //     }
    //     else{
    //         setNavBarScroll(false);
    //     }
    // }
    // window.addEventListener('scroll',changeBackground)
    return (
        <>
        <div className='nav-container'>

            <Logo></Logo>

            <div className="link-container">
            <Link to='/'>Home</Link>
            <Link to='/schedule'>Schedule</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            </div>


        </div>
        <Outlet/>
        </>
        

    )
}

export default NavBar;