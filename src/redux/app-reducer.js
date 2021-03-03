import { authApi } from '../api/api';
import { stopSubmit } from 'redux-form';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true
      }
    default:
      return state;
  }
}
export const initializedSuccess = () => ({ type: SET_USER_DATA });

export const initializeApp = () => {
  return (dispatch) => {
    dispatch(getAuthUserData);
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authApi.login(email, password, rememberMe).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
      }
      else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something is wrong';
        dispatch(stopSubmit("login", {_error: message }));
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    authApi.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  }
}

export default authReducer;