import React from 'react';
import './Profile.css';
import Header from '../../components/Header/Header';
import BottomNav from '../../components/BottomNav/BottomNav';
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar';

const Profile = () => {
  const user = {
    username: "Boya Ndlovu",
    bio: "Traveler | Foodie | Photographer",
    profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdARMXoopM4h1-Z0UvZ_-lQeUr2joWcxkjVg&s",
    followers: 1200,
    following: 300,
    posts: 58
  };

  const posts = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpqCTDqUX6JuC695d8W2NsHm-eWrkH9h4qRA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1piCII-o7bFSiYMGh8OMXZrwwhDpBikHqGA&s",
    // Add more posts
  ];

  return (
    <>
      <Header /> 
      <div className='container'>
        <LeftSidebar className="leftside-bar"/>
        <div className="profile-container">
          <div className="profile-header">
            <img src={user.profilePic} alt="profile-pic" className="profile-pic" />
            <div className="profile-details">
              <h2>{user.username}</h2>
              <p>{user.bio}</p>
              <div className="profile-actions">
                <button className="edit-profile-btn">Edit Profile</button>
                <button className="view-archive-btn">View Archive</button>
              </div>
              <div className="profile-stats">
                <span><strong>{user.posts}</strong> posts</span>
                <span><strong>{user.followers}</strong> followers</span>
                <span><strong>{user.following}</strong> following</span>
              </div>
            </div>
          </div>
          <div className="profile-posts">
            {posts.map((post, index) => (
              <img key={index} src={post} alt={`post-${index}`} className="profile-post" />
            ))}
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default Profile;
