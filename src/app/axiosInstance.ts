import axios from "axios";
import { getDataFromLocalStorage } from "../utils/helper";
import { STRING } from "../constants";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4100/api/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getDataFromLocalStorage(STRING.ACCESS_TOKEN);
    if (token) {
      config.headers[STRING.AUTHORIZATION] = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: any) => {
    return response;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
