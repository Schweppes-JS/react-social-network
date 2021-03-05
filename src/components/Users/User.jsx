import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/user.png';
import styles from './user.module.css';

const User = ({user, followingInProgress, unfollowRequest, followRequest}) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
          </NavLink>
        </div>
        <div>
          {user.followed ?
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              unfollowRequest(user.id);
            }}>Unfollow</button> :

            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
              followRequest(user.id);
            }}>Follow</button>}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  )
}

export default User;
