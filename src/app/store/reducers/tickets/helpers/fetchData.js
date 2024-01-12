import ticketsService from '../../../../service/tickets.service';
import { dataReceived } from '../tickets';

const fetchData = async (dispatch, searchId) => {
  try {
    const data = await ticketsService.fetch(searchId);
    dispatch(dataReceived(data));
  } catch (error) {
    if (error?.response?.status === 500) {
      console.warn('Ошибка сервера, продолжаем подключение...', error.message);
    } else {
      throw error;
    }
  }
};

export default fetchData;
