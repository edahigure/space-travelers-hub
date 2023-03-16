import logo from './logo.svg';
import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import reactLogo from "./logo.png";



function App() {
  return (
    <div className="App">

      <nav className="nav-bar">
        <div className="title-1">
          <img src={reactLogo} alt="react logo" style={{
            resizeMode: 'cover',
            height: 40,
            width: 40,
          }} />
          <div>Space Travelers' Hub</div>
        </div>

        <ul className="list-1">
          <li><NavLink to="/rockets" className={({ isActive }) => (isActive ? "li-active" : "li-item")}
          >Rockets</NavLink></li>
          <li><NavLink to="/missions" className={({ isActive }) => (isActive ? "li-active" : "li-item")}
          >Missions</NavLink></li>
          <li><NavLink to="/profile" className={({ isActive }) => (isActive ? "li-active" : "li-item-profile")}
          >My Profile</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route index element={<Rockets />} />
        <Route path="rockets" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>

    </div>
  );
}

export default App;
