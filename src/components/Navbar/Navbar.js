import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar () {
  return (
    <section id="header">
      <a href="/" id="title">Travel Destination</a>
      <Link to={'/'} class="links">Home </Link>
      {/* <Link to={'/city/:id'} class= 'links'> Details</Link> */}

    </section>
  );
}
export default Navbar;
