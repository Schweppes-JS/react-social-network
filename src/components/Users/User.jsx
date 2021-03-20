import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/user.png';
import Button from '../common/Button/Button';
import styles from './user.module.css';

const User = ({ user, followingInProgress, unfollowRequest, followRequest }) => {

  const onUnfollow = () => {
    unfollowRequest(user.id);
  }

  const onFollow = () => {
    followRequest(user.id);
  }

  const isDisabled = () => followingInProgress.some(id => id === user.id);

  return (
    <div className={styles.user}>
      <NavLink to={'/profile/' + user.id}>
        <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
      </NavLink>
      {user.followed ?
        <Button onButtonClick={onUnfollow} isDisabled={followingInProgress.some(id => id === user.id)}>Unfollow</Button> :
        <Button onButtonClick={onFollow} isDisabled={followingInProgress.some(id => id === user.id)}>Follow</Button>}
      <p>{user.name}</p>
      <p>{user.status}</p>
      {/* <p>{"user.location.country"}</p>
          <p>{"user.location.city"}</p> */}
    </div>
  )
}

export default User;
