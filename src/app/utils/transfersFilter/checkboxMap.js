const checkboxMap = [
  { id: 'all', value: 'Все' },
  { id: 'none', value: 'Без пересадок' },
  { id: '1', value: '1 пересадка' },
  { id: '2', value: '2 пересадки' },
  { id: '3', value: '3 пересадки' },
];

const getIdsWithoutNone = () => {
  const without = checkboxMap.filter((item) => item.id !== 'none');
  const ids = without.map((item) => item.id);
  return ids;
};

const getAllIds = () => {
  const ids = checkboxMap.map((item) => item.id);
  return ids;
};

export { checkboxMap, getAllIds, getIdsWithoutNone };
