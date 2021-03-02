import { usersAPI, profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initailState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
    { id: 3, message: 'Bla-bla?', likesCount: 12 },
    { id: 4, message: 'React?', likesCount: 12 }
  ],
  newPostText: 'it camasutra',
  profile: null,
  status: ""
}

const profileReducer = (state = initailState, action) => {
  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.newPost, likesCount: 0} ]
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  }
}

export const addPostActionCreator = (newPost) => ({ type: ADD_POST, newPost });
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });
export const setStatus = status => ({type: SET_STATUS, status});

export const getUserProfile = userId => {
  return (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
      dispatch(setUserProfile(response.data));
    });
  };
};
export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      dispatch(setStatus(response.data));
    })
  }
}
export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;