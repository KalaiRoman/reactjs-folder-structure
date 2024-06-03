import axios from "axios";

const instanceBaseUrl=axios.create({
    baseURL:""
})
axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      console.error('Unauthorized, redirecting to login...');
      window.location = '/login';
    }
    return Promise.reject(error);
  }
);


  export default instanceBaseUrl;