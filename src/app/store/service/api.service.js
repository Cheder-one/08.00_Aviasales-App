import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://aviasales-test-api.kata.academy',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export const getSearchId = async () => {
  const { data } = await apiService.get('/search', {});
  return data.searchId;
};

export const getFullEndpoint = async (endpoint) => {
  const searchId = await getSearchId();
  return `/${endpoint}?searchId=${searchId}`;
};

export default {
  get(url) {
    return apiService.get(url);
  },
  post(url, data) {
    return apiService.post(url, data);
  },
};
