import { Outlet,Link } from "react-router-dom"
import Logo from '../logo/logo.component'
import './nav-bar.styles.scss'

const NavBar = () => {
    return (
        <>
        <div className="nav-container">

            <Logo></Logo>

            <div className="link-container">
            <Link to= '/'>Home</Link>
            <Link to= '/schedule'>Schedule</Link>
            <Link to= '/contact'>Contact</Link>
            <Link to= '/about'>About</Link>
            </div>


        </div>
        <Outlet/>
        </>
        

    )
}

export default NavBar;