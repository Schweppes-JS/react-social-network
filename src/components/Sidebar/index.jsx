import React from 'react';
import { NavLink } from "react-router-dom";

import style from './Sidebar.module.css';

import Friend from './Friend'

function Sidebar({ friends }) {
  console.log(friends)
  return (
    <div className={`${style.item} ${style.closestFriendsContainer}`}>
      <NavLink to="/friends" activeClassName={style.activeLink}>Friends</NavLink>
      <div className={style.closestFriends}>
        {friends.map((friend) => <Friend name={friend} />)}
      </div>
    </div>
  )
}

export default Sidebar;
