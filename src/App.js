import {Route,Routes} from 'react-router-dom'

import NavBar from './components/nav-bar/nav-bar.component'
import Home from './routes/home/home.component';
import Contact from './routes/contact/contact.component';
import About from './routes/about/about.component';
import Schedule from './routes/schedule/schedule.component';
function App() {
  return (
<Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        </Route>
       
      
    </Routes>
  );
}

export default App;
