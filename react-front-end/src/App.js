import { Route, Routes } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Contact from "./routes/contact/contact.component";
import About from "./routes/about/about.component";
import Book from "./routes/book/book.component";
import Login from "./routes/auth/login.component"
import Register from "./routes/auth/register.component"
import "./app.styles.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useAppContext } from "./context/app-context";
import { useEffect } from "react";
import NotFound from "./routes/not-found/not-found";
import Checkout from "./routes/checkout/checkout.components";
import Confirmation from "./routes/confirmation/confirmation.components";
import MobileNav from "./components/mobile-nav/mobile-nav";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const { isMainNav } = useAppContext();
  return (
    <>
      <div className="app">
      
        <MobileNav />
        <Routes>
          <Route
            path="/"
            element={isMainNav ? <NavBar /> : <NavBar navType="other" />}
          >
            <Route index element={<Home />} />
            <Route path="book" element={<Book />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="book/checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route
              path="book/checkout/confirmation"
              element={<Confirmation />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
