import { Route, Routes } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar.component";
import Home from "./routes/home/home.component";
import Contact from "./routes/contact/contact.component";
import About from "./routes/about/about.component";
import Book from "./routes/book/book.component";
import './app.styles.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  return (
   <>
     {AOS.init()}
  
      <div className="app">
      
      <Routes>
      
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="book" element={<Book />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
       
      </Routes>
      </div>
      </>
   
  );
};

export default App;
