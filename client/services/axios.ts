import { baseUrl } from "../config/config";
import axios, { AxiosRequestConfig } from "axios";

export default function Axios(request: AxiosRequestConfig) {
  axios.defaults.baseURL = baseUrl;
  let { data } = request;

  return axios({
    url: request.url,
    timeout: 60000,
    method: request.method ? request.method : "GET",
    data: data,
    responseType: request.responseType ? request.responseType : "json",
    withCredentials: true
  }).then(
    res => {
      return res.data;
    },
    error => {
        const { status } = error.response ? error.response : error;
        console.log(
            new Date() + ", API Error " + status + " +++++:",
            error.code + ": " + error.message,
            error.config
        );
      return;
    }
  );
}