import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "b0268a1b-0ff0-4c3d-814c-4cea80472630"
  }
});

export const usersAPI = {
  getUsers: (curentPage = 1, pageSize = 100) => {

    return instance.get(`users?page=${curentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getProfile: (userId) => {
    return profileAPI.getProfile(userId);
  }
}

export const followersAPI = {
  unfollow: (userId) => {
    return instance.delete(`follow/${userId}`);
  },
  follow: (userId) => {
    return instance.post(`follow/${userId}`);
  }
}

export const authApi = {
  authMe: () => {
    return instance.get(`auth/me`);
  },
  login: (email, password, rememberMe = false, captcha = null) => {
    return instance.post(`auth/login`, {
      email, password, rememberMe, captcha
    });
  },
  logout: () => {
    return instance.delete(`auth/login`);
  }
}

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus: (status) => {
    return instance.put(`profile/status`, { status });
  },
  savePhoto: (file) => {
    let formData = new FormData();
    formData.append('image', file)
    return instance.put(`profile/photo`, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
  },
  saveProfile: (profile) => {
    return instance.put(`profile`, profile);
  }
}

export const securityApi = {
  getCaptchaUrl: () => {
    return instance.get(`security/get-captcha-url`);
  }
}