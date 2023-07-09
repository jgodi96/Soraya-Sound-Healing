//import {useState} from 'react'
import { Outlet, Link } from "react-router-dom";
import Logo from "../logo/logo.component";
import "./nav-mobile.styles.scss";
import { useAppContext } from "../../context/app-context";
export const NAV_TYPES_CLASSES = {
  main: "mobile-nav-container",
  other: "other-mobile-nav-container",
};

const NavMobile = ({ navType = "main" }) => {
  const { hideNav } = useAppContext();

  const onClickHandler = () => {
    hideNav();
  };
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
      <Logo></Logo>

      <div className="link-container">
        <Link onClick={onClickHandler} to="/">Home</Link>
        <Link onClick={onClickHandler} to="/book">Book Now</Link>
        <Link onClick={onClickHandler} to="/contact">Contact</Link>
        <Link onClick={onClickHandler} to="/about">About</Link>
      </div>

      <Outlet />
    </>
  );
};

export default NavMobile;
