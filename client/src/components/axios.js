import axios from 'axios';

const instance = axios.create({
  baseURL: 'htt://localhost:5000',
})

export default instance;
