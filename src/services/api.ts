import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.85.196.188:3333/'
});


export default api;