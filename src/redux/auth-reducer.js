import { authApi, securityApi } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null // if null, then captch is not required
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } });
export const getCaptchaUrlSuccess = captchaUrl => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });

export const getAuthUserData = () => {
  return async (dispatch) => {
    const response = await authApi.authMe();
    if (response.data.resultCode === 0) {
      const { id, login, email } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
    }
  }
}

export const login = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const response = await authApi.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
    }
    else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
      }
      let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Something is wrong';
      dispatch(stopSubmit("login", { _error: message }));
    }
  }
}

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const response = await securityApi.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
  }
}

export const logout = () => {
  return async (dispatch) => {
    const response = await authApi.logout();
    if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
    }
  }
}

export default authReducer;