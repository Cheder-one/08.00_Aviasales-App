import { addIdEachItem } from '../utils';

import apiService from './api.service';

const ticketsService = {
  fetch: async (searchId) => {
    const { data } = await apiService.get('/tickets', {
      params: { searchId },
    });
    const tickets = addIdEachItem(data.tickets);
    // console.log(data);
    return { ...data, tickets };
  },
};

export default ticketsService;
