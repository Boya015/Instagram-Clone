import React from 'react';
import { FaHome, FaSearch, FaCompass, FaHeart } from 'react-icons/fa'; // Example icons
import "./LeftSideBar.css"
const LeftSidebar = ({ className }) => {
  return (
    <div className={className}>
      <nav>
        <ul>
          <li><FaHome /> Home</li>
          <li><FaSearch /> Search</li>
          <li><FaCompass /> Explore</li>
          <li><FaHeart /> Notifications</li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default LeftSidebar;
