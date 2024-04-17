import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About'; // Import your AboutPage component
import Home from './Home'; // Import your HomePage component
import Products from './Products'; // Import your ProductsPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Products" component={Products} />
      </Routes>
    </Router>
  );
};

export default App;