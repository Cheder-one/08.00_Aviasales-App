import generateId from './generateId';

const addIdEachItem = (data) => {
  const modifiedData = data.map((item) => ({
    id: generateId(),
    ...item,
  }));
  return modifiedData;
};

export default addIdEachItem;
