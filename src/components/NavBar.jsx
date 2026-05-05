import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
// import { toast } from 'react-hot-toast';

const NavBar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;

  return (
    <div className="flex justify-between items-center w-11/12 max-w-290 py-4 mx-auto">
      <Link to="/">
        <img src={Logo} alt="logo" width={160} height={32} loading="lazy" />
      </Link>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">About</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex ml-5 mr-3 gap-3">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button>Login</button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/Signup">
            <button>Signup</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        )}
        {isLoggedIn && (
          <NavLink to="/Dashboard">
            <button>Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
