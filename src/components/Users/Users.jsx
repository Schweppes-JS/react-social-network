import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';
import styles from './user.module.css';

function Users({curentPage, onPageChanged, isFetching, totalItemsCount, pageSize, followingInProgress, unfollowRequest, followRequest, ...props}) {
  return (
    <div className={isFetching ? styles.usersContainerNone : styles.usersContainer}>
      <Pagination
        curentPage={curentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />
      <div className={styles.usersWarapper}>
        {props.users.map(user => <User
                                    key={user.id}
                                    user={user}
                                    followingInProgress={followingInProgress}
                                    unfollowRequest={unfollowRequest}
                                    followRequest={followRequest}/>)}
      </div>
    </div>
  )
}

export default Users;
