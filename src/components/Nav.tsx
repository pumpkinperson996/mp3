import { Link } from 'react-router-dom';

const Nav = () => (
  <nav id="leftsidebar">
    <ul id="menulist">
      <li className="menuitem"><Link to="/">Home</Link></li>
      <li className="menuitem"><Link to="/education">Education</Link></li>
      <li className="menuitem"><Link to="/experience">Experience</Link></li>
      <li className="menuitem"><Link to="/projects">Projects</Link></li>
      <li className="menuitem"><Link to="/certifications">Certifications</Link></li>
      <li className="menuitem"><Link to="/references">References</Link></li>
    </ul>
  </nav>
);

export default Nav;
