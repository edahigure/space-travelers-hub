import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import MyMissions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import './styling/Nav.css';
import './styling/MyProfile.css';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/missions" element={<MyMissions />} />
      <Route path="/myprofile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
