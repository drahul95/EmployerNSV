import axios from "axios";
import env from "../env";
import { store } from "../../Redux/store";

const { API_BASE_URL } = env;

const deviceId: string | null = "758760233"; //localStorage.getItem("deviceId");

let axiosClient = axios.create({
  baseURL:
    API_BASE_URL || "https://jieapis.development.jobsineducation.net/webb",
  responseType: "json",
  timeout: 20 * 1000, // 20 seconds,
  headers: {
    deviceid: deviceId,
    accept: "*/*",
    token: store.getState().common.token,
  },
});

export default axiosClient;
