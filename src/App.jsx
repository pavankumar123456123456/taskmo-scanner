import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Scanner from './components/Scanner';
import Scanned from './components/Scanned';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { PrivateRoute2 } from './PrivateRoute/PrivateRoute2';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/scanner" replace />} />
        </Route>
        <Route path="/login" element={<PrivateRoute2 />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/scanner" element={<PrivateRoute />}>
          <Route path="/scanner" element={<Scanner />} />
        </Route>
        <Route path="/scanned-data" element={<PrivateRoute />}>
          <Route path="/scanned-data" element={<Scanned />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
