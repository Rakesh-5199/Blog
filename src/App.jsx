
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import All from './Components/All';
import FullStackPage from "./Components/FullStackpage";
import DataSciencePage from './Components/DataSciencepage';
import CyberSecurityPage from './Components/CyberSecuritypage';
import CareerPage from './Components/CareerPage';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';










function App() {

  
  return (
    <Router>
      <div>
      <header> 
          <nav>
            <ul className='all'>
              <li><Link to="/">All</Link></li>
              <li><Link to="/full-stack-development">Full Stack Development</Link></li>
              <li><Link to="/data-science">Data Science</Link></li>
              <li><Link to="/cyber-security">Cyber Security</Link></li>
              <li><Link to="/career">Career</Link></li>
            </ul>
          </nav>
        </header>
      <Routes>
        <Route exact path="/" element={<All/>} />
        <Route path="/full-stack-development" element={<FullStackPage/>} />
        <Route path="/data-science" element={<DataSciencePage/>} />
        <Route path="/cyber-security" element={<CyberSecurityPage/>} />
        <Route path="/career" element={<CareerPage/>} />

      </Routes>
      <footer className='footer'>
          <p>&copy; 2024 Your Website</p>
        </footer> 
               </div>
    </Router>
  );
}

export default App;
