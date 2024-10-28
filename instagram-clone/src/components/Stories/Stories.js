import React from "react";
import './Stories.css'

const Stories = () => {
  const storiesData = [
    { username: "Mac Kahey", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQit6_CRhrqTrzH_A1Mbc6ApFK7UHlAlmn4Pg&s" },
    { username: "kayla Gomez", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdt5agrbg_JjfAbfVvn6YBhtBwqeD74sMAMg&s" },
    { username: "JD", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzxbxbSjIEGjNF1rqzTxJhUF2EsKkRlyY4nA&s" },
    { username: "OG Flock", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLJzo8BarpXTQnDnkyBZuZYYE6Oxq6sKkyA&s" },
    { username: "Vageta Mack", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1rcs_XvkjaUyusP18Mw2Gm0qKenbA411a9Q&s" },
    { username: "Don Trello", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZOBkio-wrTpcqr9ELIxaK-sN4PtmVHKATw&s" },
    { username: "Sega mack", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0D1BTf79SsmH4qhA0b7fDNqAOEr1SpHMBnw&s" },
    { username: "Pam J", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGxMpEedcUxETIp4M0qect1UjyhMRE5mmalg&s" },
    { username: "Sierra Leone", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUzUDaFSvSJo29J51TV0yAO3jmLbGYp_cT3Q&s" },
    // Add more stories here
  ];

  return (
    <div className="stories">
      {storiesData.map((story, index) => (
        <div className="story" key={index}>
          <img src={story.img} alt={`${story.username} story`} />
          <span>{story.username}</span>
        </div>
      ))}
    </div>
  );
};

export default Stories;
