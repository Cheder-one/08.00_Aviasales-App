import apiService, { getFullEndpoint } from './api.service';

const ticketsService = {
  fetch: async () => {
    const endpoint = await getFullEndpoint('tickets');
    const { data } = await apiService.get(endpoint, {});
    return data.tickets;
  },
};

export default ticketsService;
