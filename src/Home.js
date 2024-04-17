import React from 'react';
import './App.css'; // Import your CSS file

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Sonos</span> Web Design</h1>
          </div>
          <nav>
            <ul>
              <li className="current"><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="showcase">
        <div className="container">
          <h1>Affordable and Amazing audio</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </section>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our newsletter</h1>
          <form>
            <input type="email" placeholder="Enter email..." />
            <button type="submit" className="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="boxes">
        <div className="container">
          <div className="box">
            <img src="./img/SonosFIVE.jpg" alt="Sonos Five" />
            <h3>Speakers</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          
          <div className="box">
            <img src="./img/SonosBEAM.jpg" alt="Sonos Beam" />
            <h3>Home Theater</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>

          <div className="box">
            <img src="./img/SonosAMP.jpg" alt="Sonos Amp" />
            <h3>Amps</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </section>

      <footer>
        <p>Sonos Web Design, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Home;
