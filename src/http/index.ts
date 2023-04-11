import axios from 'axios';

const URL = process.env.VERCEL_URL;

const $API = axios.create({
  baseURL: `${URL}`
});

export default $API;
