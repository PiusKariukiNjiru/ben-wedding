import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import WatchLive from './WatchLive/WatchLive';
import Header from './Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch-live" element={<WatchLive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
