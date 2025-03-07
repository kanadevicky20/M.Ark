import { Route, BrowserRouter as Router, Routes, } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Mainscreen from './Mainscreen';
import ServicePage from './ServicePage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';
import AboutPage from './AboutPage';
import AdminPage from './AdminPage';
import Navbar from './navbar';

function App() {
  return (
    <div className="App">
      
      <Router>
       <Navbar/>
        <Routes>
          <Route path='*' element={<Mainscreen/>}></Route>
          <Route path='/service' element={<ServicePage/>}></Route>
          {/* <Route path='/projects' element={<ProjectPage/>}></Route> */}
          <Route path='/contact' element={<ContactPage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/admin' element={<AdminPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
