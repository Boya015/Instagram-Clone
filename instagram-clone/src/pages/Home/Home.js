import React from 'react'
import Header from '../../components/Header/Header';
import Feed from '../../components/Feed/Feed';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Home.css';
import LeftSidebar from '../../components/LeftSideBar/LeftSideBar';
import RightSidebar from '../../components/RightSideBar/RightSideBar';

const Home = () => {
  return (
    <div className='homepage'>
      <Header />
      <div className='container'>
      <LeftSidebar className="leftside-bar"/>
      <Feed />
      <RightSidebar className="rightside-bar"/>
      <BottomNav className="Bottom-nav" />
      </div>
      
    </div>
  )
}

export default Home
