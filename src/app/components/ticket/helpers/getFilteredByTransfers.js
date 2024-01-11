const checkIsInclude = (filters) => (incArr) => {
  return filters.every((item) => incArr.includes(item));
};

const getFilteredByStops = (items) => (stopsCount) => {
  return items.filter(({ segments }) => {
    const ticketsStops = segments.map(({ stops }) => stops.length);
    const stopsSum = ticketsStops.reduce((a, b) => a + b, 0);
    return stopsSum === Number(stopsCount);
  });
};

const getFilteredByTransfers = (items, stops) => {
  console.log(stops);
  const filteredByStops = getFilteredByStops(items);
  const isStopsInclude = checkIsInclude(stops);
  if (stops.length === 0) return items;

  if (isStopsInclude(['none'])) {
    return filteredByStops('0');
  }
};

export default getFilteredByTransfers;
