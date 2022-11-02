import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Project from './pages/Project';
import { ScrollToTop } from 'react-router-scroll-to-top';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/projects/:index/*' element={<Project />}></Route>




      </Routes>
    </Router >
  );
}

export default App;
