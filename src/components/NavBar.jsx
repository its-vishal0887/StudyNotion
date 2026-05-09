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
        <ul className="text-richblack-100 flex gap-x-6">
          <li >
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li >
            <NavLink to="/About">About</NavLink>
          </li>
          <li >
            <NavLink to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-4">
        {!isLoggedIn && (
          <NavLink to="/login">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 cursor-pointer">Login</button>
          </NavLink>
        )}
        {!isLoggedIn && (
          <NavLink to="/Signup">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 cursor-pointer">Signup</button>
          </NavLink>
        )}
        {isLoggedIn && (
          <button onClick={() => setIsLoggedIn(false)} className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 cursor-pointer">Logout</button>
        )}
        {isLoggedIn && (
          <NavLink to="/Dashboard">
            <button className="bg-richblack-800 text-richblack-100 py-[8px] px-[12px] rounded-[8px] border border-richblack-700 cursor-pointer">Dashboard</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default NavBar;
