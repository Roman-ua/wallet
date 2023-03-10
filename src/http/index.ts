import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_VERCEL_URL;

const $API = axios.create({
  baseURL: `${URL}`
});

export default $API;
