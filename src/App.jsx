import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Scanner from './components/Scanner';
import Scanned from './components/Scanned';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/scanned-data" element={<Scanned />} />
      </Routes>
    </div>
  );
}

export default App;
