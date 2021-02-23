import React from 'react';
import userPhoto from '../../assets/user.png';
import styles from './user.module.css';

function Users(props) {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  debugger

  return (
    <div>
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
              <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
            </div>
            <div>
              {user.followed
                ? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
                : <button onClick={() => props.follow(user.id)}>Follow</button>}
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
