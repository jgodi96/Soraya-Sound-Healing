import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import "./mobile-nav.styles.scss";
import NavMobile from "./nav-moblie";
import { useAppContext } from "../../context/app-context";
import ReactDom from "react-dom";

const MobileNav = () => {
  const { showNav, hideNav, showMobileNav } = useAppContext();

  const [initialNav, setInitialNav] = useState(false);
  const closeHandler = () => {
    hideNav();
    setInitialNav(true);
  };
  const openHandler = () => {
    showNav();
    setInitialNav(true);
  };

  return ReactDom.createPortal(
    <div className="topbar">
      {showMobileNav ? (
        <IoCloseSharp className="button-close" onClick={closeHandler} />
      ) : (
        <GiHamburgerMenu className="button-hamburger" onClick={openHandler} />
      )}
      <div
        className={`mobile-nav-container ${!showMobileNav && "close-nav"} ${
          !initialNav && "close"
        }`}
      >
        <NavMobile />
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default MobileNav;
