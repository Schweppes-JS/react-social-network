import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/user.png';
import styles from './user.module.css';
import { followersAPI } from '../../api/api';

function Users(props) {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={props.isFetching ? styles.usersContainer : null}>
      <div className={styles.pageNumberContainer}>
        {pages.map(page => <span
          onClick={(e) => props.onPageChanged(page)}
          className={`${props.curentPage === page ? styles.selectedPage : ''} ${styles.pageNumber}`}>_{page}
        </span>)}
      </div>
      {
        props.users.map(user => <div key={user.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
              </NavLink>
            </div>
            <div>
              {user.followed ?
                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleFollowingProgress(true, user.id);
                  followersAPI.unfollow(user.id).then(response => {
                    if (response.data.resultCode === 0) {
                      props.unfollow(user.id);
                    };
                    props.toggleFollowingProgress(false, user.id);
                  });
                }}>Unfollow</button> :

                <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                  props.toggleFollowingProgress(true, user.id);
                  followersAPI.follow(user.id).then(response => {
                    if (response.data.resultCode === 0) {
                      props.follow(user.id);
                    };
                    props.toggleFollowingProgress(false, user.id);
                  });
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
        </div>)
      }
    </div>
  )
}

export default Users;
