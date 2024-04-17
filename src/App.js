import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Home" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
      </Routes>
    </Router>
  );
};

export default App;
