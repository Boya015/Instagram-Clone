import React from 'react';
import Post from '../Post/Post';


const Feed = () => {
  const posts = [
    {
      id: 1,
      username: 'user1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPTZdVhettUOgL4gulcQCozdbr2gvz4nOcQ&s',
      caption: 'Enjoying the sunset!',
      likes: 200,
    },
    {
      id: 2,
      username: 'user2',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6yyshGlRrDQcsYAexu6oW6QhlIs0aGjEqxw&s',
      caption: 'At the beach!',
      likes: 150,
    },
    {
      id: 3,
      username: 'user3',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfL6RAv8oqwYSg2l6I4lm0tW-spfLdmgQKSg&s',
      caption: 'At the club!',
      likes: 150,
    },
    // More posts can be added here
  ];
  
  return (
    <div className='feed'>
      {posts.map((post) => (
        <Post key={post.id} postData={post} />
      ))}
    </div>
  )
}

export default Feed
