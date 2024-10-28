import React from "react";
import {
  FaHome,
  FaSearch,
  FaCompass,
  FaHeart,
  FaUser,
  FaPlusSquare,
} from "react-icons/fa"; // Adding the FaUser icon
import "./LeftSideBar.css";
import { Link } from "react-router-dom";

const LeftSidebar = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <ul>
          <Link to="/home">
            <li>
              <FaHome /> Home
            </li>
          </Link>
          <li>
            <FaSearch /> Search
          </li>
          <Link to="/explore">
            <li>
              <FaCompass /> Explore
            </li>
          </Link>
          <li>
            <FaHeart /> Notifications
          </li>
          <li>
            <FaPlusSquare /> Create
          </li>
          <Link to="/profile">
            <li>
              <FaUser /> Profile
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebar;
