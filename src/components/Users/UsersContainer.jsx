import React from 'react';
import { connect } from 'react-redux';
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
import { getUsers } from '../../redux/users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.setCurrentPage, this.props.pageSize);
  }

  onPageChanged = (page) => {
    this.props.getUsers(page);
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
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    curentPage: state.usersPage.curentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

export default compose (
  connect(mapStateToProps, {
    follow,
    unfollow,
    setTotalUsersCount,
    toggleFollowingProgress,
    getUsers,
    unfollowRequest,
    followRequest
  }),
  withAuthRedirect,
)(UsersContainer);