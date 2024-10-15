import React from 'react';
import "./Post.css"

const Post = ({ postData }) => {
  return (
    <div className="post">
    <h3 className='username'>{postData.username}</h3>
    <img src={postData.imageUrl} alt="post" />
      <p className='caption'><span className='username'>{postData.username}</span>{postData.caption}</p>
      <p className='likes'>{postData.likes} likes</p>
    </div>
  );
};

export default Post;
