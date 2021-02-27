import { usersAPI, followersAPI } from '../api/api';

const FOLLOW = 'FOLLOWT';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURENT_PAGE = 'SET_CURENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initailState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  curentPage: 1,
  isFetching: false,
  followingInProgress: []
}

const usersReducer = (state = initailState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user;
        })
      };
    case SET_USERS:
      return { ...state, users: action.users }
    case SET_CURENT_PAGE:
      return { ...state, curentPage: action.curentPage }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (curentPage) => ({ type: SET_CURENT_PAGE, curentPage });
export const setTotalUsersCount = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (curentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(curentPage, pageSize).then(data => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    });
  }
}

export const unfollowRequest = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followersAPI.unfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(unfollow(userId));
      };
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export const followRequest = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    followersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(follow(userId));
      };
      dispatch(toggleFollowingProgress(false, userId));
    });
  }
}

export default usersReducer;