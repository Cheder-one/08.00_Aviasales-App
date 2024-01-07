import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default {
  get(url, params) {
    return apiService.get(url, params);
  },
  post(url, data) {
    return apiService.post(url, data);
  },
};
