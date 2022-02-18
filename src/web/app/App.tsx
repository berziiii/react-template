import React from 'react';

import { Routes, Route, Link } from 'react-router-dom';

const Home = () => <h1> Home Page </h1>;

const About = () => <h1> About Page </h1>;

const App = () => {
  return (
    <div className="App">
      <header>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
