import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Report from './pages/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/report" element={<Report />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </Router>
  );
}

export default App;
