import { Link } from "react-router-dom";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <header className="header">
      <h2>Destinations</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Finland</Link>
          </li>
          <li>
            <Link to="/italy">Italy</Link>
          </li>
          <li>
            <Link to="/brazil">Brazil</Link>
          </li>
          <li>
            <Link to="/Croatia">Croatia</Link>
          </li>
          <li>
            <Link to="/India">India</Link>
          </li>
          <li>
            <Link to="/Ukraine">Ukraine</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
