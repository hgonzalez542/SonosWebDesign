import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../App.css'; // Import your CSS file

const Products = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div id="branding">
            <h1><span className="highlight">Sonos</span> Web Design</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/About">About</Link></li>
              <li className="current"><Link to="/Products">Products</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="newsletter">
        <div className="container">
          <h1>Subscribe to our newsletter</h1>
          <form>
            <input type="email" placeholder="Enter email..." />
            <button type="submit" className="button_1">Subscribe</button>
          </form>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <article id="main-col">
            <h1 className="page-title">Our Products</h1>
            <ul id="services">
              <li>
                <h3>Webside Design</h3>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                <p>Pricing: $350-400</p>
              </li>
              <li>
                <h3>Webside Maintenance</h3>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                <p>Pricing: $250 per month</p>
              </li>
              <li>
                <h3>Webside Hosting</h3>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                <p>Pricing: $25 per month</p>
              </li>
            </ul>
          </article>

          <aside id="sidebar">
            <div className="dark">
              <h3>Get a Quote</h3>
              <form className="quote">
                <div>
                  <label>Name</label><br />
                  <input type="text" placeholder="Name" />
                </div>

                <div>
                  <label>Email</label><br />
                  <input type="text" placeholder="Name" />
                </div>

                <div>
                  <label>Message</label><br />
                  <textarea placeholder="Message"></textarea>
                </div>
                <button className="button_1" type="submit">Send</button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      <footer>
        <p>Sonos Web Design, Copyright &copy; 2024</p>
      </footer>
    </div>
  );
};

export default Products;
