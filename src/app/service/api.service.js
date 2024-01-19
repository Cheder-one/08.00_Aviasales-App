import axios from 'axios';

const BASE_URL = 'https://aviasales-test-api.kata.academy';

const apiService = axios.create({
  baseURL: BASE_URL,
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
