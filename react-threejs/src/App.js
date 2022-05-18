import './App.css';
import { Home, Box } from './element';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';

function App(props) {
  console.log(props);

  return (
    <Router>
      <Routes>
        <Route index exactly element={<Home />} />
        <Route path='/box' exactly element={<Box />} />
      </Routes>
      <div className='menu-list'>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'active' : undefined)}>Home</NavLink>
          </li>
          <li>
            <NavLink
              to="/box" 
              className={({ isActive }) => (isActive ? 'active' : undefined)}>Box</NavLink></li>
        </ul>
      </div>
    </Router>
  );
}

export default App;
