const calcTotalDuration = (segments) => {
  return segments.reduce((acc, el) => acc + el.duration, 0);
};

const getSortedTickets = (items, filter) => {
  switch (filter) {
    case 'price':
      return [...items].sort((a, b) => a.price - b.price);
    case 'duration':
      return [...items].sort((a, b) => {
        const durA = calcTotalDuration(a.segments);
        const durB = calcTotalDuration(b.segments);
        return durA - durB;
      });
    case 'optimal':
      return [...items].sort((a, b) => {
        const durA = calcTotalDuration(a.segments);
        const durB = calcTotalDuration(b.segments);
        const optimalA = a.price * durA;
        const optimalB = b.price * durB;
        return optimalA - optimalB;
      });
    default:
      return items;
  }
};

export default getSortedTickets;
