import axios from "axios";
import { getUserToken } from "./helpers";

const axiosInstance = axios.create({
  baseURL: "/",
  headers: {
    "user-request": "isYes",
  },
});

axiosInstance.interceptors.request.use(
  function (config) {
    config.headers.token = config.headers.token
      ? config.headers.token
      : getUserToken();
    return config;
  },
  function (error) {
    return Errorhandler(error);
  }
);

const Errorhandler = (error: any) => {
  return error;
};

export { axiosInstance, Errorhandler };
