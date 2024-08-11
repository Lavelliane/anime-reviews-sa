import axios from 'axios';

const baseApi = axios.create({
  baseURL: 'http://localhost:1337/api',
});

export default baseApi;