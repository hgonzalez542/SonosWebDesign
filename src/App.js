// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
          <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route element={NotFound} />
              </Routes>
            </div>
        </Router>
    );
}

export default App;
