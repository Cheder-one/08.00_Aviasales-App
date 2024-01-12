const filterTicketsByStops = (items) => (stopsCount) => {
  return items.filter(({ segments }) => {
    const ticketsStops = segments.map(({ stops }) => stops.length);
    const stopsSum = ticketsStops.reduce((a, b) => a + b, 0);
    return stopsSum === Number(stopsCount);
  });
};

const getFilteredByTransfers = (items, selectStops) => {
  if (selectStops.length === 0) return [];
  const getTicketsByStops = filterTicketsByStops(items);

  if (selectStops.includes('all')) {
    return items;
  }
  return selectStops.map((item) => getTicketsByStops(item)).flat();
};

export default getFilteredByTransfers;
