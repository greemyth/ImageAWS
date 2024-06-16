import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login'; 
import SignUp from './components/signup';
import UploadImage from './components/upload'; 
import SearchByTags from './components/searchByTag';
import SearchByImage from './components/searchByImage';
import RemoveTags from './components/removeTags';
import DeleteImage from './components/deleteImage';
import Navbar from './components/navBar';
import './App.css';

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/upload" element={isLoggedIn ? <UploadImage /> : <Navigate to="/login" />} />
        <Route path="/searchByTags" element={isLoggedIn ? <SearchByTags /> : <Navigate to="/login" />} />
        <Route path="/searchByImage" element={isLoggedIn ? <SearchByImage /> : <Navigate to="/login" />} />
        <Route path="/removeTags" element={isLoggedIn ? <RemoveTags /> : <Navigate to="/login" />} />
        <Route path="/deleteImage" element={isLoggedIn ? <DeleteImage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
