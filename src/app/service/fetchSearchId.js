import apiService from './api.service';

const fetchSearchId = async () => {
  try {
    const { data } = await apiService.get('/search', {});
    return data.searchId;
  } catch (error) {
    throw new Error('Не удалось получить searchId');
  }
};

export default fetchSearchId;
