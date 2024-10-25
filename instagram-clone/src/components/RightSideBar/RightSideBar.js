import React from 'react';
import "./RightSideBar.css"
const RightSidebar = ({ className }) => {
  const suggestions = [
    { username: 'user3', profilePicture: 'https://via.placeholder.com/40' },
    { username: 'user4', profilePicture: 'https://via.placeholder.com/40' },
    { username: 'user5', profilePicture: 'https://via.placeholder.com/40' },
    { username: 'user6', profilePicture: 'https://via.placeholder.com/40' },
    { username: 'user7', profilePicture: 'https://via.placeholder.com/40' },
    { username: 'user8', profilePicture: 'https://via.placeholder.com/40' },
    // Add more suggestions with their profile picture URLs
  ];

  return (
    <div className={className}>
      <h4>Suggested for you</h4>
      {suggestions.map((suggestion, index) => (
        <div key={index} className="suggestion">
          <img 
            src={suggestion.profilePicture} 
            alt={`${suggestion.username}'s profile`} 
            className="profile-picture"
          />
          <p>{suggestion.username}</p>
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
};

export default RightSidebar;
