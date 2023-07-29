import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link className="nav" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav" to="/blogs">
              Blog
            </Link>
          </li>
          <li>
            <Link className="nav" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
