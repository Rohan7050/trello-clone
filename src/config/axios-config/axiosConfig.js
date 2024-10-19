import axios from "axios";
import { tokenRepo } from "../../cache/db";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  responseType: "json",
});

apiClient.interceptors.request.use(
  async function (config) {
    const appToken = await tokenRepo.appToken.get(1);
    let header = {
      "content-type": config.headers.get("content-type")
        ? config.headers.get("content-type")
        : "application/json",
    };

    const token = appToken;

    if (token) {
      header = {
        ...header,
        Authorization: `Bearer ${token.token}`,
      };
    }
    if (config.skipHeader) {
      config.headers = {};
    } else {
      config.headers = header;
    }

    return config;
  },
  function (error) {
    console.error(error);
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);
export default apiClient;
