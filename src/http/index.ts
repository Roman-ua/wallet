import axios from 'axios';

const URL = process.env.NEXT_PUBLIC_MAIN_URL;

const $API = axios.create({
  baseURL: `${URL}`,
  headers: {
    mode: 'no-cors',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
});

export default $API;
