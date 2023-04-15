import axios from 'axios';
import {getFromLocalStorage} from "@/utils/localStorage";

const URL = process.env.NEXT_PUBLIC_URL;

const $API = axios.create({
  baseURL: `${URL}`
});

$API.interceptors.request.use((config) => {
  if (getFromLocalStorage('token')) {
    const configRequest = config;
    configRequest.headers.Authorization = `Bearer ${getFromLocalStorage('token')}`;
    return configRequest;
  }

  return config;
});


export default $API;
