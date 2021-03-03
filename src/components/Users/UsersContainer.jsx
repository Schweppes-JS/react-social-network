import React from 'react';
import { connect } from 'react-redux';
import {
  getUsersSelector,
  getPageSize,
  getTotalUsersCount,
  getCurentPage,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/users-selectors';
import {
  follow,
  unfollow,
  setTotalUsersCount,
  toggleFollowingProgress,
  unfollowRequest,
  followRequest
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import { requestUsers } from '../../redux/users-reducer';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.setCurrentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.requestUsers(page);
  }

  render() {
    return <>
      {this.props.isFetching ?
        <Preloader /> :
        null}
      <Users
        isFetching={this.props.isFetching}
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        curentPage={this.props.curentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        followingInProgress={this.props.followingInProgress}
        unfollowRequest={this.props.unfollowRequest}
        followRequest={this.props.followRequest}
      />
    </>
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    curentPage: getCurentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose (
  connect(mapStateToProps, {
    follow,
    unfollow,
    setTotalUsersCount,
    toggleFollowingProgress,
    requestUsers,
    unfollowRequest,
    followRequest
  })
)(UsersContainer);