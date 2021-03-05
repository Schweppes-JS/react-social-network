import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import styles from './user.module.css';

function Users({curentPage, onPageChanged, isFetching, totalUsersCount, pageSize, followingInProgress, unfollowRequest, followRequest, ...props}) {
  return (
    <div className={isFetching ? styles.usersContainer : null}>
      <Pagination
        curentPage={curentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
      {props.users.map(user => <User
                                  key={user.id}
                                  user={user}
                                  followingInProgress={followingInProgress}
                                  unfollowRequest={unfollowRequest}
                                  followRequest={followRequest}/>)}
    </div>
  )
}

export default Users;
