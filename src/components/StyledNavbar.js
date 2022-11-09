import { NavLink } from "react-router-dom";
import "../styles/StyledNavbar.css";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiFillFileText,
} from "react-icons/ai";

const StyledNavbar = () => {
  return (
    <nav className="navbar-container">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <AiOutlineHome  /> Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <AiOutlineUser  /> About
      </NavLink>
      <NavLink
        to="/projects"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <AiOutlineFundProjectionScreen  />
        Projects
      </NavLink>
      <NavLink
        to="/resume"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        <AiFillFileText  /> Resume
      </NavLink>
      {/* <NavLink
        to='/blogs'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
      Blogs
      </NavLink> */}
    </nav>
  );
};
export default StyledNavbar;
