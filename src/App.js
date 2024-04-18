// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/products">Products</Link></li>
                </ul>

                <hr />
              <Routes>
                <Route exact path="/home" component={<Home />} />
                <Route path="/about" component={<About />} />
                <Route path="/products" component={<Products />} />
              </Routes>
            </div>
        </Router>
    );
}

export default App;
