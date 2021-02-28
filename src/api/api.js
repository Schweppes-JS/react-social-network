import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "9490426b-c8f9-470c-a5d0-e71ff9ca62c4"
  }
});

export const usersAPI = {
  getUsers: (curentPage = 1, pageSize = 100) => {
    
    return instance.get(`users?page=${curentPage}&count=${pageSize}`)
      .then(response => response.data);
  },
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`);
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
    return instance.get(`/auth/me`);
  }
}